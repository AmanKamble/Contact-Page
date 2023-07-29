import React from 'react'
import Button from './Button/Button';
import { MdOutlineMessage } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";
import "../Styles/ContactForm.css"

const ContactForm = () => {
    const formHandler =(e)=>{
        e.preventDefault()
    }
    return (
        <section className='container'>
            <div className='contactForm'>
                <div className="topBtn">
                    <Button text="VIA SUPPORT CHAT" width='13.75rem' color='white' bg='black' icon={<MdOutlineMessage fontSize="1.3rem" />} />
                    <Button text="VIA CALL" width='13.75rem' color='white' bg='black' icon={<PiPhoneCallFill fontSize="1.3rem" />} />
                </div>

                <Button text="VIA SUPPORT CHAT" width='29.5rem' color='black' bg='white' icon={<MdOutlineMessage fontSize="1.3rem" />} />

                <form onSubmit={formHandler}>
                    <div className="formControl">
                        <label htmlFor="name">Name</label>
                        <input type="text" name='name' required />
                    </div>
                    <div className="formControl">
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' required />
                    </div>
                    <div className="formControl">
                        <label htmlFor="text">Text</label>
                        <textarea name='text' required rows="8" />
                    </div>
                    <div style={{
                        display:'flex',justifyContent:'end'
                    }}>
                        <Button type='submit' text="Submit" width='13.75rem' color='white' bg='black' />
                    </div>
                </form>

            </div>
            <div className='contactImage'>
                <img src="/images/Service 24_7-pana 1.svg" alt="Service 24_7-pana" />
            </div>
        </section>
    )
}

export default ContactForm