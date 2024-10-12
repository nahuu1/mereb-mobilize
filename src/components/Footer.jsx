import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { language } = useLanguage();

  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto text-center">
        <p>
          {language === 'en' 
            ? '© 2024 Don Kassa Inc. All rights reserved.' 
            : '© 2024 ዶን ካሳ ኢንክ። መብቱ በህግ የተጠበቀ ነው።'}
        </p>
        <p className="mt-2">
          {language === 'en' ? 'Contact: ' : 'አግኙን: '}
          +251703302703 | donkassa77@gmail.com
        </p>
        <p>{language === 'en' ? 'Location: Addis Ababa, Ethiopia' : 'አድራሻ፡ አዲስ አበባ፣ ኢትዮጵያ'}</p>
      </div>
    </footer>
  );
};

export default Footer;