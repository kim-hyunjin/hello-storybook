import React, { useEffect } from 'react';

import './GlobalLoading.scss';

export default function Loading() {
  useEffect(() => {
    document.body.style.cssText = `
            overflow: hidden;
        `;
    return () => {
      document.body.style.cssText = `
            overflow: scroll;
        `;
    };
  }, []);
  return (
    <div className='loading-container'>
      <div className='loading'></div>
    </div>
  );
}
