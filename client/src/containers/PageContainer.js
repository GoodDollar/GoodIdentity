// @flow
import Store from '../store/Store'
import { View } from 'react-native'
import {Route} from 'react-router-dom'
import React, { Component } from 'react'
import Vouch from '../components/Vouch'
import Welcome from '../components/Welcome'
import OneOfUs from '../components/OneOfUs'
import Register from '../components/Register'
import type { StoreProps } from '../store/Store'

  

class PageContainer extends Component<StoreProps> {
    constructor() {
        super();
        console.log('PageContainer loaded')
    }

    
  
    componentDidMount(){

    }

    render() {
    /*    const MainNavigator = createStackNavigator({
            Home: {screen: Welcome},
            Vouch: {screen: Vouch},
          });*/
          
        return (
            <View>
                <Route exact path="/" component={Welcome} />
                <Route exact path="/oneOfUs" component={OneOfUs} />
                <Route exact path="/vouch" component={Vouch} />
                <Route exact path="/register" component={Register} />


          </View>
        );
    }
}


export default Store.withStore(PageContainer)

