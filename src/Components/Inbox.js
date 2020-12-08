import React from 'react'
import { Link} from 'react-router-dom'


const Inbox = ({emails, filterInbox}) => {
        return(
            <div className="Inbox">
                <div>
                    <input id='searchText' type="text"></input>
                    <button onClick={filterInbox}>Search</button>
                </div>
                {emails ? emails.map(email => {
                    return (
                        <div className="inboxEntries" key={email.id}> 
                            <Link to={`/email/${email.id}`}>
                                <div><b>{email.subject}</b> </div>
                                <h2>
                                    ({email.sender})
                                </h2>
                            </Link>
                        </div>
                    )
                }): <div>Loading ...</div>}
            </div>
        )
}

export default Inbox