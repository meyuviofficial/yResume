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
      <section className="section has-background-black">
        <section className="container box">
          <h3 class="title is-3">ABOUT ME</h3>
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
