import React, { Component } from 'react';
import './Addpanel.css'

const Input = ({value, onChange, description, index, key})=> (
            <input name={description} type="text" onChange={(e) => onChange(e, index)} value={value}  />
        )


export default Input;