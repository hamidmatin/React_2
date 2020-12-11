import React, {useState, useEffect} from 'react'

export default function Home() {
    const [counter, setCounter] = useState(0);
    const [counterDown, setCounterDown] = useState(10);

    useEffect(()=>{
        console.log('Counter did mount or update');
        return(()=>{
            console.log('Counter will mount or update');
        });
    }, []);

    // useEffect(()=>{
    //     console.log('CounterDown did mount or update');
    //     return(()=>{
    //         console.log('CounterDown will mount or update');
    //     });
    // }, [counterDown]);

    
    return (
        <div className='container'>
            <h2>Home</h2>
            <hr/>
            <p>Counter : {counter}</p>
            <button onClick={()=>{setCounter(counter + 1)}}>Count</button>
            <hr/>
            <p>Counter : {counterDown}</p>
            <button onClick={()=>{setCounterDown(counterDown - 1)}}>Count</button>
        </div>
    )
}
