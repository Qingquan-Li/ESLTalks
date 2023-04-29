const Navbar = () => {

    return (
        <div>
            <header aria-label="Site Header" className="bg-gray-900">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex-1 md:flex md:items-center md:gap-12">
                            <a className="block text-teal-300" href="/">
                                <span className="sr-only">Home</span>
                                <div>
                                    <h1 className="text-2xl text-white	">ESL Talks</h1>
                                </div>
                            </a>
                        </div>

                        <div className="md:flex md:items-center md:gap-12">
                            <nav aria-label="Site Nav" className="hidden md:block">
                                <ul className="flex items-center gap-6 text-sm">
                                    <li>
                                        <a
                                            className="text-gray-500 transition hover:text-white hover:text-base"
                                            href="/"
                                        >
                                            Home
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            className="text-gray-500 transition hover:text-white hover:text-base"
                                            href="/conversation"
                                        >
                                            Conversation
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            className="text-gray-500 transition hover:text-white hover:text-base"
                                            href="/contact"
                                        >
                                            Contact Us
                                        </a>
                                    </li>
                                </ul>
                            </nav>

                            <div className="flex items-center gap-4">
                                <div className="sm:flex sm:gap-4">
                                    <a
                                        className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow dark:hover:bg-teal-500"
                                        href="https://esltalks.pythonanywhere.com/admin/"
                                    >
                                        Tutor Login
                                    </a>
                                </div>

                                <div className="block md:hidden">
                                    <button
                                        className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            stroke-width="2"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Navbar;