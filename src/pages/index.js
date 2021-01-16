import React, { Component } from 'react';
import indexRoutes from './routes';
import { Switch, Route, withRouter } from 'react-router-dom';
import withRoot from '../components/withRoot';
import { GlobalProvider } from '../context/GlobalState';
import AppAppBar from '../modules/views/AppAppBar';

class Index extends Component {
  render() {
    const { classes, ...parentProps } = this.props;

    return (
      <GlobalProvider>
        <div id="app" style={{ marginBottom: 30 }}>
          <AppAppBar />

          <Switch>
            {indexRoutes.map((prop, key) => {
              return (
                <Route
                  path={prop.path}
                  exact={prop.exact}
                  key={key}
                  render={
                    prop.renderFunc
                      ? prop.renderFunc.bind(this, {})
                      : (props) => (
                          <prop.component {...parentProps} {...props} />
                        )
                  }
                />
              );
            })}
          </Switch>
        </div>
      </GlobalProvider>
    );
  }
}

export default withRouter(withRoot(Index));
