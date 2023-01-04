import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const LazyImgLoad = React.lazy(() => import('./components/LazyImgLoad'))
// import LazyImgLoad from './LazyImgLoad';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Suspense fallback = {<div> Loading...</div>}>
      <LazyImgLoad />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);