import React from 'react';

function SideImage(props) {
  return (
    <div className='sideImageDiv'>
      <img className='sideImage' src={props.url} alt="Presentation" />
    </div>
  )
}

export default SideImage;