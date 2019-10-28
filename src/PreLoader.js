import React from 'react';

const PreLoader = props =>{
    return (
        <div className = "ui active dimmer">
            <div className = "ui big text loader">
                {props.msg}
            </div>
        </div>
    )
}

export default PreLoader;