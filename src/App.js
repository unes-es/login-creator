import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ForgotPassword from "./ForgotPassword";
import Nav from "./Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./AuthContext";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "./Dashboard";

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home}>
              <Home />
            </Route>
            <Route path="/home" component={Home}>
              <Home />
            </Route>
            <PrivateRoute path="/dashboard" component={Dashboard}>
              <Dashboard />
            </PrivateRoute>
            <Route path="/SignIn" component={SignIn}>
              <SignIn />
            </Route>
            <Route path="/SignUp" component={SignUp}>
              <SignUp />
            </Route>
            <Route path="/ForgotPassword" component={ForgotPassword}>
              <ForgotPassword />
            </Route>
          </Switch>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
