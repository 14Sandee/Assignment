import React, { useState } from 'react';
import "./Contact.css";
import { Link } from 'react-router-dom';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import DatePicker from 'react-date-picker';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

function Contact() {


    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [date, setDate] = useState();
    const [city, setCity] = useState();
    const [gender, setGender] = useState();


    const genderOpt = [
        "Male", "Female"
      ];
    const options = [
        "Mumbai", "Pune"
      ];

    const handleClick = () => {
        console.log(name);
        console.log(email);
        console.log(phone);
        console.log(date);
        console.log(gender);
        console.log(city);
    };

    return (
        <div className="contact">
            <div className="contact__left">
                <div className="overlay"></div>
                <div className="contact__left__top">
                    <h1>Get in Touch</h1>
                    <p>Reach out to us. We can make something awesome together</p>
                </div>
                <div className="contact__left__bottom">
                    <div className="contact__address">
                        <h6>Address</h6>
                        <h5>India</h5>
                    </div>
                    <div className="contact__address">
                        <h6>Email</h6>
                        <h5>someone@example.com</h5>
                    </div>
                    <div className="contact__address">
                        <h6>Phone</h6>
                        <h5>+91-1234567890</h5>
                    </div>
                </div>
            </div>
            <div className="contact__right">
                <div className="contact__right__top">
                    <h1>Contact Us</h1>
                </div>
                <div className="contact__right__botton">
                    <form action="">
                        <div className="Contact__input">
                            <label htmlFor="Name">Name</label>
                            <input className="forminput" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your Full Name" />
                        </div>
                        <div className="Contact__input">
                            <label htmlFor="Email">Email</label>
                            <input className="forminput" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your Email" />
                        </div>
                        <div className="Contact__input">
                            <label htmlFor="Phone">Phone</label>
                            <PhoneInput
                               className="forminput"  
                               defaultCountry="IN"
                                placeholder="Enter phone number"
                                value={phone}
                                onChange={setPhone}
                            />
                        </div>
                        <div className="Contact__input">
                            <label htmlFor="date">Date of birth</label>
                            <DatePicker
                                className="forminput" onChange={setDate}
                                value={date}
                            />
                        </div>
                        <div className="Contact__input">
                            <label htmlFor="Gender">Gender</label>
                            <Dropdown className="forminput" options={genderOpt}  onChange={(option) => setGender(option.value)}  placeholder="Select your gender" />
                        </div>
                        <div className="Contact__input">
                            <label htmlFor="City">City</label>
                            <Dropdown style={{backgroundColor: "transparent"}} className="forminput" options={options}  onChange={(option) => setCity(option.value)}  placeholder="Select an option" />
                        </div>
                        <Link to="/second">
                        <button onClick={handleClick}>Submit</button>
                        </Link>  
                    </form>
                </div>
            </div>
        </div>
        
    )
}

export default Contact
