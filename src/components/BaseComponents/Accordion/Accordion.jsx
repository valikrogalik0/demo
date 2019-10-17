import React, { memo, useEffect, useState } from 'react';
import './styles/Accordion.styles.css'
import { AccordionItems } from './Accordion.types';

const Accordion = memo(props => {
  const { items } = props;
  const [activeItems, setActiveItems] = useState([]);

  useEffect(() => {
    if (Array.isArray(items)) {
      const initialArray = items.map(() => false);
      setActiveItems([...initialArray]);
    }
  },[items]);

  function onItemClick(itemIndex) {
    const updatedActiveItems = activeItems.map((itemState, index) => (
      itemIndex === index ? !itemState : itemState
    ));

    setActiveItems([...updatedActiveItems]);
  }

  return (
    <div className='horizontal-accordion'>
      {items && items.map((item, itemIndex) => {
        const itemButtonClassName = activeItems[itemIndex]
          ? 'accordion-button__item-button accordion-button__item-button_active'
          : 'accordion-button__item-button accordion-button__item-button_inactive';
        const itemPanelClassName = activeItems[itemIndex]
          ? 'accordion-section__panel-text accordion-section__panel-text_active'
          : 'accordion-section__panel-text accordion-section__panel-text_inactive';

        return (
          <div key={item.id} className='accordion-section'>
            <button
              onClick={() => onItemClick(itemIndex)}
              className={itemButtonClassName}>
              {item.name}
            </button>
            <div className={itemPanelClassName}>
              {item.children && item.children.length && item.children.map(panel => (
                <div key={panel.id} className="test">
                  {panel.text}
                </div>
              ))}
            </div>
          </div>
        )})}
    </div>
  );
});

Accordion.propTypes = {
  items: AccordionItems,
};

Accordion.defaultProps = {
  items: null,
};

export default Accordion;