import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from 'framer-motion';

const Contact = () => {
  const { language } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1 
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {language === 'en' ? 'Contact Us' : 'አግኙን'}
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
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
          <motion.img
            src="/ceo-image.jpg"
            alt="CEO of Don Kassa Inc."
            className="w-full max-w-md mx-auto rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
          <p className="mt-2 text-center text-sm">
            {language === 'en' ? 'Our CEO' : 'ዋና ስራ አስፈፃሚ'}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
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
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;