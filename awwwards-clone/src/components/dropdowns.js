import React, { useState } from 'react';


const DropdownWithRadios = ({ title, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('');

  const toggleDropdown = () => setIsOpen(prev => !prev);

  return (
    <div className="dropdown-radio">
      <button className="dropdown-radio-btn" onClick={toggleDropdown}>
        {title} ⌄
      </button>

      {isOpen && (
        <div className="dropdown-radio-list">
          {options.map((option, index) => (
            <label className="dropdown-radio-item" key={index}>
              <input
                type="radio"
                name={title}
                value={option}
                checked={selected === option}
                onChange={() => setSelected(option)}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownWithRadios;
