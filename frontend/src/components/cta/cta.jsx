import React, { useState, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Cta = ({imageSrc}) =>{

    const [sr,setSR] = useState(null);

    useEffect(() => {
        setSR(ScrollReveal());
    }, []);

    useEffect(() => {
        if (sr) {
            sr.reveal('.left-cta', { duration: 2000 });
            sr.reveal('.right-cta', { duration: 2000 });
        }
    }, [sr]);

    useEffect(() => {
        AOS.init({
            duration: 1400,
            easing: 'ease-in-out',
            mirror: true
        });
    }, []);

    return (
        <div>
            <section
                className="overflow-hidden bg-gray-900 sm:grid sm:grid-cols-2"
            >
                <div className="left-cta p-8 md:p-12 lg:px-16 lg:py-24">
                    <div
                        className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right"
                    >
                        <h2 className="text-6xl font-bold text-white md:text-4xl" data-aos="fade-down">
                            Welcome to ESL Talks !
                        </h2>

                        <p className="hidden text-white text-4xl dark:text-gray-300 md:mt-4 md:block">
                            <div data-aos="fade-right"
                                 data-aos-anchor="#example-anchor"
                                 data-aos-offset="800"
                                 data-aos-duration="400">                            <text>English is </text>
                                not hard.</div>
                            <br/>
                            <div data-aos="fade-left"
                                 data-aos-anchor="#example-anchor"
                                 data-aos-offset="800"
                                 data-aos-duration="400">
                            <text className="">You just missing a partner</text>
                                </div>
                            <br/>
                            <text data-aos="fade-left"
                                  data-aos-anchor="#example-anchor"
                                  data-aos-offset="800"
                                  data-aos-duration="400">Just follow us</text>

                        </p>

                        <div className="mt-4 md:mt-8">
                            <a
                                href="#meeting"
                                className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
                            >
                                Get Meeting!
                            </a>
                        </div>
                    </div>
                </div>

                <img
                    alt="Student"
                    src={imageSrc}
                    className="right-cta h-56 w-full object-cover sm:h-full"
                />
            </section>
        </div>
    )
}

export default Cta;