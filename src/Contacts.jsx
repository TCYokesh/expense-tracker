import React from "react";

function Contact() {
  const styles = {
    container: {
      maxWidth: "600px",
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
      fontSize: "34px",
      marginBottom: "20px",
    },

    text: {
      fontSize: "18px",
      color: "#555",
      marginBottom: "15px",
    },

    link: {
      color: "#037cd2",
      textDecoration: "none",
      fontWeight: "bold",
    },

    button: {
      display: "inline-block",
      padding: "10px 20px",
      backgroundColor: "#037cd2",
      color: "white",
      borderRadius: "6px",
      textDecoration: "none",
      marginTop: "10px",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Contact Me</h1>

      <p style={styles.text}>
        Feel free to reach out to me for web development projects,
        collaborations, or any queries.
      </p>

      <p style={styles.text}>
        📧 Email: yokesh4224@gmail.com
      </p>

      <p style={styles.text}>
        📱 Phone: +91 8925350525
      </p>

      <p style={styles.text}>
        📍 Location: Walajapet, Tamil Nadu
      </p>

      <a
        style={styles.button}
        href="https://www.linkedin.com/in/yokesh04/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn Profile
      </a>
    </div>
  );
}

export default Contact;