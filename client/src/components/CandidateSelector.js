
import React from 'react'
import './styles/CandidateSelector.css'
//import Socialset from '../../Socialset'

import { View, Text, Image, ScrollView } from 'react-native'


const CandidateItem = (props) =>{
        console.log(props)
        return(
            <View>

            <Image  alt=""
              style={{width: 300, height: 200}}
              source={{uri: props.photo}}
            />
            <View>

            <Text>Offering: {props.ethOffering} ETH</Text>

            <Text>{props.firstname + " " + props.lastname}</Text>

            {props.isVoter&&<div>{props.vouched.amount}  Vouched  {props.vouched.money}</div>}
            {props.isVoter&&<div>{props.suspicious.amount}  Suspicious  {props.suspicious.money}</div>}

            

            </View>

        </View>
       )
}


const CandidatesSelector = (props) => {

  
  const candidatesList = props.candidates

  const candidates = candidatesList.map((c, index) => {

    return <CandidateItem
      isOpen={props.isOpen}
      isVoter={props.isVoter}
      key={index}
      photo={c.photo}
      firstname={c.firstname}
      lastname={c.lastname}
      ethOffering={c.ethOffering}
      socialMedia={c.socialMedia}
      proposalId={c.proposalId}
      vouched={c.vouched}
      suspicious={c.suspicious}
    />
  })
  
  return (
  
    <View>
      <ScrollView horizontal={true} pagination={true} onScroll={((index, indexLatest, meta)=>props.slideHandler(candidates[index].props))}>
        {candidates}
      </ScrollView>

      

    </View>

  )
}

export default CandidatesSelector



