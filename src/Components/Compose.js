import React from 'react'

const Compose = () => {
    return(
        <div className="Email">
            <div className="new-email">
                <div>
                    <label for="subjectTo">To: </label>
                    <input type="text" name="subjectTo"></input>
                </div>
                <div>
                    <label for="subjectInput">Subject: </label>
                    <input type="text" name="subjectInput"></input>
                </div>
                <textarea></textarea>
                <div>
                    <button>Send</button>
                </div>
            </div>
        </div>
    )

}

export default Compose
