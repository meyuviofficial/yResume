import "./App.css";
import NavigationBar from "./Components/TopNavigationBarComponent";
import Profile from "./Components/ProfileComponent";
import AboutMe from "./Components/AboutMeComponent";
import Skills from "./Components/SkillsComponent";
import "react-bulma-components";
import "bulma/css/bulma.min.css";

function App() {
  return (
    <div className="App">
        <NavigationBar />
      <section className="section">
        <section className="container box">
          <div className="section">
            <div className="columns is-mobile">
              <div className="column">
                <Profile />
              </div>
              <div className="column is-two-thirds">
                <AboutMe />
              </div>
            </div>
          </div>
        </section>
        <section className="container box">
          <div className="section">
            <Skills />
          </div>
        </section>
      </section>
    </div>
  );
}

export default App;
