import React from 'react';

const SideNav: React.FC = () => (
  <aside className="sidebar">
    <nav>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  </aside>
);

export default SideNav;
