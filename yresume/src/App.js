import "./App.css";
import NavigationBar from "./Components/TopNavigationBarComponent";
import Profile from "./Components/ProfileComponent";
import AboutMe from "./Components/AboutMeComponent";
import Skills from "./Components/SkillsComponent";
import "react-bulma-components";
import "bulma/css/bulma.min.css";
import { Divider } from "semantic-ui-react";

function App() {
  return (
    <div className="App has-background-black">
      <NavigationBar />
      <section className="section">
        <section className="container box">
          <h3 class="title is-3">ABOUT ME</h3>
          <Divider />
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
      </section>
      <section className="container box">
        <h3 class="title is-3">SKILLS</h3>
        <Divider />
        <Skills />
      </section>
    </div>
  );
}

export default App;
