import logo from "./logo.svg";
import "./App.css";
import NavigationBar from "./Components/TopNavBar";
import Profile from "./Components/ProfileComponent";

function App() {
  return (
    <div className="App">
      <section class="section">
        <div className="container is-widescreen">
          <NavigationBar />
        </div>
      </section>
      <section className="section is-medium">
        <div className="block ">
          <Profile />
        </div>
      </section>
    </div>
  );
}

export default App;
