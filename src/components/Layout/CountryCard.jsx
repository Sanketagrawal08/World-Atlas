import { NavLink } from "react-router-dom";

const CountryCard = ({ country }) => {
    const { flags, name, population, region } = country;
  
    return (
      <div className="flex flex-col items-center bg-white p-5 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-300 transform duration-300">
        <img 
          src={flags.png} 
          className="w-32 h-24 object-cover rounded-lg border border-gray-300 mb-4"
          alt={`Flag of ${name.common}`} 
        />
        
      
        <h1 className="text-lg font-bold text-center mb-2 text-gray-800">
          {name.common}
        </h1>

        <p className="text-gray-700 text-sm">Population: <span className="font-medium">{population.toLocaleString()}</span></p>
        <p className="text-gray-500 text-sm">Region: <span className="font-medium">{region}</span></p>
        <p className="text-sm mb-4">Capital: <span className="font-medium">{country.capital ? country.capital[0] : "N/A"}</span></p>

        
        <NavLink to={`/country/${name.common}`}>
          <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium">
            Know More
          </button>
        </NavLink>
      </div>
    );
};

export default CountryCard;
