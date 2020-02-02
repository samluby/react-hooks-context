import React, { Component } from 'react'
import { CountBtn, CountSpan } from './components'
import { CountProvicer } from './CountStore'

export default class App extends Component {

    render () {
        return (
            <CountProvicer>
                <CountBtn type="decrease"> - </CountBtn>
                <CountSpan />
                <CountBtn type="increase"> + </CountBtn>
            </CountProvicer>
        )
    }
}