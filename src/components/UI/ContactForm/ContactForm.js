import React, {useState} from 'react';
import SvgClose from '../../../assets/svg/svgClose/svgClose';
import styles from './contactForm.module.scss';
import axios from 'axios';

/* eslint-disable max-len */

const ContactForm = (props) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    
    const submitEmail = (e) => {

        console.log([name, email, message])
        e.preventDefault();
        axios({
            method: "POST", 
            url:"/send", 
            data: {
                name: name,
                email: email,
                message: message,
            }}).then((response)=>{
            if (response.data.status === 'success'){
                alert("Message Sent."); 
                resetForm()
            }else if(response.data.status === 'fail'){
                alert("Message failed to send.")
            }
        })
    }

    const resetForm = () => {
        setName('');
        setEmail('');
        setMessage('');
    }

    return (
        <div className={styles.ContactForm}>
            <SvgClose clicked={props.clicked} />
            <div className={styles.FormContainer}>
                <form action={`mailto:contact@yourdomain.com`} method={`POST`} name={`EmailForm`}>
                    <h1>GET IN TOUCH</h1>
                    <label>
                        name:
                        <input onChange={event => setName(event.target.value)}  value={name} required type="text" id="name"/>
                    </label>
                    <label>
                        email:
                        <input  onChange={event => setEmail(event.target.value)} value={email} required type="email" id="name"/>
                    </label>
                    <label style={{ border: `none` }}>message:</label>
                    <textarea  onChange={event => setMessage(event.target.value)}  value={message} required id="message"></textarea>
                    <button type="submit" onClick={e => submitEmail(e)}>SEND</button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
