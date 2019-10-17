import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Accordion from '../BaseComponents/Accordion';
import withHeaderAndFooter from '../../hocs/withHeaderAndFooter';
import './styles/Home.styles.css'
import { AccordionItems } from '../BaseComponents/Accordion/Accordion.types';

const Home = props => {
  const { fetchSideBar, sideBarItems } = props;

  useEffect(() => {
    fetchSideBar();
  }, [fetchSideBar]);

  return (
    <div className='home-page'>
      <div className='home-page__side-bar'>
        <Accordion items={sideBarItems}/>
      </div>
      <div className='home-page__content'>
        Content
      </div>
    </div>
  )
};

Home.propTypes = {
  sideBarItems: AccordionItems,
  fetchSideBar: PropTypes.func.isRequired,
};

Home.defaultProps = {
  sideBarItems: null,
};

export default withHeaderAndFooter(Home);