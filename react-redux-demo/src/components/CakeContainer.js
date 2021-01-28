import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

function CakeContainer(props) {
    return (
        <div>
            <h2>No.of cakes - {props.numOfCakes}</h2>
            <button onClick = {props.buyCake}>Buy cakes</button>
        </div>
    )
}

const mapstateToprops = state => {
    return {
        numOfCakes : state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake : () => dispatch(buyCake())
    }
}

export default connect(mapstateToprops,mapDispatchToProps)(CakeContainer)

