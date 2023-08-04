import React, { useState } from 'react';

const AutoAdjustingTextarea = () => {
  const [textareaValue, setTextareaValue] = useState('');

  const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);
    console.log(event.target.value);
    console.log(textareaValue);
  };

  const calculateTextareaHeight = () => {
    const tempElement = document.createElement('textarea');
    tempElement.setAttribute('rows', '5');
    tempElement.style.width = '100%';
    tempElement.value = textareaValue;

    document.body.appendChild(tempElement);
    const height = tempElement.scrollHeight;

    document.body.removeChild(tempElement);

    return height;
  };

  const textareaHeight = calculateTextareaHeight();

  return (
    <>
    <div>
      <textarea
        rows="2"
        style={{ height: textareaHeight }}
        value={textareaValue}
        onChange={handleTextareaChange}
        onInput={() => {
          const height = calculateTextareaHeight();
          textareaHeight !== height && setTextareaValue((prevValue) => prevValue);
        }}
      />
    </div>
    </>
  );
};

export default AutoAdjustingTextarea;
