import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Profile from "./components/Profile";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isLoading } = useAuth0();
  // console.log(isLoading);
  //if (isLoading) return <div>Loading.........</div>;
  return (
    <div className="App">
      <header className="App-header"></header>

      <div>
        <Login />
        <Logout />
        <Profile />
      </div>
    </div>
  );
}

export default App;
