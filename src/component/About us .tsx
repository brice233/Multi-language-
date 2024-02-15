import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const AboutUsPage = () => {
  const { t, i18n } = useTranslation();
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };
  return (
    
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="bg-gray-800 p-8 rounded-lg text-center text-white" >
      <h2 className="text-3xl mb-4">{t('Header')}</h2>
      <h3 className="text-lg mb-8">{t('words')}</h3>

      </div>
      
      <div className="mt-8">
        <select
          className="bg-blue-500 text-white py-2 px-4 rounded-lg text-lg font-semibold hover:bg-blue-600 transition duration-300"
          onChange={handleLanguageChange}
        >
          <option value="en">English</option>
          <option value="Ki">Kinyarwanda</option>
          <option value="fr">French</option>
        </select>
        <Link
          to="/get-started"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg text-lg font-semibold hover:bg-blue-600 transition duration-300 ml-4"
        >
          GET STARTED
        </Link>
      </div>




    </div>
    
  );
};

export default AboutUsPage;