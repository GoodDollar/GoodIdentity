//@flow
import _ from 'lodash'
import bs58 from 'bs58'
import IPFS from 'ipfs-mini'
import ethUtils from 'ethereumjs-util'
import Utils from './../shared/Utils'
import { Accounts } from 'web3-eth-accounts'
import stripHexPrefix from 'strip-hex-prefix'
import Proposal from '../flow-typed/identityDaoTypes'
//import WebsocketProvider from 'web3-providers-ws'
//import Web3PromieEvent from 'web3-core-promievent'
//import {promisifyTxHash} from '/imports/web3utils.js'
import Web3 from 'web3' // import web3 v1.0 constructor



export class Mock {
    web3:Web3
    loremPicsum:Array<string>

    constructor() {
        this.init()
        this.loremPicsum = [{"format":"jpeg","width":5616,"height":3744,"filename":"0000_yC-Yzbqy7PY.jpeg","id":0,"author":"Alejandro Escamilla","author_url":"https://unsplash.com/@alejandroescamilla","post_url":"https://unsplash.com/photos/yC-Yzbqy7PY"},{"format":"jpeg","width":5616,"height":3744,"filename":"0001_LNRyGwIJr5c.jpeg","id":1,"author":"Alejandro Escamilla","author_url":"https://unsplash.com/@alejandroescamilla","post_url":"https://unsplash.com/photos/LNRyGwIJr5c"},{"format":"jpeg","width":5616,"height":3744,"filename":"0002_N7XodRrbzS0.jpeg","id":2,"author":"Alejandro Escamilla","author_url":"https://unsplash.com/@alejandroescamilla","post_url":"https://unsplash.com/photos/N7XodRrbzS0"},{"format":"jpeg","width":5616,"height":3744,"filename":"0003_Dl6jeyfihLk.jpeg","id":3,"author":"Alejandro Escamilla","author_url":"https://unsplash.com/@alejandroescamilla","post_url":"https://unsplash.com/photos/Dl6jeyfihLk"},{"format":"jpeg","width":5616,"height":3744,"filename":"0004_y83Je1OC6Wc.jpeg","id":4,"author":"Alejandro Escamilla","author_url":"https://unsplash.com/@alejandroescamilla","post_url":"https://unsplash.com/photos/y83Je1OC6Wc"},{"format":"jpeg","width":5245,"height":3497,"filename":"0005_LF8gK8-HGSg.jpeg","id":5,"author":"Alejandro Escamilla","author_url":"https://unsplash.com/@alejandroescamilla","post_url":"https://unsplash.com/photos/LF8gK8-HGSg"},{"format":"jpeg","width":5616,"height":3744,"filename":"0006_tAKXap853rY.jpeg","id":6,"author":"Alejandro Escamilla","author_url":"https://unsplash.com/@alejandroescamilla","post_url":"https://unsplash.com/photos/tAKXap853rY"},{"format":"jpeg","width":4728,"height":3168,"filename":"0007_BbQLHCpVUqA.jpeg","id":7,"author":"Alejandro Escamilla","author_url":"https://unsplash.com/@alejandroescamilla","post_url":"https://unsplash.com/photos/BbQLHCpVUqA"},{"format":"jpeg","width":5616,"height":3744,"filename":"0008_xII7efH1G6o.jpeg","id":8,"author":"Alejandro Escamilla","author_url":"https://unsplash.com/@alejandroescamilla","post_url":"https://unsplash.com/photos/xII7efH1G6o"},{"format":"jpeg","width":5616,"height":3672,"filename":"0009_ABDTiLqDhJA.jpeg","id":9,"author":"Alejandro Escamilla","author_url":"https://unsplash.com/@alejandroescamilla","post_url":"https://unsplash.com/photos/ABDTiLqDhJA"},]
        
    }

    async init() {
        this.web3 = await Utils.getWeb3()
        console.log("Mock initialized")
    }


