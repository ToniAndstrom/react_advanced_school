import axios from "axios";
import { getCountries, isLoading } from "../store/countriesSlice";

const baseUrl = "https://restcountries.com/v3.1/all";

const getAllCountries = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const initializeCountries = () =>{
    return async (discpatch) =>{
        const countries = await getAllCountries();
        discpatch(getCountries(countries)).then(()=>{
            discpatch(isLoading(false));
 });

    }
}
export { getAllCountries, initializeCountries };
