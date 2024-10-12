import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

const Home = () => {
  const { language } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  return (
    <motion.div 
      className="container mx-auto px-4 py-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 
        className="text-4xl font-bold mb-6 text-center"
        variants={itemVariants}
      >
        {language === 'en' ? 'Welcome to the MEREB Campaign' : 'እንኳን ወደ መረብ ዘመቻ በደህና መጡ'}
      </motion.h1>
      <motion.p 
        className="text-xl mb-8 text-center"
        variants={itemVariants}
      >
        {language === 'en' 
          ? 'Join us in mobilizing resources for Don Kassa Inc. and make a lasting impact.' 
          : 'ለዶን ካሳ ኢንክ ሀብቶችን በማሰባሰብ ዘላቂ ለውጥ ለማምጣት ከእኛ ጋር ይቀላቀሉ።'}
      </motion.p>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
        variants={containerVariants}
      >
        <motion.div 
          className="bg-blue-100 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          variants={itemVariants}
        >
          <h2 className="text-2xl font-semibold mb-3">
            {language === 'en' ? 'Human Resources' : 'የሰው ሀይል'}
          </h2>
          <p>
            {language === 'en' 
              ? 'Contribute your knowledge, skills, and expertise.' 
              : 'እውቀትዎን፣ ክህሎትዎን እና ልምድዎን ያበርክቱ።'}
          </p>
        </motion.div>
        <motion.div 
          className="bg-green-100 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          variants={itemVariants}
        >
          <h2 className="text-2xl font-semibold mb-3">
            {language === 'en' ? 'Material Resources' : 'ቁሳዊ ሀብቶች'}
          </h2>
          <p>
            {language === 'en' 
              ? 'Support our mission with financial and tangible contributions.' 
              : 'ተልእኳችንን በገንዘብ እና በቁሳዊ አስተዋጽኦዎች ይደግፉ።'}
          </p>
        </motion.div>
        <motion.div 
          className="bg-yellow-100 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          variants={itemVariants}
        >
          <h2 className="text-2xl font-semibold mb-3">
            {language === 'en' ? 'Intangible Resources' : 'ውስጣዊ ሀብቶች'}
          </h2>
          <p>
            {language === 'en' 
              ? 'Help us grow through partnerships and networking opportunities.' 
              : 'በሽርክና እና በአውታረ መረብ ዕድሎች እንድናድግ ይርዱን።'}
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Home;