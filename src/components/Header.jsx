import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from "@/components/ui/button";

const Header = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <header className="bg-primary text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">MEREB Campaign</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:underline">{language === 'en' ? 'Home' : 'መነሻ'}</Link></li>
            <li><Link to="/about" className="hover:underline">{language === 'en' ? 'About' : 'ስለ እኛ'}</Link></li>
            <li><Link to="/resources" className="hover:underline">{language === 'en' ? 'Resources' : 'ሀብቶች'}</Link></li>
            <li><Link to="/contact" className="hover:underline">{language === 'en' ? 'Contact' : 'አግኙን'}</Link></li>
          </ul>
        </nav>
        <Button onClick={toggleLanguage} variant="outline">
          {language === 'en' ? 'አማርኛ' : 'English'}
        </Button>
      </div>
    </header>
  );
};

export default Header;