import React from "react";
import "./header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = ()=> {
    return (
        <>
        <footer style={styles.footer}>
            <div style={styles.ft_cards}>
                <div className="contact">
                    <h3 style={styles.h3}>Contact Us</h3>
                    <p style={styles.p}>email: taskflow@gmail.com</p>
                    <p style={styles.p}>Phone no: +92 30740000</p>
                </div>
                <div className="follow">
                    <h3 style={styles.h3}>Follow Us</h3>
                    <div className="icons" style={styles.icons}>
                        <FontAwesomeIcon icon={faFacebookF} className="icon" />
                        <FontAwesomeIcon icon={faInstagram}  className="icon"/>
                        <FontAwesomeIcon icon={faLinkedinIn} className="icon"/>
                    </div>
                </div>
                <div></div>
            </div>
            <div className="ft-bottom" style={styles.ftBtm}>
                <p>TaskFlow App &copy; 2025 | All rights reserved.</p>
            </div>
        </footer>
        
         </>
    )
};

export default Footer

const styles={
    footer:{
        backgroundColor: '#0369A1  ',
        padding: '25px'
    },
    ft_cards:{
        padding: '0 30px',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    h3:{
        color: 'white',
        paddingBottom: '13px'
    },
    p:{
        color: 'white',
        paddingBottom: '8px'
    },
    icons:{
        display: 'flex',
        color: 'white',
        paddingTop: '13px'
    },
    ftBtm:{
        color: 'white',
        justifyItems: 'center',
        padding: '10px'
    }
}