import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { language } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">
        {language === 'en' ? 'About MEREB Campaign' : 'ስለ መረብ ዘመቻ'}
      </h1>
      <p className="text-xl mb-4">
        {language === 'en' 
          ? 'The MEREB Campaign is a resource mobilization initiative by Don Kassa Inc., aimed at securing new and additional financial, human, and material resources to advance our mission.' 
          : 'መረብ ዘመቻ በዶን ካሳ ኢንክ የተጀመረ የሀብት ማሰባሰቢያ ተነሳሽነት ሲሆን፣ ተልእኳችንን ለማስፋፋት አዳዲስ እና ተጨማሪ የፋይናንስ፣ የሰው ሀይል እና ቁሳዊ ሀብቶችን ለማረጋገጥ ያለመ ነው።'}
      </p>
      <p className="text-xl mb-4">
        {language === 'en'
          ? '"Mereb" symbolizes a net used for large-scale fishing, representing our campaign\'s objective to gather a vast pool of resources.'
          : '"መረብ" ለትልቅ ዓሳ ማጥመጃ የሚያገለግል መረብን ይወክላል፣ ይህም የዘመቻችንን ዓላማ ሰፊ የሀብት ጥምረትን ለመሰብሰብ የሚያመለክት ነው።'}
      </p>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">
          {language === 'en' ? 'Our Mission' : 'ተልእኳችን'}
        </h2>
        <p className="text-lg">
          {language === 'en'
            ? 'Don Kassa Inc. is committed to [Insert mission statement here]. Through the MEREB Campaign, we aim to mobilize the resources necessary to achieve our goals and create lasting impact in our community.'
            : 'ዶን ካሳ ኢንክ [የተልእኮ መግለጫውን እዚህ ያስገቡ] ቁርጠኛ ነው። በመረብ ዘመቻ አማካኝነት፣ ግቦቻችንን ለማሳካት እና በማህበረሰባችን ውስጥ ዘላቂ ተጽዕኖ ለመፍጠር አስፈላጊውን ሀብት ለማሰባሰብ እንሻለን።'}
        </p>
      </div>
    </div>
  );
};

export default About;