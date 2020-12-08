import React from 'react'

const Email = ({match, emails}) => {
    if (emails){
        const {emailId} = match.params
        var email = emails.filter(email => email.id == emailId)[0]

        return(
            <div className="Email">
                <h1>{email.subject}</h1>
                <h3>From: {email.sender}</h3>
                <p>{email.message}</p>
            </div>
        )
    } else {
        return(
            <div className="Email">Loading...</div>
        )
    }

}

export default Email
