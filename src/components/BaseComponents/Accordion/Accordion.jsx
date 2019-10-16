import React, { memo } from 'react';
import './styles/Accordion.styles.css'

const Accordion = memo(props => {
  const { items, onChangeActive } = props;


  function onItemClick(itemId) {
    console.log(itemId);
    onChangeActive(itemId)
  }

  return (
    <div className='horizontal-accordion'>
      {items && items.map(item => {
        const itemButtonClassName = item.isActive
          ? 'accordion-button__item-button accordion-button__item-button_active'
          : 'accordion-button__item-button accordion-button__item-button_inactive';
        const itemPanelClassName = item.isActive
          ? 'accordion-section__panel-text accordion-section__panel-text_active'
          : 'accordion-section__panel-text accordion-section__panel-text_inactive';

        return (
          <div key={item.id} className='accordion-section'>
            <button
              onClick={() => onItemClick(item.id)}
              className={itemButtonClassName}>
              {item.name}
            </button>
            <div className={itemPanelClassName}>
              <div className="test">
                {item.text}
              </div>
            </div>
          </div>
        )})}
    </div>
  );
});

Accordion.propTypes = {

};

Accordion.defaultProps = {

};

export default Accordion;