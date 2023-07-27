import React from 'react'
import "../Styles/Contact.css";
import { MdOutlineMessage } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";

const Contact = () => {
    return (
        <div className='contact'>
            <div className="top">
                <h1>CONTACT US</h1>
                <p>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </p>
            </div>
            <div className="mid">
                <div className="left">
                    <div className='butttons'>
                        <button> <MdOutlineMessage /> VIA SUPPORT CHAT</button>
                        <button> <PiPhoneCallFill /> VIA CALL</button>
                    </div>
                    <div className='emailBtn'>
                        <button><MdOutlineMessage /> VIA EMAIL FORM</button>
                    </div>
                    <div className='form'>
                        <form>
                            <fieldset>
                                <legend>Name</legend>
                                <input type="text" required />
                            </fieldset>
                            <fieldset>
                                <legend>Email</legend>
                                <input type="email" required />
                            </fieldset>
                            <fieldset>
                                <legend>Text</legend>
                                <input type="text" required />
                            </fieldset>
                        </form>
                    </div>
                    <div className="right">
                        <img src="/images/Service 24_7-pana 1.svg" alt="Service 24_7-pana" />
                    </div>
                </div>
            </div>
            <div className="bottom">
                <button>SUBMIT</button>
            </div>
        </div>
    )
}

            export default Contact