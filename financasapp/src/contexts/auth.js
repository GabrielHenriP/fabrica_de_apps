import React, { createContext, useState } from 'react';

export const AuthContext = createContext({});

export default AuthProvider = ({ children }) => {

    const [user, setUser] = useState({
        nome:'gabriel',
        uid: 'abdbfjfn'
    })

    return(
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    );
};