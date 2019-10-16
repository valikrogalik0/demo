import React from 'react';
import Footer from '../../components/BaseComponents/Footer';
import Header from '../../components/BaseComponents/Header';
import './styles/withHeaderAndFooter.styles.css';

export default function (PageComponent) {
  return function WithHeaderAndFooter(props) {
    return (
      <div className='default-page'>
        <div className='default-page__header-wrapper'>
          <Header />
        </div>
        <div className='default-page__content-wrapper'>
          <PageComponent {...props} />
        </div>
        <div className='default-page__footer-wrapper'>
          <Footer/>
        </div>
      </div>
    );
  }
}