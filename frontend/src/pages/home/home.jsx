import Navbar from '../../components/navbar/navbar';
import Footer from "../../components/footer/footer";
import Announcement from "../../components/announcement/Announcement";
import Cta from "../../components/cta/cta";
import MeetingList from "../../components/meeting-list/meeting-list";
import Team from "../../components/team/team";

const Home = {
    imageSrc: "image/tutoring.svg",
}
const HOME = () => {
    return (
        <>
            <Navbar />
            <Announcement />
            <Cta imageSrc={Home.imageSrc}/>
            <MeetingList/>
            <Team/>
            <Footer/>
        </>
    )
}

export default HOME;