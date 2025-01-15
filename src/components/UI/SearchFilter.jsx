import React from 'react';

const SearchFilter = ({ search, setsearch, filter, setfilter, countries, setCountries }) => {

    const handleInputChange = (event) => {
        setsearch(event.target.value);
    }

    const handleSelectChange = (event) => {
        setfilter(event.target.value);
    }

    const sortHandler = (value) => {
        const sortedCountries = [...countries].sort((a, b) => {
            return value === "asc"
                ? a.name.common.localeCompare(b.name.common)
                : value === "desc"
                    ? b.name.common.localeCompare(a.name.common)
                    : 0;
        });
        setCountries(sortedCountries);
    }

    return (
        <div className="flex flex-col sm:flex-row justify-between mb-12 items-center gap-4 w-full max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-xl border border-gray-200">

            {/* Search Bar */}
            <div className="flex items-center w-full sm:w-auto border border-gray-300 rounded-lg px-4 py-2 bg-gray-50">
                <i className="ri-search-line text-gray-500 text-xl"></i>
                <input
                    type="search"
                    placeholder="Search any country..."
                    value={search}
                    onChange={handleInputChange}
                    className="w-full bg-transparent ml-2 focus:outline-none text-gray-700 placeholder-gray-400"
                />
            </div>

            {/* Filter by Region */}
            <select
                value={filter}
                onChange={handleSelectChange}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
                <option value="all">All Regions</option>
                <option value="Asia">Asia</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>

            <select
                onChange={(e) => sortHandler(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
                <option value="none">Default</option>
                <option value="asc">A-Z</option>
                <option value="desc">Z-A</option>
            </select>
        </div>
    );
}

export default SearchFilter;
