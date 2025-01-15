import React from 'react'

const SearchFilter = ({ search, setsearch, filter, setfilter }) => {

    const handleInputChange = (event) => {
        setsearch(event.target.value);
    }

    const handleSelectChange = (event) => {
        setfilter(event.target.value);
    }

    return (
        <div className="flex my-6 w-full max-w-md justify-between items-center gap-3 px-6 py-4 rounded-full border-2 border-gray-300 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all duration-300 shadow-sm bg-white">
            {/* Search Input */}
            <div className="flex items-center w-full">
                <i className="ri-search-line text-gray-500 text-xl px-2"></i>
                <input
                    type="search"
                    placeholder="Search any country..."
                    value={search}
                    onChange={handleInputChange}
                    className="w-full bg-transparent focus:outline-none text-gray-700 placeholder-gray-400"
                />
            </div>

            {/* Filter Select */}
            <div>
                <select
                    value={filter}
                    onChange={handleSelectChange}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                    <option value="all">All</option>
                    <option value="Europe">Europe</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
        </div>
    )
}

export default SearchFilter;