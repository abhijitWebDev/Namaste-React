import React from 'react';
import ReactDOM from 'react-dom/client';
import HeaderComponent from './component/Header';
import Body from './component/Body';
import Footer from './component/Footer';

const AppLayout = () => {
  return (
    <React.Fragment>
      <HeaderComponent />
      <Body />
      <Footer />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
