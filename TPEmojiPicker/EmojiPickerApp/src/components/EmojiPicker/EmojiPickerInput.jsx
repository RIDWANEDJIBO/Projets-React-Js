import EmojiPicker from './EmojiPicker';
import {forwardRef, useRef } from 'react';


export default function EmojiPickerInput(){

    const refInput=useRef(null);

    return(
        <div className='box-emoji'>
            <label htmlFor="message">Message</label>
            <EmojiPicker ref={refInput} />
            <textarea ref={refInput} id="message"></textarea>
        </div>
    )
}

