import React, {useState} from "react";
import "./header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListCheck, faBullseye, faChartLine, faBars } from '@fortawesome/free-solid-svg-icons';

const reviews =[
    {
        name: "Muhammad Ali",
        text: "TaskFlow helped me finally stay consistent with my goals!"
    },
    {
        name: "Muhammad Maaz Satti",
        text: "The design is clean and I love how easy it is to use."
    },
    {
        name: "Saif Ullah Saifi",
        text: "I use it daily to manage my uni projects. Super helpful!"
    },
];


const Plans =[
    {
        heading: "Free",
        price: "0 PKR/Month",
        limit: "5 Tasks",
        sharing: "No Team Sharing",
        btn: "Start Free Trial"
    },
    {
        heading: "Pro",
        price: "1500 PKR/Month",
        limit: "10 Tasks",
        sharing: "Limited Team Sharing",
        btn: "Upgrade Now"
    },
     {
        heading: "Team",
        price: "2500 PKR/Month",
        limit: "Unlimited Tasks",
        sharing: "Unlimited Team Sharing",
        btn: "Choose Plan"
    },
];


const MainSection = () => {

    const [menuOpen, setMenuOpen]=useState(false);
    const toggleMenu=()=>{
        console.log("Toggle MEnu", !menuOpen);
        setMenuOpen(!menuOpen);
    };

  return (
    <>
      <header>
        <h2>Task Flow</h2>
        <div className={`nav-links ${menuOpen ? 'active':''}`}>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#reviews">Reviews</a>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
        </div>
      </header>

      <div style={styles.section}>
        <h1 style={styles.h1}>TaskFlow App</h1>
        <p style={styles.p}>
          TaskFlow helps you structure your day and focus on what truly
          matters.From to-dos to deadlines, everything stays right where you
          need it.
        </p>
        <p style={styles.p}>Plan smarter. Live better.</p>
        <button style={styles.btn}>Get Started</button>
      </div>

        <div style={styles.section} id="features" data-aos="fade-up">
            <h2 style={styles.h2}>Features</h2>
            <div className="features-cards" style={styles.cards}>
                <div className="card" style={styles.card}>
                    <h3 style={styles.h3}> <FontAwesomeIcon icon={faListCheck} /> Smart Task Management</h3>
                    <p style={styles.p}>Create, organize, and prioritize your tasks effortlessly.</p>
                    <p style={styles.p}>Stay on top of your schedule with intuitive to-do lists and reminders.</p>
                </div>
                <div className="card" style={styles.card}>
                    <h3 style={styles.h3}> <FontAwesomeIcon icon={faBullseye} /> Clean & Focused Interface</h3>
                    <p style={styles.p}>Minimal design that keeps distractions away.</p>
                    <p style={styles.p}>Everything you need, nothing you don’t — for maximum productivity.</p>
                </div>
                <div className="card" style={styles.card}>
                    <h3 style={styles.h3}> <FontAwesomeIcon icon={faChartLine} /> Seamless Progress Tracking</h3>
                    <p style={styles.p}>Visual progress indicators and status updates.</p>
                    <p style={styles.p}>Know exactly what’s done, what’s next, and what’s overdue — at a glance.</p>
                </div>
            </div>
        </div>

        <section style={styles.section} id="reviews" data-aos="fade-up">
            <h2 style={styles.h2}> What Our Users Say</h2>
            <div style={styles.cards}>
               { reviews.map((review, index) => (
                <div key={index} style={styles.card}>
                    <p>{review.text}</p>
                    <h4 style={styles.h4}>{review.name}</h4>
                </div>
                ))}
            </div>
        </section>

        <section style={styles.section} id="pricing" data-aos="fade-up">
            <h2 style={styles.h2}>Pricing Plans</h2>
            <div style={styles.cards}>
                {Plans.map((plan, index)=>(
                    <div style={styles.p_card}>
                        <h3 style={styles.p_h3}>{plan.heading}</h3>
                        <h4>Price: {plan.price}</h4>
                        <p style={styles.p}>Task Limit: {plan.limit}</p>
                        <p style={styles.p}>Task Sharing: {plan.sharing}</p>
                        <button style={styles.btn} className="btn-price">{plan.btn}</button>
                    </div>
                ))}
            </div>
        </section>
    </>
  );
};

export default MainSection;

const styles = {
  section: {
    padding: "20px",
    backgroundColor: "#F0F4F8",
  },
  h1: {
    color: "#0369A1  ",
    textAlign: "center",
    paddingBottom: "20px",
  },
  p: {
    fontSize: "18px",
    color: "#64748B ",
    paddingBottom: "10px",
  },
  btn: {
    backgroundColor: "#0EA5E9",
    padding: "13px 18px",
    border: "none",
    color: "White",
    fontWeight: "bold",
    textTransform: "uppercase",
    borderRadius: "12px",
  },
    h2:{
        textAlign: 'center',
        color: '#0369A1',
        paddingBottom: '10px',
        fontSize: '35px'
    },
    cards:{
        display: 'flex',
        flexWrap:'wrap',
        gap:'20px',
        marginTop: '15px',
        justifyContent: 'center'
    },
    card:{
        maxWidth: '350px',
        backgroundColor: '#E0F2FE ',
        padding: '20px',
        borderRadius: '12px'
    },
    h3:{
        color: '#0369A1  ',
        paddingBottom: '10px'
    },
    p:{
        color: '#1E293B '
    },
    h2:{
        color: '#0369A1',
        paddingBottom: '10px',
        textAlign: 'center',
        fontSize: '35px'
    },
    cards:{
        margin: '15px 0',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent:'center'
    },
    card:{
        maxWidth: '380px',
        padding:'15px',
        backgroundColor: '#E0F2FE',
        margin: '5px 5px',
        borderRadius: '12px'
    },
    h4:{
        color: '#36393eff '
    },
    p_card:{
        padding:'25px',
        backgroundColor: '#E0F2FE',
        margin: '5px 5px',
        borderRadius: '12px'
    },
   p_h3:{
        textAlign: 'center',
        fontSize: '25px',
        color: '#0369A1 ',
        paddingBottom: '10px'
    },
     p:{
        paddingTop: '5px'
    },
    btn:{
        marginTop: '10px',
        color: 'white',
        border: 'none',
        backgroundColor: '#0EA5E9',
        padding: '10px 15px',
        borderRadius: '8px',
        fontWeight: 'bold',
        cursor: 'pointer'
    }
};
