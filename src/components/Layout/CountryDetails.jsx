import React, { useTransition, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loaders from "../UI/Loaders";
import { getCountryParticularData } from "../../api/PostApi";
import { NavLink } from "react-router-dom";

const CountryDetails = () => {
  const params = useParams();
  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryParticularData(params.id);
      setCountry(res.data[0]);
      console.log(res.data);
    });
  }, [params.id]);

  if (isPending) return <Loaders />

  if (!country) return <div>Country not found.</div>;

  const nativeNames = country.name?.nativeName
    ? Object.keys(country.name.nativeName)
        .map((key) => country.name.nativeName[key]?.common)
        .join(", ")
    : "No native names available";

  const languageList = Object.values(country.languages).join(", ");

  const currencyList = country.currencies
    ? Object.values(country.currencies)
        .map((currency) => currency.name)
        .join(", ")
    : "No Currency Available";

  const border = country.borders
    ? Object.values(country.borders)
        .map((border) => border)
        .join(", ")
    : "N/A";

  return (
    <div className="container mx-auto p-8 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-xl rounded-lg p-8 flex flex-col lg:flex-row items-center lg:items-start">
        <div className="flex-1 lg:mr-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{country.name?.common}</h1>
          <h3 className="text-lg text-gray-600 mb-2"> Capital:   {country.capital ? country.capital[0] : "N/A"}</h3>
          <h4 className="text-lg text-gray-600 mb-2"> Region:  {country.region}</h4>
          <h4 className="text-lg text-gray-600 mb-2"> Subregion: {country.subregion}</h4>
          <h4 className="text-lg text-gray-600 mb-2"> Population: {country.population?.toLocaleString() || "N/A"}</h4>
          <h4 className="text-lg text-gray-600 mb-2"> Native Names: {nativeNames}</h4>
          <h5 className="text-lg text-gray-600 mb-2"> Languages: {languageList}</h5>
          <h3 className="text-lg text-gray-600 mb-2"> Currency: {currencyList}</h3>
          <h6 className="text-lg text-gray-600 mb-2"> Border: {border}</h6>
        </div>

        <div className="divkuchtoh mt-6 lg:mt-0 flex justify-center items-center flex-col border-2 border-neutral-200">
          <img
            src={country.flags?.svg}
            alt="Flag"
            className="w-[25vw] h-[45vh] p-4 object-contain rounded-lg shadow-lg hover:scale:[2vw] kuchtoh"
          />
        </div>
      </div>
         <NavLink to="/country">
         <button className="mt-12 ml-4 px-6 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-all ease-in">Go Back</button>
         </NavLink>
    </div>
  );
};

export default CountryDetails;
