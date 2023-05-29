import React from 'react';
import { ButtonMedium } from '../common/Buttons';


const tabs = [
  { id: 1, label: 'dashboard' },
  { id: 2, label: 'all doctors' },
  { id: 3, label: 'all patients ' },
];

const Header: React.FC = () => {
  return (
    <header className="bg-sky-600 text-white p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl">My App</h1>
        <nav>
          {tabs.map(tab => (
            <ButtonMedium key={tab.id} label={tab.label} bgColor='bg-blue-700' />
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
