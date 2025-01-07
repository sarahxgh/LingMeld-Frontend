import React, { useState } from "react";
import logo from "/logo.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function Register() {
    const [formData, setFormData] = useState({
        "email": "",
        "password": "",
        "username": "",
        "confirmpassword": "",
        "img": ""
    })
    const [message, setMessage] = useState('')

    const objectUrl = formData.img ? window.URL.createObjectURL(formData.img) : "/img_placeholder.svg";

    const handleChange = (event) => {
        setMessage('')
        console.log(formData)
        const { name, value, files } = event.target;
        if (name === 'img' && files && files[0]) {
            setFormData(prevData => ({
                ...prevData,
                img: event.target.files[0]
            }));
        } else {
            setFormData(prevData => ({
                ...prevData,
                [name]: value
            }));
        }
    };

    const HandleRegister = async () => {
        try {
            // sending rhe register request
            console.log(formData.password, formData.confirmpassword)
            if (formData.password == formData.confirmpassword && formData.img) {
                const response = await axios.post('http://127.0.0.1:8000/user/Register/', formData,
                {headers : {
                    'Content-Type': 'multipart/form-data',
                }})
                if (response.data.success) {
                    console.log("registered successfully")
                    navigate('/Login')
                } 
                else if (response.data.message == "This email already exists!") {
                    setMessage(response.data.message)
                    console.log("This email already exists!")
                }
                else{
                    console.log(response.data.message)
                    console.log("error happened")
                }

            }else{
                setMessage("password must much the confirm password faild or you didn't choose a photo")
            }

        } catch (e) {
            console.log(e)
        }
    }

    const closemessage = () => {
        setMessage('')
    }
    const navigate = useNavigate()
    const goToHomepage = () => {
        navigate('/')
    }

    const goToLoginpage = () => {
        navigate('/Login')
    }
    return (
        <div className="w-screen  flex flex-col items-center justify-center bg-[#FAFAFA]">
            {/* Navbar */}
            <nav className="bg-[#FAFAFA] text-black  w-full fixed top-0 left-0 z-10">
                <div className="px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <img src="/logo1.svg" alt="" />
                        </div>

                        {/* Links */}
                        <div className="hidden md:flex md:flex-row md:items-center md:justify-between md:space-x-10  md:font-roboto md:font-light">
                            <a href="#" onClick={goToHomepage} className="hover:text-[#9BFD34]">
                                Home
                            </a>
                            <a href="#" className="hover:text-[#9BFD34]">
                                About
                            </a>
                            <a href="#" className="hover:text-[#9BFD34]">
                                Services
                            </a>
                            <a href="#" className="hover:text-[#9BFD34]">
                                Contact
                            </a>
                        </div>
                        <span className="bg-gradient-to-t from-[#9BFD34] via-[#B6FA33] to-[#C3F933] p-2 rounded-lg">
                            <a href="#" onClick={goToLoginpage} className="text-white">
                                Login
                            </a>
                        </span>

                    </div>
                </div>
            </nav>

            {/* Logo */}
            <div className="mb-3">
                <img src={logo} alt="Targim Logo" className="h-16" />
            </div>

            {/* Login Box */}
            <div className="w-full max-w-sm bg-[#FAFAFA] rounded-lg shadow-md p-6">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    Sign Up
                </h1>
                {/* Image input field */}
                <div className="flex items-center justify-center">
                    <label className="relative cursor-pointer">
                        <input
                            name="img"
                            type="file"
                            accept="image/*"
                            className="absolute inset-0 opacity-0 cursor-pointer"
                            onChange={handleChange}
                        />
                        <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-[#9BFD34] bg-gray-100 flex items-center justify-center">
                            <img
                                src={objectUrl}
                                name = "img"
                                alt="Upload a user image"
                                className=" object-cover"
                            />
                        </div>
                    </label>
                </div>

                {/* User name input */}
                <div className="mb-4 relative">
                    <input
                        id="username"
                        type="text"
                        name="username"
                        placeholder="username"
                        onChange={handleChange}
                        className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#9BFD34] focus:border-[#9BFD34] pl-10"
                    />
                    <img
                        src="/email.svg"
                        alt="username Icon"
                        className="absolute left-1 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500"
                    />
                </div>

                {/* Email Input */}
                <div className="mb-4 relative">
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="email"
                        onChange={handleChange}
                        className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#9BFD34] focus:border-[#9BFD34] pl-10"
                    />
                    <img
                        src="/usr.svg"
                        alt="email Icon"
                        className="absolute left-1 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500"
                    />
                </div>

                {/* Password Input */}
                <div className="mb-4 relative">
                    <input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="password"
                        onChange={handleChange}
                        className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#9BFD34] focus:border-[#9BFD34] pl-10"
                    />
                    <img
                        src="/password.svg"
                        alt="Password Icon"
                        className="absolute left-1 top-1/2 transform -translate-y-1/2 text-gray-500"
                    />
                </div>

                {/* confirm Password Input */}
                <div className="mb-4 relative">
                    <input
                        id="confirmpassword"
                        type="password"
                        name="confirmpassword"
                        placeholder="confirm password"
                        onChange={handleChange}
                        className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#9BFD34] focus:border-[#9BFD34] pl-10"
                    />
                    <img
                        src="/password.svg"
                        alt="Password Icon"
                        className="absolute left-1 top-1/2 transform -translate-y-1/2 text-gray-500"
                    />
                </div>
                {/* message popup */}
                {message && (
                    <>
                            <div className="p-6 text-red">
                                <p><strong>{message}</strong> </p>
                            </div>
        
                    </>
                )}

                {/* Login Button */}
                <button onSubmit={HandleRegister} onClick={HandleRegister} className="w-full bg-gradient-to-t from-[#9BFD34] via-[#B6FA33] to-[#C3F933] text-white py-2 rounded-lg font-medium focus:border-none hover:border-none">
                    Sign up
                </button>

                {/* Or Social Login */}
                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-500">or</p>

                    <button className="w-full flex items-center justify-center mt-4 bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300  focus:border-none focus:outline-none">
                        <i className="fab fa-google mr-2"></i> Continue with Google
                    </button>
                </div>

                {/* Signup Link */}
                <p className="mt-6 text-sm text-center text-gray-500">
                    Already have an account?{" "}
                    <a href="#" onClick={goToLoginpage} className="text-[#9BFD34] hover:underline">
                        Login
                    </a>
                </p>
            </div>
        </div>
    );
}
