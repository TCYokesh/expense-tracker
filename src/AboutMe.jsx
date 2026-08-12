import React from "react";

function AboutMe() {
  const styles = {
    container: {
      maxWidth: "800px",
      margin: "50px auto",
      padding: "30px",
      backgroundColor: "#f8f8f8",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(3,3,3,0.1)",
      fontFamily: "Arial, sans-serif",
      lineHeight: "1.6",
    },

    heading: {
      fontSize: "34px",
      marginBottom: "20px",
      color: "#3a3939",
      textAlign: "center",
    },

    paragraph: {
      fontSize: "18px",
      marginBottom: "15px",
      color: "#555",
    },

    link: {
      color: "#037cd2",
      textDecoration: "none",
      fontWeight: "bold",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>About Me</h2>

      <p style={styles.paragraph}>
        Hi! I'm Yokesh, a Frontend developer based in Walajapet. I
        specialize in building responsive and interactive web apps using HTML,
        CSS, Bootstrap, JavaScript, and React.
      </p>

      <p style={styles.paragraph}>
        When I'm not coding, I enjoy playing cricket, solo drives, and
        exploring new coffee shops around the city.
      </p>

      <p style={styles.paragraph}>
        Check out my projects below or{" "}
        <a
          href="https://www.linkedin.com/in/yokesh04/"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          connect with me on LinkedIn
        </a>
        !
      </p>
    </div>
  );
}

export default AboutMe;