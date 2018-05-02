import React from 'react'
import ReactDOM from 'react-dom'


function MainContentError(props) {

    let error = props.userInformation.message

    return (
        <div>
            <h1>{error}</h1>
        </div>
    )
}

export default MainContentError