import React from 'react'

function SearchFrom(props) {
    return (
        <form onSubmit={props._handlerSearchUser} className="mainForm">
            <input className="input" onChange={props._handlerWriteName}></input>
            <button className="button">Search for me slave!</button>
        </form>
    )
}

export default SearchFrom