import React from 'react';

import './Backdrop.css';

const backdrop = ({ show }) => {
   const cssClasses = ['Backdrop', show ? 'BackdropOpen' : 'BackdropClose'];

   return <div className={cssClasses.join(' ')} />;
};

export default backdrop;
