import React from 'react';
import './App.scss';
import ApiLoader from './components/apiLoader';
import Header from './components/header';
import ProductView from './components/productView';
import Footer from './components/footer';

function App() {

  return (
    <>
      <ApiLoader />
      <Header />
      <main>
        <ProductView />
      </main>
      <Footer />
    </>
  );
}

export default App;