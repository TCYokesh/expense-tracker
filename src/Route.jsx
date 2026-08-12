import { BrowserRouter,Routes, Route } from "react-router-dom";
import App from "./App";
import AboutMe from "./AboutMe";
import Feedback from "./Feedback";
import Contact from "./Contacts";
import Resume from "./Resume";

function Generate(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/about" element={<AboutMe />} />
                <Route path="/feedback" element={<Feedback />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/resume" element={<Resume />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Generate;