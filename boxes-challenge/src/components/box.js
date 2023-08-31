import React from 'react';
import './box.css';
import PropTypes from 'prop-types';

export default function Box(props) {
  Box.propTypes = {
    on: PropTypes.bool,
    toggle: PropTypes.func,
    id: PropTypes.number,
    item: PropTypes.object
  };

  // Not a good practice, putting props into their own local state creates 2 sources of trurh
  // One source of truth is at the app level and here in the component level = not good
  // const [on, setOn] = React.useState(props.on);

  const styles = {
    background: props.on ? 'black' : 'none',
  };

  console.log(props)

  return (
    <div
      style={styles}
      onClick={() => props.toggle(props.item.id)}
      className="box"
    ></div>
  );
}
