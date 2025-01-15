import React from 'react'

const SearchFilter = ( {search,setsearch} ) => {

    const handleInputChange = (event) =>{
        event.preventDefault();
          setsearch(event.target.value)
    }


  return (

    <div className="my-6 flex w-full max-w-md items-center gap-3 px-4 py-3 rounded-full border-2 border-gray-300 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all duration-300 shadow-sm bg-white">
    <i className="ri-search-line text-gray-500 text-xl px-2"></i>
    <input 
        type="search" 
        placeholder="Search for a country..." 
        value={search} 
        onChange={handleInputChange} 
        className="w-full bg-transparent focus:outline-none text-gray-700 placeholder-gray-400"
    />
</div>


  )
}

export default SearchFilter