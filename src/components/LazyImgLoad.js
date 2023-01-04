import React from 'react';

class LazyImgLoad extends React.Component {
  render() {
    return (
      <div className='LazyImgLoad'>
        <img src={require('../../public/assets/images/jpg/img03.jpg').default} />
        <img src={require('../../public/assets/images/png/img04.png').default} />
        <img src={require('../../public/assets/images/gif/img05.gif').default} />
        <img src={require('../../public/assets/images/jpg/img06.jpg').default} />
        <img src={require('../../public/assets/images/png/img07.png').default} />
        <img src={require('../../public/assets/images/png/img08.png').default} />
      </div>
    );
  }
}

export default LazyImgLoad;