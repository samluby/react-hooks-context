import React, { Component, createContext } from 'react'

const { Provider, Consumer: CountConsumer } = createContext()

class CountProvicer extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }


    decreaseHandler = () => {
        this.setState({
            count: this.state.count - 1
        })
    }
    
    increaseHandler = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render () {
        const provicerCtx = {
            count: this.state.count,
            onDecrease: this.decreaseHandler,
            onIncrease: this.increaseHandler
        }
        return (
            <Provider value={provicerCtx}>
                {this.props.children}
            </Provider>
        )
    }
}

export {
    CountProvicer,
    CountConsumer
}



