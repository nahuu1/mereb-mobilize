import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

const Footer = () => {
  const { language } = useLanguage();

  return (
    <motion.footer 
      className="bg-gray-800 text-white p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
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
        <p className="mt-4 text-sm">
          {language === 'en' ? 'Website designed by Tech Space ET' : 'ድህረ ገጹ በቴክ ስፔስ ኢቲ የተዘጋጀ ነው'}
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;