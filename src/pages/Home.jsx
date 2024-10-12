import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Home = () => {
  const { language } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">
        {language === 'en' ? 'Welcome to the MEREB Campaign' : 'እንኳን ወደ መረብ ዘመቻ በደህና መጡ'}
      </h1>
      <p className="text-xl mb-4">
        {language === 'en' 
          ? 'Join us in mobilizing resources for Don Kassa Inc. and make a lasting impact.' 
          : 'ለዶን ካሳ ኢንክ ሀብቶችን በማሰባሰብ ዘላቂ ለውጥ ለማምጣት ከእኛ ጋር ይቀላቀሉ።'}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-blue-100 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-3">
            {language === 'en' ? 'Human Resources' : 'የሰው ሀይል'}
          </h2>
          <p>
            {language === 'en' 
              ? 'Contribute your knowledge, skills, and expertise.' 
              : 'እውቀትዎን፣ ክህሎትዎን እና ልምድዎን ያበርክቱ።'}
          </p>
        </div>
        <div className="bg-green-100 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-3">
            {language === 'en' ? 'Material Resources' : 'ቁሳዊ ሀብቶች'}
          </h2>
          <p>
            {language === 'en' 
              ? 'Support our mission with financial and tangible contributions.' 
              : 'ተልእኳችንን በገንዘብ እና በቁሳዊ አስተዋጽኦዎች ይደግፉ።'}
          </p>
        </div>
        <div className="bg-yellow-100 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-3">
            {language === 'en' ? 'Intangible Resources' : 'ውስጣዊ ሀብቶች'}
          </h2>
          <p>
            {language === 'en' 
              ? 'Help us grow through partnerships and networking opportunities.' 
              : 'በሽርክና እና በአውታረ መረብ ዕድሎች እንድናድግ ይርዱን።'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;