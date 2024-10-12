import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Resources = () => {
  const { language } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">
        {language === 'en' ? 'Resource Categories' : 'የሀብት ምድቦች'}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-3">
            {language === 'en' ? 'Human Resources' : 'የሰው ሀይል'}
          </h2>
          <ul className="list-disc list-inside">
            <li>{language === 'en' ? 'Knowledge' : 'እውቀት'}</li>
            <li>{language === 'en' ? 'Skills' : 'ክህሎቶች'}</li>
            <li>{language === 'en' ? 'Services' : 'አገልግሎቶች'}</li>
            <li>{language === 'en' ? 'Information' : 'መረጃ'}</li>
            <li>{language === 'en' ? 'Equipment' : 'መሳሪያዎች'}</li>
            <li>{language === 'en' ? 'Personnel' : 'ሰራተኞች'}</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-3">
            {language === 'en' ? 'Material/Monetary Resources' : 'ቁሳዊ/ገንዘባዊ ሀብቶች'}
          </h2>
          <ul className="list-disc list-inside">
            <li>{language === 'en' ? 'Financial contributions' : 'የፋይናንስ አስተዋጽኦዎች'}</li>
            <li>{language === 'en' ? 'Tangible assets' : 'ተጨባጭ ንብረቶች'}</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-3">
            {language === 'en' ? 'Intangible Resources' : 'ውስጣዊ ሀብቶች'}
          </h2>
          <ul className="list-disc list-inside">
            <li>{language === 'en' ? 'Brand recognition' : 'የምልክት እውቅና'}</li>
            <li>{language === 'en' ? 'Technical support' : 'ቴክኒካዊ ድጋፍ'}</li>
            <li>{language === 'en' ? 'Partnership deals' : 'የሽርክና ስምምነቶች'}</li>
            <li>{language === 'en' ? 'Talent development' : 'የችሎታ ልማት'}</li>
            <li>{language === 'en' ? 'Networking opportunities' : 'የአውታረ መረብ ዕድሎች'}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resources;