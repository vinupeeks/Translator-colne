import React from 'react';
import './fullboard-div.css';
import OutputSelectionMethod from './OutputSelectionMethod';

export default function OutputSec(props) {
    return (<>
        <div className='content-div'>
            <div className='first-section'>
                <h5>TRANSLATED SENTENCE HERE</h5>
                <div className='Output-field'
                placeholder='Translated Data Here'>
                    <p>{props.propData}</p>
                </div>
            </div >
        </div>
    </>

    )
}
