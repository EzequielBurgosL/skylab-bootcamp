import React from 'react'
import ReactDOM from 'react-dom'

function MainContent(props) {

    let image = props.userInformation.avatar_url
    let name = props.userInformation.name
    let bio = props.userInformation.bio
    let location = props.userInformation.location

    return (


        <div>

            <section>
                <h3 className="parrafo">{name}</h3>
                <img alt={name} src={image} />
                <h3>{bio}</h3>
                <h3>{location}</h3>
            </section>

        </div>
    )
}

export default MainContent