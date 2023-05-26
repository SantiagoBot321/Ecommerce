import { useEffect, useState } from "react";
import PageContext from "../context/PageContext";

const PageProvider = ({children}) => {
    const [page, change] = useState(null);
    return <PageContext.Provider value={{page, change}}>
        {children}</PageContext.Provider>;
};
export default PageProvider;