import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const { language } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">
        {language === 'en' ? 'Contact Us' : 'አግኙን'}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            {language === 'en' ? 'Get in Touch' : 'ያግኙን'}
          </h2>
          <p className="mb-2">
            <strong>{language === 'en' ? 'Phone:' : 'ስልክ:'}</strong> +251703302703
          </p>
          <p className="mb-2">
            <strong>{language === 'en' ? 'Email:' : 'ኢሜይል:'}</strong> donkassa77@gmail.com
          </p>
          <p className="mb-4">
            <strong>{language === 'en' ? 'Location:' : 'አድራሻ:'}</strong> {language === 'en' ? 'Addis Ababa, Ethiopia' : 'አዲስ አበባ፣ ኢትዮጵያ'}
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            {language === 'en' ? 'Send us a Message' : 'መልእክት ይላኩልን'}
          </h2>
          <form className="space-y-4">
            <Input type="text" placeholder={language === 'en' ? 'Your Name' : 'ስምዎ'} />
            <Input type="email" placeholder={language === 'en' ? 'Your Email' : 'ኢሜይልዎ'} />
            <Textarea placeholder={language === 'en' ? 'Your Message' : 'መልእክትዎ'} rows={4} />
            <Button type="submit">
              {language === 'en' ? 'Send Message' : 'መልእክት ይላኩ'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;