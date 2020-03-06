import React, { useState } from 'react';

const GDPR = (props) => {
    const [formVisible, setVisibility] = useState(false);
    return (
        <div>
            <p onClick={() => setVisibility(!formVisible)} style={{ cursor: 'pointer' }}>
                {formVisible ? 'Close' : 'Click Here'}
            </p>
            {
                formVisible &&
                <select>
                    <option value="uk">United Kingdom</option>
                    <option value="germany">Germany</option>
                    <option value="canada">Canada</option>
                    <option value="mexico">Mexico</option>
                </select>
            }
        </div>
    );
}

export default GDPR;