
// @flow
import _ from 'lodash'
import React from 'react'
import Gun from 'gun/gun'
//import IDDao from './IDDao'
import Store from '../store/Store'
import Utils from '../shared/Utils'
import gundb from '../lib/gundb/gundb'
import { Text,TextInput } from 'react-native'
import { View, Image, Button } from 'react-native'
import Proposal from '../flow-typed/identityDaoTypes'
import emptyUserProfile from '../flow-typed/identityDaoTypes'

 
type State = {
    candidate:Profile,
    proposal:Proposal
}

type Props = {
};



class Register extends React.Component<Props, State> {

    state = {
        candidate:{},
        proposal : {
            ethOffering: 0,
            publicKey: '',
            hashed_profile:'',
        }
      };

    constructor(props:Props) {
        super(props);
        console.log('Register Screen loaded')
        console.log({global})
    }

    async componentDidMount() {
        let userAddress:string
        await Utils.init()    
        //userAddress = await Utils.web3.eth.getAccounts()
        global.web3.eth.getAccounts((error, accounts) => {

            userAddress = accounts[0]
            console.log({userAddress})
            this.setState(prevState=>{return{candidate:{...prevState.candidate,publicKey:userAddress}}},console.log('candidate:'+this.state.candidate))
        });
        
        
    }


    Register = (candidate:Profile,proposal:Proposal) =>{
        let userProfile:UserProfile = {...emptyUserProfile}

        userProfile.profile = candidate
        userProfile.hashed_profile = Utils.web3.utils.sha3(JSON.stringify(candidate))
        console.log({userProfile})

        proposal.publicKey = candidate.publicKey
        proposal.hashed_profile = userProfile.hashed_profile

        let userDBKey = candidate.publicKey
        let propsalDBKey = 'proposal_' + userDBKey

        // Put the user profile + proposal on GunDB
        const gunuser = global.gun.user()
        const password = 'password' //TODO: should it be the user private key? If it is stored on gunDb, can we encreypt it?
          
        gunuser.create(candidate.publicKey,password,async userCreated =>{
            console.log('gundb user created', userCreated)
            gunuser.auth(candidate.publicKey, password, user => {
                if(!gunuser.is){ 
                    console.log('user is not signed in')
                    return 
                }
                gunuser.get(userDBKey).put(userProfile)
                gunuser.get(propsalDBKey).put(proposal)
                
            })

        })
        

        // Put the user proposal link on the blockchain


        
        
        


    }

    render() {
    
        const candidate = this.state.candidate
        console.log({candidate})

        return(
            <View>
                <TextInput placeholder={'First Name'} style={{height: 40, borderColor: 'gray', borderWidth: 1}} onChangeText={(text) => this.setState(prevState=>{return{candidate:{...prevState.candidate,firstname:text}}})} value={this.state.text} />
                <TextInput placeholder={'Last Name'} style={{height: 40, borderColor: 'gray', borderWidth: 1}} onChangeText={(text) => this.setState(prevState=>{return{candidate:{...prevState.candidate,lastname:text}}})} value={this.state.text}/>
                <TextInput placeholder={'Facebook profile URL'} style={{height: 40, borderColor: 'gray', borderWidth: 1}} onChangeText={(text) => this.setState(prevState=>{return{candidate:{...prevState.candidate,socialMedia:{...prevState.candidate.socialMedia,facebook:text}}}})} value={this.state.text}/>
                <TextInput placeholder={'Twitter profile URL'} style={{height: 40, borderColor: 'gray', borderWidth: 1}} onChangeText={(text) => this.setState(prevState=>{return{candidate:{...prevState.candidate,socialMedia:{...prevState.candidate.socialMedia,twitter:text}}}})} value={this.state.text}/>
                <TextInput placeholder={'Instagram profile URL'} style={{height: 40, borderColor: 'gray', borderWidth: 1}} onChangeText={(text) => this.setState(prevState=>{return{candidate:{...prevState.candidate,socialMedia:{...prevState.candidate.socialMedia,instagram:text}}}})} value={this.state.text}/>
                <TextInput placeholder={'GitHub profile URL'} style={{height: 40, borderColor: 'gray', borderWidth: 1}} onChangeText={(text) => this.setState(prevState=>{return{candidate:{...prevState.candidate,socialMedia:{...prevState.candidate.socialMedia,github:text}}}})} value={this.state.text}/>
                <TextInput placeholder={'LinkedIn profile URL'} style={{height: 40, borderColor: 'gray', borderWidth: 1}} onChangeText={(text) => this.setState(prevState=>{return{candidate:{...prevState.candidate,socialMedia:{...prevState.candidate.socialMedia,linkedin:text}}}})} value={this.state.text}/>
                <TextInput placeholder={'ETH Offering'} style={{height: 40, borderColor: 'gray', borderWidth: 1}} onChangeText={(text) => this.setState(prevState=>{return{proposal:{...prevState.proposal,ethOffering:text}}})} value={this.state.text}/>
                <Text style={{height: 40, borderColor: 'gray', borderWidth: 1}}>{candidate.publicKey}</Text>
      
                <Button title='Register' onPress={()=>this.Register(this.state.candidate,this.state.proposal)}>Register</Button>
            </View>
        )
     
    }
}


export default Store.withStore(Register);