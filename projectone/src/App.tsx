import React from 'react';

import './App.css';
import { LoginComponent, Logins } from './components/loginDisplay';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { EmployeeComponent, ReduxEmployeeContainer } from './components/employees';
import { User } from './models/user';
import { FinanceComponent } from './components/finance/financeHome';
import { Provider, connect } from 'react-redux';
import { store } from './redux/store';
import { IState } from './redux/reducers';
import { ToastContainer, toast } from "react-toastify";
class App extends React.Component<any, any> {

  constructor(props: any) {
    super(props)
    this.state = {
      userApp: null
    }
  }

  render() {


    if (!this.props.user) {
      return (
        <Router>


          <Route path="/">
            <Logins />
          </Route>

        </Router>

      )
    } else {


      return (

        <>
          <Router >

            <Provider store={store}>
              <Switch>

                <Route path="/employee" component={ReduxEmployeeContainer} />
                <Route path="/finance">
                  <FinanceComponent user={this.props.user} />
                </Route>
                {/* <Route path="*"><Logins /></Route> */}
                <Route path={["/login", "*"]}><Logins /></Route>
                {/* <Route path={["/login", "*"]}><LoginComponent /></Route> */}


              </Switch>
            </Provider>

          </Router>



          <ToastContainer />
        </>





      )
    }

  }
}

export default App;

const mapStateToProps = (state: IState) => {
  console.log("in mys state")
  console.log(state);
  return {
    ...state.loginUser
  }

}

const mapDispatchToProps = {

}


export let AppR = connect(mapStateToProps, mapDispatchToProps)(App);


