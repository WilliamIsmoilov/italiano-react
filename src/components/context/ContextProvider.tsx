/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, type ReactNode } from "react";
import Cookies from "universal-cookie";
import type { Member } from "../../libs/types/member";
import { GlobalContext } from "../../hooks/useGlobal";


const ContextProvider: React.FC<{children: ReactNode}> = ({children}) => {
    const cookies = new Cookies();
    if(!cookies.get('accessToken')) localStorage.removeItem('memberData')

        const [authMember, setAuthMember] = useState <Member | null>(
            localStorage.getItem('memberData') ? JSON.parse(localStorage.getItem('memberData') as string): 
            null
        );

        const [orderBuilder, setOrderBuilder] = useState<Date>(new Date())
        console.log('=== verify ===');
        return ( <GlobalContext.Provider value= {{authMember, setAuthMember, orderBuilder, setOrderBuilder}}>
                 {children}
            </GlobalContext.Provider>)
}

export default ContextProvider