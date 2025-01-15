import { FaLongArrowAltRight } from "react-icons/fa";

export const HeroSection = () => {
    return (
        <main className='hero-section pt-6 pb-8 bg-gray-100 bg-cover bg-center flex flex-col items-center justify-center text-center px-6' style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?travel')" }}>
            <div className="container max-w-4xl">
                <div className='hero-content space-y-6 bg-white bg-opacity-80 p-10 rounded-lg shadow-lg'>
                    <h1 className="text-4xl font-extrabold text-gray-900">
                        Explore the World, One Country at a Time
                    </h1>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Discover the beauty of diverse cultures and breathtaking landscapes. Join us on an unforgettable journey around the globe.
                    </p>
                    <button className="mt-4 flex items-center gap-2 bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300">
                        Start Exploring <FaLongArrowAltRight className="text-xl" />
                    </button>
                </div>
            </div>
        </main>
    );
};