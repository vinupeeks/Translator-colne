import React from 'react';

const InputSelectionMethod = ({ onChange }) => {

  const handleOptionChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    onChange(value);
  };

  return (
    <div>
      <select id='option' onChange={handleOptionChange}>
        <option value="en">English</option>
        <option value="hi">Hindi</option>
        <option value="ml">Malayalam</option>
        <option value="ta">Tamil</option>
        <option value="ar">Arabic</option>
        <option value="es">Spanish</option>
        <option value="kn">Kannada</option>
        <option value="bn">Bangla</option>
        <option value="mr">Marathi</option>
        <option value="te">Telugu</option>
        <option value="pa">Punjabi</option>
        <option value="gu">Gujarati</option>
      </select>
    </div>
  );
};

export default InputSelectionMethod;
