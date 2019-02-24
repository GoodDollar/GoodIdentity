// @flow
import Store from '../store/Store'
import { View } from 'react-native'
import {Route} from 'react-router-dom'
import React, { Component } from 'react'
import Voucher from '../components/Vouch'
import Welcome from '../components/Welcome'
import OneOfUs from '../components/OneOfUs'
import type { StoreProps } from '../store/Store'



class PageContainer extends Component<StoreProps> {
    constructor() {
        super();
        console.log('PageContainer loaded')
      
    }
  
    componentDidMount(){

    }

    render() {
        return (
            <View>
                <Route exact path="/" component={Welcome} />
                <Route exact path="/register" component={Welcome} />
                <Route exact path="/oneOfUs" component={OneOfUs} />
                <Route exact path="/vouch" component={Voucher} />


          </View>
        );
    }
}


export default Store.withStore(PageContainer)

