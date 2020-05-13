import React from 'react';

const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: 'scroll',
        borderTop: '1px dotted darkblue',
        height: '800px',
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
