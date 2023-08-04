import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import OutputSec from './OutputSec';
import { context } from './HomeCom';

export default function SubmitSec() {
    const value = useContext(context)

    const [text, setText] = useState('');
    const [sam, setSam] = useState('0');

    const Req = () => {
        setSam(sam + 1);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://translate.googleapis.com/translate_a/single?client=gtx&dt=t&q=${value.textareaValue}&sl=${value.fromselectedValue}&tl=${value.toselectedValue}`);
                let arr = response.data[0];
                let arr2=arr[0];
                // console.log(arr2[0]);
                setText(arr2[0]);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [sam]);

    return (<>
        <br></br>
        <div className='submit-div'>
            <button className='submit-Btn' onClick={Req}>TRANSLATE</button>
        </div>
        <br></br>
        <div>
            <OutputSec propData={text} />
        </div>
    </>
    )
}
