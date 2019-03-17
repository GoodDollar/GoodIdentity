/* @flow */
import _ from 'lodash'
import Web3 from 'web3'
import bs58 from 'bs58'
import Utils from './../shared/Utils'
import blockstack from 'blockstack'
import ethUtils from 'ethereumjs-util'
import WebsocketProvider from 'web3-providers-ws'
import Web3PromieEvent from 'web3-core-promievent'
import Proposal from '../flow-typed/identityDaoTypes'
import { promisifyTxHash } from '/imports/web3utils.js'
import GENContract from '/imports/blockchain/build/contracts/DAOToken.json'
import IdentityContract from '/imports/blockchain/build/contracts/Identity.json'
import GenesisContract from '/imports/blockchain/build/contracts/GenesisProtocol.json'



const CONTRACTS_DISABLED = false
export default class IDDao {

  web3: Web3;
  gasPrice: number
  pkey: string
  addr: string
  walletOwnerPubKey: Buffer
  netword_id: number


  constructor() {
 
    this.gasPrice = 2400000000
    this.gasLimit = 2000000

    this.identityContract = new this.web3.eth.Contract(IdentityContract.abi, IdentityContract.networks[this.netword_id].address, {  gas: this.gasLimit })
    this.genesisContract = new this.web3.eth.Contract(GenesisContract.abi, GenesisContract.networks[this.netword_id].address, { from: this.walletOwnerAddress, gas: this.gasLimit })
    this.GENContract = new this.web3.eth.Contract(GENContract.abi, GENContract.networks[this.netword_id].address, { from: this.walletOwnerAddress, gas: 4500000 })

    this.listenProposals2 = this.listenProposals2.bind(this)
    this.addEventToAllProposals = this.addEventToAllProposals.bind(this)
    this.handleProposals = this.handleProposals.bind(this)
    this.profileProcessed = this.profileProcessed.bind(this)

    this.identityStatus = this.getIdentityStatus(this.walletOwnerAddress).then(x=>{this.identityStatus=x; console.log("this.identityStatus", this.identityStatus)})
    this.proposals = {}
    this.proposalPromise = undefined
    this.allProposalsLoaded = false
    this.amountOfProposals = 0
    this.amountOfProcessedProposals = 0
    
  }

  /*
    write profile to identity dao and pay fee
  */
  async register(proposal:Proposal, feeAmount:number): Promise<[typeof Web3PromieEvent]> {
    let proposalJ = Buffer.from(JSON.stringify(proposal))

    
    // 2. Convert the hashed ips data to Byte32
    let proposalByte32 = Utils.getBytes32FromData(proposalJ)
    console.log({ proposalByte32 })

    let amount = this.web3.utils.toWei(feeAmount.toString(), "ether");
    let gas = 400000//await this.identityContract.methods.proposeProfile(ipfsByte32).estimateGas({from:this.walletOwner})
    let gasPrice = (await this.gasPrice) * 1.5
    console.log({ gas, gasPrice, amount })
    //protofire
    let balance = await this.web3.eth.getBalance(this.web3.eth.defaultAccount)
    console.log("balance for account.",this.walletOwnerAddress,balance)
    console.log({amount})
    if (balance > 0) {
      let txHash = await this.identityContract.methods.proposeProfile(proposalByte32).send({
        from:this.web3.eth.defaultAccount,
        gasPrice,
        gas,
        value: amount
      }
      ).catch(err => {
          console.error(err)
          return;
      }
      )
      console.log("Registered profile to DAO", txHash)
      return txHash
    }

  }

  async getProposalProfileIPFS(ipfsByte32) {

    let ipfsHash = this.getDataFromBytes32(ipfsByte32)
    console.log("getting ipfs file for:", ipfsByte32, ipfsHash)
    return new Promise((reject, resolve) => {
      this.ipfs.catJSON(ipfsHash, (err, result) => {
        console.log("got ipfs response for:", ipfsByte32, ipfsHash, err, result)
        if (err) {
          console.log("error ipfs", err)
          reject(err)
        }
        else {

          resolve(result)
        }
      });
    }).catch(e => e)
  }

  profileProcessed() {

    this.amountOfProcessedProposals++
    console.log(this.amountOfProcessedProposals)
    if (this.amountOfProcessedProposals == this.amountOfProposals) {
      this.allProposalsLoaded = true
      console.log("all proposals loaded", this.proposals)
    }
  }


  handleProposals(error, events) {

    this.amountOfProposals = events.length
    this.amountOfProcessedProposals = 0

    if (this.amountOfProposals == this.amountOfProcessedProposals) { // no need to load proposals.
      this.allProposalsLoaded = true
      return;
    }

    if (error)
      console.error(error)
    else {
      console.log("profile proposals", events) // same results as the optional callback above
      //events.forEach(e => this.addEventToAllProposals(e))


      // 1. Will wait till *all* events are mapped to their profile - and get an array of profiles
      // 2. Wait for all profiles to complete this action: For each profile, wait again to get extended profile information, and save if on the "this.proposals" object
      // 3. When all completed, return this.proposals when it's fully fulled.
      Promise.all(events.map(e => this.identityContract.methods.profiles(e.returnValues._address).call()
        .then(p => {
          this.addEventToAllProposals(p, e.returnValues._address)
        })))

    }
  }

 
  async getIdentityStatus(addr) {
    if (CONTRACTS_DISABLED)
      return 'none'
    let profile = await this.identityContract.methods.profiles(addr).call()
    if (profile.state == 3)
      return 'approved'
    let proposalStatus = await this.genesisContract.methods.state(profile.proposalId).call()
    if (proposalStatus == 3)
      return 'pending vouch'
    if (proposalStatus == 4)
      return 'pending vote'
    return 'none'
  }



}
