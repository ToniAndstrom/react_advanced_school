import { createContext, useEffect, useState } from "react";
import { url } from "../../api/api";
import { getData } from "../../services/apiRequests";

export const DataContext = createContext();

export const DataProvider = ({children}) => {
    //this is where your state exists
    const [data, setData] = useState(null)


  const fetchData = async () => {
    const response = await getData(url);
    setData(response)
  };

  useEffect(() => {
    fetchData();
  }, []);
    return(
        <DataContext.Provider value={{data, setData}}>
            {children}
        </DataContext.Provider>
    );
};