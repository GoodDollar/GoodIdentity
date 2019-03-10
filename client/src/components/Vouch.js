// @flow
import _ from 'lodash'
import React from 'react'
import Store from '../store/Store'
import {Mock} from './../test/Mock'
import VouchPayment from './VouchPayment'
import Proposal from '../flow-typed/identityDaoTypes'
import { View, Image, Button } from 'react-native'
import CandidateSelector from './CandidateSelector'


type State = {
    proposalsLoaded:boolean,
    stakeType:string,
    stakeValue:number,
    selectedCandidate:Proposal,
    candidates:Array<Proposal>
}

type Props = {
};



class Vouch extends React.Component<Props, State> {

    state = {
        proposalsLoaded:false,
        stakeType:'',
        stakeValue:0,
        candidates: [],
        selectedCandidate:{},
        candidatesList:[],
      };

    constructor(props:Props) {
        super(props);
        console.log('Vouch Screen loaded')
    }

    loadCandidatesData = (proposals:Array<Proposal>) => {
        
        //let proposals = await Daostack.getProposals()
        let allProposals:Array<Proposal> = proposals.map((proposal,idx) => {
            
            // console.log({firstName})
            return {
                id:idx,
                proposalId:proposal.proposalId,
                photo:proposal.photo,
                firstname:proposal.firstname,
                lastname:proposal.lastname,
                username:proposal.username,
                ethOffering:proposal.ethOffering,
                socialMedia:proposal.socialMedia,
              }
          })
          
          this.setState((state, props) => ({
            candidates: allProposals,
            selectedCandidate:allProposals[0]?allProposals[0]:undefined
        }));
        return allProposals
     }

    componentDidMount() {
        let mock = new Mock()
        mock.mockProposals().then(proposals => this.loadCandidatesData(proposals))
    }

    Vouch = () => {
        this.setState((state, props) => ({
            stakeType: 'Vouch'
        }));
    }

    Fake = () =>{
        this.setState((state, props) => ({
            stakeType: 'Fake'
        }));

   }

    updateSelectedCandidate = (candidate:Proposal) =>{
        this.setState((state, props) => ({
            selectedCandidate: candidate
        }),console.log('updated selected candidate ',{candidate}));

    }

    returnFromPayment = () =>{
      this.updateSelectedCandidate(undefined)
      this.setState((state, props) => ({
            stakeType: ''
        }));
    }

    handlePaymentChange = (e:Event) =>{
        e.preventDefault()
        e.persist()
        this.setState((state, props) => ({
            stakeValue: e.nativeEvent.text
        }));
    }
 
    handlePaymentSubmit = () =>{
        console.log({"stakeValue":this.state.stakeValue});
    }

    render() {
    
        const candidates = this.state.candidates
        console.log({candidates})
        const candidate = this.state.selectedCandidate || this.state.candidates[0];
        console.log({candidate})
        const stakeType = this.state.stakeType
        console.log({stakeType})

        return(
            <View>
                <p className="topHeader">Vouch if profile is real and earn GEN</p>
                <CandidateSelector isOpen={true} candidates={candidates} slideHandler={this.updateSelectedCandidate} isVoter={false} />
                <Button title='Vouch' onPress={()=>this.Vouch()}>Vouch</Button>
                <br />
                <Button title='Fake' onPress={()=>this.Fake()}>Fake</Button>
                
                <VouchPayment stakeType={stakeType} candidate={candidate} handleChange={this.handlePaymentChange} handleSubmit={this.handlePaymentSubmit}></VouchPayment>
            </View>
        )
        /*
        
        

        const candidate = this.state.selectedCandidate || this.props.candidates[0];
        return (
            
            ((this.state.stakeType=="Vouche")&&(<Payment type="Vouche" candidate={candidate} returnFromPayment={this.returnFromPayment}></Payment>))||
            ((this.state.stakeType=="Fake")&&(<Payment type="Fake" candidate={candidate} returnFromPayment={this.returnFromPayment}></Payment>)) ||



           (this.state.stakeType==undefined) && (<div>
                <p className="topHeader">Vouch if profile is real and earn GEN</p>
                <CandidatesSelector isOpen={true} candidates={candidates} slideHandler={this.updateSelectedCandidate} isVoter={false} />

                <div className="innerFlex">
                    <Grid container spacing={0} justify="center">

                        <Grid item xs={6} sm={6}> 

                            <a aria-label="Delete" onClick={()=>this.Fake()} className="roundButton">
                                <img src="./assets/buttonFake.svg" />
                            </a>

                        </Grid>

                        <Grid item xs={6} sm={6}>

                            <a aria-label="Delete" onClick={()=>this.Vouche()} className="roundButton">
                                <img src="./assets/buttonVouch.svg" />
                            </a>

                        </Grid>
                    </Grid>
                </div>
            </div>
            )
            
       )
            */
    }
}


export default Store.withStore(Vouch);