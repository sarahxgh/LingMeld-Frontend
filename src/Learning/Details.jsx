import React from "react";
import { useLocation } from "react-router-dom";
import { exerciseTypes } from "../Utils/EnglishPrompts";
import { useNavigate } from "react-router-dom";

function Details () {
    const navigate = useNavigate();
    const location = useLocation();
    const data = location.state;
    console.log(data)
    return (
        <div className="bg-gray-100 py-2 rounded-lg flex flex-col bg-white justify-center" style={{ width: 'calc(100vw - 260px)' }}>
            {/* <div className="max-w-full mx-auto bg-white rounded-lg shadow-lg mt-12 py-8 px-6 flex flex-col justify-center "> */}
                {/* <section className=" bg-gradient-to-t from-[#9BFD34] via-[#B6FA33] to-[#C3F933] text-white text-center py-8 rounded-t-lg">
                    <h2 className="text-3xl font-bold">Choose an Exercise Type : Arabic Enforcement</h2>
                </section> */}

                <div className="mt-6 grid grid-cols-2 bg-white p-10 sm:grid-cols-2 md:grid-cols-2 gap-6">
                    {exerciseTypes[data['category']].map((type, index) => (
                        <button
                            key={index}
                            className="px-6 py-4 bg-[#9BFD34]  text-black rounded-lg shadow-md hover:bg-gray-200 hover:border-none border-none  focus:outline-[#9BFD34] transition ease-in-out duration-300"
                            onClick={() => {navigate("/QuizzingPage",{state:{"category": data['category'], 'type':type}})
                            // console.log({"category": data['category'],'type':type})
                        }
                        }  // Replace with your desired action
                        >
                            {type}
                        </button>
                    ))}
                </div>
            </div>
        // </div>
    );

}

export default Details;