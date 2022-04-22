import logo from "./logo.svg";
import "./App.css";
import Profile from "./components/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";

function App() {
  const { isLoading, getAccessTokenSilently, isAuthenticated } = useAuth0();

  function callApi() {
    axios
      .get("http://localhost:4000/")
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((err) => console.log(err.message));
  }

  async function callProtectedApi() {
    try {
      const token = await getAccessTokenSilently();
      const response = await axios.get("http://localhost:4000/protected", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }
  // console.log(isLoading);
  //if (isLoading) return <div>Loading.........</div>;
  return (
    <div className="App">
      <header className="App-header"></header>

      <div>
        <Header />
        <Profile />

        {/* {isAuthenticated && ( */}
        <ul>
          <button onClick={callApi}>Call API</button>
          <button onClick={callProtectedApi}>Call Protected Route</button>
        </ul>
        {/* )} */}
        {/* <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <PrivateRoute path="/profile" component={Profile} />
        </Switch> */}
      </div>
    </div>
  );
}

export default App;
