import React from 'react';
import Header from './Header';
import SideNav from './SideNav';
import MainContent from './MainContent';

const ResponsiveLayout: React.FC = () => (
  <div className="container">
    <Header />
    <div className="content">
      <SideNav />
      <MainContent />
    </div>
  </div>
);

export default ResponsiveLayout;
