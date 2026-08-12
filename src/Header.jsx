import { useState } from "react";
import { Link } from "react-router-dom";

function Header(){
    const [open, setOpen] = useState(false);
    return(
        <>
            <div className="header">
                <nav>
                    <div className="menu" onClick={() => setOpen(true)}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                    <h1>Expense Tracker</h1>

                </nav>
            </div>

            <div className={`side-nav ${open ? "open" : ""}`}>
                <button 
                    className="close-btn"
                    onClick={() => setOpen(false)}
                >
                    ×
                </button>
                <div className="nav-links">
                    <Link to="/about">AboutMe</Link>
                    <Link to="/feedback">FeedBacks</Link>
                    <Link to="/contact">Contact</Link>
                </div>
                <div className="copyright">
                    <Link to={"/resume"}>© T.C.Yokesh</Link>
                </div>
            </div>
        </>
    );
}

export default Header;