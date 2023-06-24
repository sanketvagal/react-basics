import { useState } from 'react';

export default function InputComponent() {
    const [inputText, setText] = useState('hello');

    //   function handleChange(e) { 
    //     console.log(e)
    //     setText(e.target.value); 
    //   } 

    return (
        <>
            <input value={inputText} onChange={e => setText(e.target.value)} />
            <p>You typed: {inputText}</p>
            <button onClick={() => setText('hello')}>
                {/* instead of using arrow functions: <button onClick={handleChange} */}
                Reset
            </button>
        </>
    );
} 