    mockProposals = async ():Promise<Array<Proposal>> => {

        let fee = 0.1
        
        let proposals:Array<Proposal> = []
        for (let i = 0; i < 4; i++) {
            let account = this.web3.eth.accounts.create();
            //console.debug("mocking proposal "+i)
            //let iddao = Daostack.init(stripHexPrefix(account.privateKey))
            //this.iddao = iddao
    
             //let walletLoadedOnServer =  await Meteor.call('loadWallet', account.address)
            let username = "generated.id.blockstack" + i
            let firstname = "firstname"+i 
            let lastname = "lastname" +i
            //let profilePath = await blockstack.putFile("profile"+i+".js", JSON.stringify(username), { encrypt: false })
            let profilePath = "profile"+i+".js"

            //let ethOffering = 10*(10^(i*-1)),
            let ethOffering = 0.056
            let contentUrl = 'https://picsum.photos/200/300'
            let facebook = "https://www.facebook.com/person"+i+"/"
            let twitter = "https://twitter.com/person"+i+"/"
            let linkedin = "https://www.linkedin.com/person"+i+"/"
            let instagram = "https://www.instagram.com/person"+i+"/"
            let github = "https://github.com/person"+i+"/"
            let data =
            {
                    ethOffering,
                    appPrivateKey: account.privateKey,
                    authResponseToken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NksifQ.eyJqdGkiOiIzOGMyZTUyZC1iYmYyLTQ5MzAtODdkZi01MmFkMGEyMTQ2MTAiLCJpYXQiOjE1NDI1MzIzODIsImV4cCI6MTU0NTEyNDM4MiwiaXNzIjoiZGlkOmJ0Yy1hZGRyOjFGUWlXU1pqWkhFMWtxbTRRRHA4ZTFYdmhBYnlQWFUyaHIiLCJwcml2YXRlX2tleSI6IjdiMjI2OTc2MjIzYTIyMzkzMzYzMzUzNDMxMzY2NjM3MzczNTM5MzEzODY2NjYzMTYzMzMzMzM5NjQzMjYzMzUzMjMwMzIzNTYyMzQ2MzIyMmMyMjY1NzA2ODY1NmQ2NTcyNjE2YzUwNGIyMjNhMjIzMDMyNjEzNDM3NjQzODM2MzgzMzY2MzE2NjY1NjIzMDM2NjY2MzYzMzUzNDYxNjU2MTY2MzMzNjY0MzYzMTMwMzczMDMyNjIzODMzMzE2MTMzMzMzMDY2NjIzNzMzMzc2NjMzMzYzNzMzMzczMDM3MzczMzM0NjI2NTYyNjE2NjY0MzQyMjJjMjI2MzY5NzA2ODY1NzI1NDY1Nzg3NDIyM2EyMjMxMzI2NDY0MzA2MzMzNjU2NTM2MzczOTMwMzc2MTMzMzkzODY2NjE2NTMxNjMzMzMzMzIzNDM1MzM2NDM0MzkzOTY0NjE2NjM2MzYzMzMyMzc2NDMwMzIzNjM0MzQ2NjMyMzgzMDM0MzUzMTY0NjM2NDYyMzMzODYxMzA2MTYzNjYzNjM1MzczODM4MzY2MTMxNjI2MzMzMzIzNzM2NjEzMTM2MzU2NDY1NjYzNjM0NjQzODY1MzgzMDY1MzEzOTY1MzgzMzMyMzMzMjMxNjIzOTYyMzg2MjM4MzEzMzMwMzQzNDYxNjQzOTM1MzQzMzMxMzUzNDMwNjYzMjM4NjYzNDM5MzczOTM3MzczNzMxMzk2NjM1MzIzODY2MzQ2NDMxMzAzNTMwMzYzMDM1MzQzOTM1MzAzMzY0NjYzODY2MjIyYzIyNmQ2MTYzMjIzYTIyMzUzMDM0Mzc2NDMyNjM2NDY1MzQ2NDYzMzI2NTMzMzI2MzM0NjM2NDY1NjIzNTY2NjIzMTMzMzk2MjY0NjQ2MjYzMzc2MTM2NjQzODYyMzIzMzM4MzczOTMzMzczNzYzNjI2NDMyMzc2MjYzMzk2NDM0MzEzOTY0MzIzNTMyMzUyMjJjMjI3NzYxNzM1Mzc0NzI2OTZlNjcyMjNhNzQ3Mjc1NjU3ZCIsInB1YmxpY19rZXlzIjpbIjAyMGJlYjM3NGMxMjA1YjYyYTBkYjFmODY1N2UyNmFkZWJjNDdiM2VlNjE1NjQ4MTljYjRlNWZhNjA4ODE2YjA4ZiJdLCJwcm9maWxlIjpudWxsLCJ1c2VybmFtZSI6ImhhZGFyYm1kZXYzLmlkLmJsb2Nrc3RhY2siLCJjb3JlX3Rva2VuIjpudWxsLCJlbWFpbCI6bnVsbCwicHJvZmlsZV91cmwiOiJodHRwczovL2dhaWEuYmxvY2tzdGFjay5vcmcvaHViLzFGUWlXU1pqWkhFMWtxbTRRRHA4ZTFYdmhBYnlQWFUyaHIvcHJvZmlsZS5qc29uIiwiaHViVXJsIjoiaHR0cHM6Ly9odWIuYmxvY2tzdGFjay5vcmciLCJ2ZXJzaW9uIjoiMS4yLjAifQ.-x79zyAxPvtyYYfIhh-oy256B-vdmiU-iuDCexlW3MQBxSpRbXmGk3-L1X7P6WfhY7iG3kzmV0EoW4smV76I1w",
                    coreSessionToken: null,
                    decentralizedID: "did:btc-addr:1FQiWSZjZHE1kqm4QDp8e1XvhAbyPXU2hr",
                    hubUrl: "https://hub.blockstack.org",
                    identityAddress: "1FQiWSZjZHE1kqm4QDp8e1XvhAbyPXU2hr",
                    photo:contentUrl,
                    profile: {
                        type: "Person",
                        context: "http://schema.org",
                        apps: {
                            http: "https://gaia.blockstack.org/hub/15x6kscLKQpwhRrfJqwUrjh5SmDnGoiTrN/"
                        }
                    },
                    username,
                    firstname,
                    lastname,
                     socialMedia:{
                        facebook,
                        twitter,
                        linkedin,
                        instagram,
                        github,
         }
                     
        
                
            }

            let dataHash = this.web3.utils.sha3(JSON.stringify(data))
            proposals.push(data)



            let ipfsData = {
                address: account,
                hash: dataHash,
                path: profilePath
            }

            
            //let res = await this.register(ipfsData, fee)
            //let res = await this.iddao.register(ipfsData, fee)
            // console.log('wrote identity to dao', { res })
            
        }
        return Promise.resolve(proposals)
    }
}

export default new Mock()
