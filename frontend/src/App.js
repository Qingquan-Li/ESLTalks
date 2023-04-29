import './App.css';
import {Route, Routes} from "react-router-dom";
import HOME from "./pages/home/home";
import CONTACT from "./pages/contact/contact";
import CONVERSATION from "./pages/conversation/conversation";

function App() {


    return (
            <Routes>
                <Route index element={<HOME/>}/>
                <Route path="/contact" element={<CONTACT/>}/>
                <Route path="/conversation" element={<CONVERSATION/>}/>
            </Routes>

    );
}

export default App;
