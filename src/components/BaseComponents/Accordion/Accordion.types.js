import PropTypes from 'prop-types';

export const AccordionItems = PropTypes.arrayOf(PropTypes.shape({
  name: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  children: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    text: PropTypes.string,
  })),
}));
