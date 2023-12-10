import React, { createContext, useState } from 'react';
import './fullboard-div.css';
import InputSelectionMethod from './InputSelectionMethod';
import OutputSelectionMethod from './OutputSelectionMethod';
import SubmitSec from './SubmitSec';
// import ExchangeIcon from './ExchangeIcon';
// import ClearBtnNav from './ClearBtnNav';

export const context = createContext()


export default function HomeCom(props) {

    const [fromselectedValue, setFROMselectedValue] = useState('en');
    const [toselectedValue, setToselectedValue] = useState('ml');
    const [textareaValue, setTextareaValue] = useState('');

    const handleChangeFrom = (value) => {
        setFROMselectedValue(value);
    };

    const handleChangeTo = (value) => {
        setToselectedValue(value);
    };

    const handleTextareaChange = (event) => {
        const newText = event.target.value;
        const convertedText = newText.replace(/\./g, ',');
        setTextareaValue(convertedText);
      };
      
    const clrBtn = (textareaValue) => {
        setTextareaValue('');
    };


    return (
        <>
            <div className='content-div'>

                <div className='lang-sel'>
                    <b>FROM <InputSelectionMethod fromselectedValue={fromselectedValue} onChange={handleChangeFrom} /></b>
                </div>

                {/* <ExchangeIcon /> */}

                <div className='lang-sel'>
                    <b>TO   <OutputSelectionMethod toselectedValue={toselectedValue} onChange={handleChangeTo} /></b>
                </div>

            </div><br></br>

            <div className='first-section'>
                <h5>TYPE YOUR SENTENCE</h5>
                <div >
                    <textarea className='field-boarder'
                        placeholder='Text Here'
                        onChange={handleTextareaChange}
                        value={textareaValue}
                    ></textarea>
                </div>
                <button className='Clr-Btn' onClick={clrBtn}>CLEAR</button>
            </div>
            <context.Provider value={{ textareaValue, fromselectedValue, toselectedValue}}>
                <SubmitSec />
                {/* <ClearBtnNav /> */}
            </context.Provider>
        </>
    );
};







// https://translate.googleapis.com/translate_a/single?client=gtx&dt=t&q=hello&sl=en&tl=ml