import React, { Component } from 'react'
import { CountConsumer } from '../../CountStore'

export default class CountBtn extends Component {

    render () {
        return (
            <CountConsumer>
                {
                    ({ onDecrease, onIncrease }) => {
                        const onClickHandler = this.props.type === 'decrease' ? onDecrease : onIncrease

                        return < button onClick={onClickHandler}>{this.props.children}</button>
                    }
                }
            </CountConsumer >
        )
    }


}