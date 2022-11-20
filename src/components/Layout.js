import React, { useEffect , useState} from 'react'

import Preloader from './Preloader'
import WhatsAppBtn from './WhatsAppBtn';

const Layout = ({ children }) => {
    Preloader;
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoader(false), 1500);
    }, []);

    return (
        <>
            {children}

            {loader ? <Preloader /> : null}
            <WhatsAppBtn />
        </>
    );
};

export default Layout;
