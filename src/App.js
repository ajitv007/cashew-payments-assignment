import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route ,Redirect} from "react-router-dom";

import { AuthProvider } from "./utils/AuthProvider";
import { LoadingScreen } from "./containers/LoadingScreen";
import { AuthProtectedRoute } from "./utils/AuthProtectedRoute";
import { render } from "@testing-library/react";
const SignUp = lazy(() => import("./containers/signup"));
const Dashboard = lazy(() => import("./containers/dashboard"));

function App() {

  return (
    <Router>
      <AuthProvider>
        <Suspense fallback={LoadingScreen()}>
          <Switch>
          <Route
                exact
                path="/"
                render={() => {
                    return (
                      <Redirect to="/signup" /> 
                    )
                }}
              />

            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/home">
              <AuthProtectedRoute>
                <Dashboard />
              </AuthProtectedRoute>
            </Route>
          </Switch>
        </Suspense>
      </AuthProvider>
    </Router>
  );
}

export default App;
