import React from 'react';

const Header = () => {
    return (
        <header className="w-screen min-h-10 p-20">
            {/* Wrapper to centralize and set max width */}
            <div className="max-w-lg mx-auto">
                {/* Intro Message */}
                <div className="bg-gray-800 py-5 px-10 rounded-md mb-4">
                    <p className="text-white font-medium text-center">
                        Hello, I'm a developer based in New Zealand!
                    </p>
                </div>

                {/* Name, Title, and Image Section */}
                <div className="flex flex-col md:flex-row items-center text-center justify-center sm:text-start sm:items-start">
                    {/* Profile Image */}
                    <div className="md:ml-auto mt-[10px]">
                        <img
                            src="https://static.wikia.nocookie.net/aooni/images/7/77/Ao_ONI_.jpg/revision/latest/smart/width/250/height/250?cb=20230731235848" // Replace with your image URL
                            alt="Vitor Ames"
                            className="rounded-full border-4 border-white w-24 h-24 object-cover"
                        />
                    </div>
                    {/* Name and Title Section */}
                    <div className="flex flex-col ml-5 mt-[10px]">
                        <p className=" text-white text-4xl p-1 font-bold rounded-md">
                            Vitor Ames
                        </p>
                        <p className="text-white text-lg">
                            Pixel Physicist (Developer / Artist / Technologist)
                        </p>
                    </div>
                </div>
            </div>
        </header >
    );
};

export default Header;
