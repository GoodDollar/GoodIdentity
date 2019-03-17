// @flow
import React from 'react'
import { Button, TextInput } from 'react-native';
import { View, Text, Image } from 'react-native'


const VouchPayment = (props) =>{
        console.log('VouchPayment Loaded')
        let stakeType:string = props.stakeType
        console.log({stakeType})

        if (!stakeType) // no payment type - don't show.
          return (<View/>)
          
          let candidate = props.candidate
          console.log({candidate})

          let title = ''
          if (stakeType.toLowerCase() ==='vouch')
            title = 'Vouch for '+ candidate.firstname
          else 
            title = candidate.firstname + ' is Fake'
       
          return(
            
           <View>

              <Image  alt="" style={{width: 300, height: 200}} source={{uri: candidate.photo}}/>
              <Text> {title}</Text>
              <br/>
              <Text>How much ETH are you willing to stake?</Text>
              <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}} onChange={props.handleChange}/>
              <Button title='Submit' onPress={props.handleSubmit}>Submit</Button>
          </View>
          

          
        )

}


export default VouchPayment



