import React from 'react'

import { CountConsumer } from '../../CountStore'

export default function CountSpan () {
    return (
        <CountConsumer>
            {({ count }) => {
                return (<span>{count}</span>)
            }}
        </CountConsumer>
    )
}