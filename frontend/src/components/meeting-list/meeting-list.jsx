
import React, { useState, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import {Link} from "react-router-dom";
import axios from "axios";
import {Root} from "postcss";
import {RootAPIURL} from "../../common/Url";

const client = axios.create({
   baseURL: RootAPIURL,
});
const MeetingList = ({}) => {
    //-------------------------------------------------
    const [sr,setSR] = useState(null);
    const [meetingId] = useState(1);

    useEffect(() => {
        setSR(ScrollReveal());
    }, []);

    useEffect(() => {
        if (sr) {
            sr.reveal('.meeting-list-title', { duration: 3000 });
            sr.reveal('.meeting-list-card', { duration: 3000 });

        }
    }, [sr]);
    //-------------------------------------------------



    const [meetings, setMeetings] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        client
            .get('meetings/')
            .then((response) => {
                setMeetings(response.data);
            })
            .catch((error) => {
                console.log(error);
                setError(error);
            });
    }, []);


    return (
        <div>
            <section className="bg-gray-900">
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                    <h2 className="meeting-list-title text-center text-4xl text-white font-bold tracking-tight sm:text-5xl" id="meeting">
                        Get your tutoring appointment
                    </h2>
                    <div className="meeting-list-card mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">

                        {meetings.map((meeting) => (
                            <blockquote className="rounded-lg bg-gray-200 p-8">
                                <div className="flex items-center gap-4">
                                    <img
                                        alt="#"
                                        src={meeting.publisher.avatar_url}
                                        className="h-16 w-16 rounded-full object-cover"
                                    />
                                    <div>
                                        <p className="mt-1 text-lg font-medium text-black">Tutor: {meeting.publisher.name}</p>
                                    </div>
                                </div>
                                <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-700">
                                    {meeting.summary}
                                </p>
                                <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
                                    Meet: {meeting.way_of_meeting}
                                </p>
                                <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
                                    Date: {meeting.meeting_time}
                                </p>
                                <a className="group relative inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring mt-3" href="/#">
                                    <span className="absolute inset-x-0 bottom-0 h-[2px] bg-indigo-600 transition-all group-hover:h-full group-active:bg-indigo-500"></span>
                                    <span className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white"><Link to={`/meetings/${meetingId}`}>details</Link></span>
                                </ a>
                            </blockquote>
                        ))}

                    </div>
                </div>
            </section>
        </div>
    )
};

export default MeetingList;