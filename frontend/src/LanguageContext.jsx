import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext('中文');

function LanguageProvider({ children }) {
    const [language, setLanguage] = useState('中文');

    const toggleLanguage = () => {
        setLanguage(prevLanguage => prevLanguage === '中文' ? 'English' : '中文');
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}