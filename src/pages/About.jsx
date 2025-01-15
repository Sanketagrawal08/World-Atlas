import React from 'react';
import countryFacts from '../api/CountryData.json';

console.log(countryFacts);

const About = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br bg-gray-100 p-8'>
        <h1 className='text-center pt-12 text-4xl font-bold text-blue-800'>Interesting Facts About Countries</h1>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12'>
            {countryFacts.map((country, index) => (
                <div key={index} className='bg-white shadow-lg rounded-lg p-6 border border-blue-300 hover:shadow-2xl transition-transform transform hover:scale-105'>
                    <h2 className='text-2xl font-semibold text-blue-700'>{country.countryName}</h2>
                    <p className='text-lg mt-2'><strong>Capital:</strong> {country.capital}</p>
                    <p className='text-lg'><strong>Population:</strong> {country.population}</p>
                    <p className='text-lg italic text-gray-600 mt-2'>"{country.interestingFact}"</p>
                </div>
            ))}
        </div>
    </div>
  );
}

export default About;