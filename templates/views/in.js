import { useEffect, useState,useRef } from "react";

export default function MyComponent(){
    
    //useState and useEffect
    const [count1,updateValue] = useState(0);
    
    useEffect(()=>{
        document.title=`You clicked ${count1} times`;
    });

    const inputbox = useRef(0);
    const btnclick = ()=>{
        inputbox.current.value = "hello world";
        inputbox.current.focus();
    }
    

    return(
        <>
            <div>This is my MyComponent</div>
            <div> you have clicked {count1}</div>
            <button type="button" onClick={()=>updateValue(count1+1)}>hello</button>
            <br/>

            <button onClick={btnclick}> click to change input box</button>
            <textarea ref={inputbox}></textarea>
        </>
    );
}