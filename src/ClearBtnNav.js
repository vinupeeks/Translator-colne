import React, { useContext } from 'react';
import { context } from './HomeCom';


function ClearBtnNav() {
    const value = useContext(context)
  return (
    <>
    <p>{console.log(value.textareaValue)}</p>
    </>
  )
}

export default ClearBtnNav