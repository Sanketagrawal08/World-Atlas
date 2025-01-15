import axios from 'axios'

const api = axios.create({
    baseURL: "https://restcountries.com/v3.1",
})

//HTTP GET METHOD

export const getCountryData = () => {
    return api.get("/all?fields=name,population,region,capital,flags");
}

//httpget for partiular


export const getCountryParticularData = (idAayi) => {
    console.log("id",idAayi);
    
    return api.get(`/name/${idAayi}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`);
}
