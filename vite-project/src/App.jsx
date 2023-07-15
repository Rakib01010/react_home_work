import React from 'react';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';

const App = () => {
  return (
    <div>
      <Header title="My first react application" />
      <Content />
      <Footer />
    </div>
  );
}

export default App;