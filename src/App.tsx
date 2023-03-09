import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Content from './components/content/Content';
import Footer from './components/Footer';
import {Provider} from 'react-redux';
import {store} from './redux-store/store';
import DevMenu from './dev/devMenu';
import RenderError from './errors/RenderError';

function App() {
   return (
      <>
         <Provider store={store}>
            <Header />
            <Content />
            <RenderError />
            <Footer />
            {/* <DevMenu /> */}
         </Provider>
      </>
   );
}

export default App;
