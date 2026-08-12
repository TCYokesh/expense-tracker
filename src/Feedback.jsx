import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Feedback() {
    const form = useRef();
    const [status,setStatus] = useState("");

    const sendFeedback = (e)=>{
        e.preventDefault();
        emailjs.sendForm(
            "Yokesh/work/feedback",
            "yokesh/weather-app",
            form.current,
            {
                publicKey: "SAyfcveuOliroab1J",
            }
        )
        .then(()=>{
            setStatus("Feedback sent successfully!");
            form.current.reset();
        },
        (error)=>{
            console.log(error);
            setStatus("Failed to send feedback");
        }    
    )
    }

    const styles = {
        container: {
        maxWidth: "500px",
        margin: "50px auto",
        padding: "30px",
        backgroundColor: "#f8f8f8",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        fontFamily: "Arial, sans-serif",
        },

        heading: {
        textAlign: "center",
        color: "#3a3939",
        fontSize: "32px",
        marginBottom: "20px",
        },

        input: {
        width: "100%",
        padding: "12px",
        marginBottom: "15px",
        border: "1px solid #ccc",
        borderRadius: "6px",
        fontSize: "16px",
        boxSizing: "border-box",
        },

        textarea: {
        width: "100%",
        height: "120px",
        padding: "12px",
        marginBottom: "15px",
        border: "1px solid #ccc",
        borderRadius: "6px",
        fontSize: "16px",
        resize: "none",
        boxSizing: "border-box",
        },

        button: {
        width: "100%",
        padding: "12px",
        backgroundColor: "#037cd2",
        color: "white",
        border: "none",
        borderRadius: "6px",
        fontSize: "18px",
        cursor: "pointer",
        }
    };

    return (
        <div style={styles.container}>
        <h1 style={styles.heading}>Feedback</h1>

        <form ref={form} onSubmit={sendFeedback}>
            <input
            style={styles.input}
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
            />

            <input
            style={styles.input}
            type="email"
            name="email"
            placeholder="Enter Your Email"
            required
            />

            <textarea
            style={styles.textarea}
            name="message"
            placeholder="Enter Your Feedback"
            required
            />

            <button style={styles.button} type="submit">
            Submit
            </button>
        </form>
        {status && <p style={styles.message}>{status}</p>}
        </div>
    );
}

export default Feedback;