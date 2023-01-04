import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <h1> 이미지 지연(lazy) 로딩 테스트 - image-lazy-loading </h1>
        <img src={require('../public/assets/images/png/img01.png').default} />
        <img src={require('../public/assets/images/gif/img02.gif').default} />
      </div>
    );
  }
}

export default App;