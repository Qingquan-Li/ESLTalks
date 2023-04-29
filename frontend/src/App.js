import './App.css';
import {Route, Routes} from "react-router-dom";
import HOME from "./pages/home/home";
import CONTACT from "./pages/contact/contact";
import CONVERSATION from "./pages/conversation/conversation";
import RegistrationForm from "./pages/registration/RegistrationForm";
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';
import MeetingDetail from "./pages/registration";

function App() {


    return (
            <Routes>
                <Route index element={<HOME/>}/>
                <Route path="/contact" element={<CONTACT/>}/>
                <Route path="/conversation" element={<CONVERSATION/>}/>
                <Route path="/meetings/:meetingId" element={<MeetingDetail/>}/>
            </Routes>

    );
}

export default App;
