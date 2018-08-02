import React from 'react'

class My extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        console.log(this.props.match)
        return (
            <div>
                {this.props.match.params.location}
            </div>
        )
    }
}

export default My