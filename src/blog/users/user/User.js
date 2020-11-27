import React, { Component } from 'react'

export default class User extends Component {
    render() {
        // console.log(this.props)
        // console.log(this.props.match)
        // console.log(this.props.match.params)
        // console.log(this.props.match.params.id)
        return (
            <div>
                <h2>{this.props.name}</h2>
            </div>
        )
    }
}
