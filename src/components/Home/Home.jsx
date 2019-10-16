import React from 'react'
import PropTypes from 'prop-types'
import Accordion from '../BaseComponents/Accordion';
import withHeaderAndFooter from '../../hocs/withHeaderAndFooter';
import './styles/Home.styles.css'

let defaultItems = [
  {name: 'One', isActive: false, text: 'LoremIpsum', id: 0},
  {name: 'Two', isActive: true, text: 'LoremIpsum', id: 1},
  {name: 'Three', isActive: true, text: 'LoremIpsum', id: 2},
];

const Home = props => {
  const [items, setItems] = React.useState(defaultItems);

  const onChangeActive = (currID) => {
    const updatedItems = items.map(item => item.id === currID ? { ...item, isActive: !item.isActive } : item);

    setItems([...updatedItems]);
  };

  return (
    <div className='home-page'>
      <div className='home-page__side-bar'>
        <Accordion onChangeActive={onChangeActive} items={items}/>
      </div>
      <div className='home-page__content'>
        Content
      </div>
    </div>
  )
};

export default withHeaderAndFooter(Home);