import "./App.css";
import NavigationBar from "./Components/TopNavigationBarComponent";
import Profile from "./Components/ProfileComponent";
import Skills from "./Components/AboutMeComponent";
import "react-bulma-components";
import "bulma/css/bulma.min.css";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <section className="section">
        <div className="container">
          <div className="columns is-mobile">
            <div className="column">
              <Profile />
            </div>
            <div className="column is-two-thirds">
              <Skills />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
