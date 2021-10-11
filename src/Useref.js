import React from 'react'
import {useRef,useState} from 'react'

export const Useref = () => {
    const myref=useRef();
    const [name,setName] =setName("");
    return (
        <div>
            <input type="text" ref={myref} onChange={(e)=>{
          setName(e.target.value);
            }}  value={name} name="name"/>
        </div>
    )
}
