import React from 'react'

const EAlertSuccess = (props) => {
    return (
        <div>
            <div className="alert alert-success" role="alert">
                {props.alertMessage}
            </div>
        </div>
    )
}

export default EAlertSuccess
