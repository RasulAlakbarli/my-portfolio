import React from 'react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-gray-50/60 border-b border-gray-200/50">
      <nav className="container mx-auto px-6 py-4">
        <ul className="flex justify-center space-x-8 text-sm font-medium">
          {['About', 'Timeline', 'Skills', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="text-gray-600 hover:text-gray-800 transition-colors">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
