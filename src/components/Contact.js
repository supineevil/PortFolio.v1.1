import React, { useState } from 'react';
import '../CSS/Contact.css';
import resume from './Images/Raunak_resume_v.1.2.pdf'
export default function Contact() {

    const [msg,setMsg]=useState(" Thanks for visiting ")
    const handleSubmit=()=>{  
        const scriptURL = 'https://script.google.com/macros/s/AKfycbxMNbgGckR8tkN6aWaopDeVjqYJEaWeMXhTlUC6iv9KiEHFqP3NXD75xV8zoLxUUkDs/exec'
        const form = document.forms['submit-to-google-sheet']
        form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                form.reset()
            })
            .catch(error => console.error('Error!', error.message))
        })
        setTimeout(function (){
            setMsg("Sending Response")
        },2000)
        setTimeout(function (){
            setMsg(`Your response has been sent successfully! Thanks for your feedback `);
        },6000)
        setTimeout(function (){
            setMsg("Have a nice day ")
        },8000)
    }
    return (
        <>
            <div className="contact" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="contact-left">
                            <h1 className="sub-title">Contact ME</h1>
                            <p><a href='mailto:raunakghosh1112@gamil.com'><i className='fa fa-envelope'></i></a>raunakghosh1112@gmail.com</p>
                            <p><a href="tel:7003041502" className="ph"><i className="fa fa-phone"></i></a>7003041502</p>
                            <div className="social-icons">
                                <a href="/"><i className="fab fa-twitter"></i></a>
                                <a href="/"><i className="fab fa-instagram"></i></a>
                                <a href="/"><i className="fab fa-linkedin"></i></a>
                                <a href="https://github.com/supineevil"><i className="fab fa-github"></i></a>
                                
                            </div>
                            <a href={resume} className="btn btn-button"> RESUME </a>
                        </div>
                        <div className="contact-right">
                            <form name='submit-to-google-sheet'>
                                <input type="text" name="Name" placeholder="Type Your Name" required />
                                <input type="email" name="email" placeholder="Type Your mail" required />
                                <textarea name="Message" rows="6" placeholder='Your Message' />
                                <button className='btn btn-buttton' type="submit" onClick={handleSubmit}>Submit</button>
                            </form>
                            <span id='msg' >{msg} &nbsp; &#128513;</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


