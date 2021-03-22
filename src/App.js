import React from 'react';
import {store} from "./redux/store";
import {Provider} from 'react-redux';
import './App.css';

import AdminCourselist from "./components/AdminCourselist";
import CouseListnew from "./components/CouseListnew";


let App=()=> {

  return (
      <React.Fragment>

            {/*  <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                  <a href="/" className='navbar-brand'>Using React Redux Hackathon ----- Admin Course list   </a>

              </nav>*/}


              <Provider store={store}>
                  {/*  <AdminCourselist/>*/}
                  <CouseListnew/>
              </Provider>
          <div className="margin-bottom:500px">

          </div>

      </React.Fragment>

  )
}

export default App;
