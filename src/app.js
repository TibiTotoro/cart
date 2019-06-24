import React from 'react';
import CounterClass from './components/CounterClass/CounterClass.js';
import CounterFunction from './counters/function.js';
import './base.scss'
export default function(){
    return (
        <div>
            <h2>Counter as class</h2>
            <CounterClass min={0} max={42}/>
        </div>
    );
}