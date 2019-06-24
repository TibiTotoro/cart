import React, {useState} from 'react';

export default function(props){
    const {min, max} = props;
    let [cnt, setCnt] = useState(0);

    let decrease  = () => {
        if (cnt > min) 
        setCnt(cnt - 1);       
    };

    let  increase = () => {
        if (cnt < max) 
        setCnt(cnt + 1);
    };

    let setInput = () => {
        this.setState({cnt: this.value});
    };

    return (
        <div>
            <button onClick={decrease}>Minus 1</button>
            <input onChange={setInput} type="text" value={cnt} />  
            <span className='errorTxt'>Что-то не так</span>
                 <br/>
            <button onClick={increase}>Plus 1</button>
        </div>
    );
}