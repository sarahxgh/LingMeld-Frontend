import React from 'react';
import { useNavigate } from 'react-router-dom';
function HomePage() {
    const navigate = useNavigate()

    const goToLogin = () => {

        navigate('/Login')
    }

    const goToRegister = () => {

        navigate('/Register')
    }

    return (
        <div className="bg-gray-50 text-gray-800 w-screen h-screen">
            {/* Header */}
            <header className="bg-white shadow-md">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <img src="/logo1.svg" alt="targim logo" />
                    <nav className="flex gap-6">
                        <a href="#" className="text-gray-600 hover:text-[#9BFD34] ">Solutions</a>
                        <a href="#" className="text-gray-600 hover:text-[#9BFD34] ">Services</a>
                        <a href="#" className="text-gray-600 hover:text-[#9BFD34] ">Help Center</a>
                        <a href="#" className="text-gray-600 hover:text-[#9BFD34] ">Pricing</a>
                    </nav>
                    <div className="flex gap-4">
                        <button className="px-4 py-2 border border-[#9BFD34] text-[#9BFD34] rounded hover:bg-green-100" onClick={goToLogin}>Log In</button>
                        <button className="px-4 py-2 bg-gradient-to-t from-[#9BFD34] via-[#B6FA33] to-[#C3F933] text-white rounded hover:bg-green-700" onClick={goToRegister}>Sign Up Free</button>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="bg-white border-gray-700 rounded-lg py-12 flex flex-row items-center">
                <div className="container mx-auto flex flex-row items-center justify-between px-8">
                    {/* Text Content */}
                    <div className="text-left">
                        <h2 className="text-3xl font-bold text-gray-800">
                            Welcome to <span className="text-[#9BFD34]">Targim</span>
                        </h2>
                        <p className="text-gray-600 mt-4">Unlock the Power of Language</p>
                        <p className="text-gray-600 mt-2">
                            Experience tailored tools for translation, quizzes, and vocabulary assistance.
                        </p>
                        <div className="mt-8 flex gap-4">
                            <button className="px-6 py-3 bg-gradient-to-t from-[#9BFD34] via-[#B6FA33] to-[#C3F933] text-white rounded hover:bg-green-700">
                                Sign Up
                            </button>
                            <button className="px-6 py-3 border border-[#9BFD34] text-[#9BFD34] rounded hover:bg-green-100">
                                Log In
                            </button>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="w-1/2">
                        <img src="/public/Left.svg" alt="Illustration" className="w-full h-auto object-cover" />
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {/* Chatbot Card */}
                    <div className="p-6 bg-white rounded shadow-md">
                        <div className="flex justify-center">
                            <img src="/public/Icon_chatbot.svg" alt="Chatbot Icon" className="w-16 h-16 mx-auto" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mt-4">Chatbot</h3>
                        <p className="text-gray-600 mt-2">Get instant solutions and answers to your questions with our advanced chatbot support.</p>
                    </div>

                    {/* Quizzes and Exercises Card */}
                    <div className="p-6 bg-white rounded shadow-md">
                        <div className="flex justify-center">
                            <img src="/public/Icon_quiz.svg" alt="Quiz Icon" className="w-16 h-16 mx-auto" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mt-4">Quizzes and Exercises</h3>
                        <p className="text-gray-600 mt-2">Reinforce your skills with interactive exercises and quizzes.</p>
                    </div>

                    {/* Vocabulary Assistance Card */}
                    <div className="p-6 bg-white rounded shadow-md">
                        <div className="flex justify-center">
                            <img src="/public/Icon_vocab.svg" alt="Vocabulary Icon" className="w-16 h-16 mx-auto" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mt-4">Vocabulary Assistance</h3>
                        <p className="text-gray-600 mt-2">Enhance your vocabulary with tailored support and practice.</p>
                    </div>
                </div>
            </section>


            {/* Why Choose Targim Section */}
            <section className="bg-gray-100 py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        {/* Image Section */}
                        <div className="flex space-x-4">
                            {/* Image 1 */}
                            <div className="flex-1 rounded-lg overflow-hidden shadow-lg relative" style={{ top: '40px' }}>
                                <img
                                    src="/public/Picture.svg"
                                    alt="Person smiling"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Image 2 */}
                            <div className="flex-1 rounded-lg overflow-hidden shadow-lg relative" style={{ top: '0' }}>
                                <img
                                    src="/public/Picture (1).svg"
                                    alt="Group discussion"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Image 3 */}
                            <div className="flex-1 rounded-lg overflow-hidden shadow-lg relative" style={{ top: '20px' }}>
                                <img
                                    src="/public/Picture (2).svg"
                                    alt="Student learning"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Text Section */}
                        <div>
                            <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
                                Why Choose <span className="text-[#9BFD34]">Targim</span>?
                            </h2>
                            <p className="text-gray-600 mt-4">
                                Targim combines technology and personalized learning to enhance your language skills.
                                Our intelligent platform provides translation assistance, interactive exercises, and
                                vocabulary support for an enriching experience.
                            </p>
                            <p className="text-gray-600 mt-2">
                                Engage with fun quizzes, exercises, and tailored lessons to build a strong vocabulary foundation
                                in Arabic and beyond.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/*The only platform you need */}
            <section className=" py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                        {/* Text Section */}
                        <div>
                            <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
                                The only platform you'll need !
                            </h2>
                            <p className="text-gray-600 mt-4">
                                Targim gathers all the essential tools for language learning in one convenient platform.
                                From instant translations and a chatbot for questions to engaging quizzes and personalized lessons, everything is
                                designed to enhance your learning experience. With Targim, you have everything you need
                                to succeed in mastering English and Arabic in one place!
                            </p>
                        </div>

                        {/* Image Section */}
                        <div className="flex-1 rounded-lg overflow-hidden">
                            <img
                                src="/public/Right.svg"
                                alt="Targim is all you need"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>




            {/* Call to Action Section */}
            <section className="relative py-12 text-white text-center mx-auto w-4/5 max-w-screen-lg bg-cover bg-center rounded-lg mb-20" style={{ backgroundImage: 'url(/join.svg)' }}>
                <div className="relative z-10">
                    <h2 className="text-3xl font-bold">Join the community today</h2>
                    <p className="mt-4">Become a part of Targim and connect with other learners on your journey to fluency. Together, we’re building a supportive community that helps you grow every step of the way!</p>
                    <button className="mt-6 px-6 py-3 bg-gradient-to-t from-[#9BFD34] via-[#B6FA33] to-[#C3F933] focus:outline-none focus:border-none hover:border-none text-white rounded hover:bg-gray-100" onClick={goToRegister}>Sign Up Free</button>
                </div>
            </section>



            {/* Footer */}
            <footer className=" text-gray-400 py-8">
                <div className="container mx-auto px-4 text-center">
                    <p>&copy; 2024 Targim. All rights reserved.</p>
                    <div className="mt-4 flex justify-center gap-6">
                        <a href="#" className="hover:text-[#9BFD34] ">Terms</a>
                        <a href="#" className="hover:text-[#9BFD34] ">Privacy</a>
                        <a href="#" className="hover:text-[#9BFD34] ">About</a>
                        <a href="#" className="hover:text-[#9BFD34] ">Contact</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;
