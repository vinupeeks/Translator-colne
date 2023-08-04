import React, { useState } from 'react';

function ExchangeIcon() {
    const [icon, setIcon] = useState('https://cdn-icons-png.flaticon.com/128/2734/2734827.png');
    return (
        <div><br></br>
            <img src={icon}
                alt="Click to exchange Lan"
                width="35px"
                height="25px" />
        </div>
    )
}

export default ExchangeIcon