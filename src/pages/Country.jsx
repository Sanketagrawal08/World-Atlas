import React, { useEffect, useState, useTransition } from 'react';
import { getCountryData } from '../api/PostApi';
import Loaders from '../components/UI/Loaders';
import CountryCard from '../components/Layout/CountryCard';
import SearchFilter from '../components/UI/SearchFilter';

const Country = () => {
    const [isPending, startTransition] = useTransition();
    const [countries, setCountries] = useState([]);

    const [search, setsearch] = useState("")
    const [filter, setfilter] = useState('all')

    useEffect(() => {
        startTransition(async () => {
            try {
                const res = await getCountryData();
                setCountries(res.data);
            } catch (error) {
                console.error('Error fetching countries:', error);
            }
        });
    }, []);

    if (isPending) return <Loaders />;

    // search ka amin logic

   const searchCountry = (country) =>{
    return country.name.common.toLowerCase().includes(search.toLowerCase())
   } 
   const filterReasonCountry = (country) => {
    if(filter === 'all')return country;
    return country.region === filter
   }

   const filtered =  countries.filter((country) => searchCountry(country) && filterReasonCountry(country))


    return (

        <section className="p-10 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Explore Countries 🌎</h1>
            <SearchFilter search={search} setsearch={setsearch} filter={filter} setfilter={setfilter} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {filtered.map((countryData, index) => (
                    <CountryCard country={countryData} key={index} />
                ))}
            </div>
        </section>
    );
};

export default Country;
