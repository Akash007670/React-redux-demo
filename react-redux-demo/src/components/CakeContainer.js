import React from 'react'
import { buyCake } from '../redux/cake/cakeActions'

function CakeContainer() {
    return (
        <div>
            <h2>No.of cakes</h2>
            <button>Buy cakes</button>
        </div>
    )
}

const mapstateToprops = state => {
    return {
        numOfCakes : state.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake : () => dispatch(buyCake())
    }
}

export default CakeContainer