import { useContext } from "react"
import { DataContext } from "./DataContext"

const useData = () => {
    //This is where your are passing your state to all aress of your application
 return useContext(DataContext)
}

export default useData;