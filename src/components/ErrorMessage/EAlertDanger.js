import React from 'react'

const EAlertDanger = (props) => {
    return (
        <div>
            <div className="alert alert-danger" role="alert">
                {props.alertMessage}
            </div>
        </div>
    )
}

export default EAlertDanger
