import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200/50 mt-24 bg-gray-50/50">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 mb-4 md:mb-0">&copy; 2024 Rasul Alakbarli. All rights reserved.</p>
          <div className="flex space-x-6">
            {/* LinkedIn button opens in a new tab */}
            <a 
              href="https://www.linkedin.com/in/rasulalakbarli/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              LinkedIn
            </a>

            {/* GitHub button opens in a new tab */}
            <a 
              href="https://github.com/RasulAlakbarli" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
