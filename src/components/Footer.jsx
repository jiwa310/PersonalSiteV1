import React from 'react';

const Footer = () => {
  return (
    <footer className="font-league-spartan text-center py-6 mt-12 text-gray-400">
      <p>Designed and Built by Jim Wang</p>
      <p>
        <a href="https://github.com/yourusername/yourrepository" target="_blank" rel="noreferrer" className="font-league-spartan hover:text-yellow-400 hover:underline text-gray-400">
          GitHub Repository Link
          <img src="github.svg" alt="GitHub" className="inline-block w-6 h-6 ml-2" />
        </a>
      </p>
    </footer>
  );
};

export default Footer;
