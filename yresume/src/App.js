import "./App.css";
import NavigationBar from "./Components/TopNavigationBarComponent";
import Profile from "./Components/ProfileComponent";
import Skills from "./Components/SkillsComponent";

function App() {
  return (
    <div className="App">
      <section clasName="hero is-fullheight-with-navbar">
        <div className="hero-head">
          <section class="section">
            <NavigationBar />
          </section>
        </div>
        <div className="hero-body container">
          <section class="section">
            <section class="columns">
              <div class="column">
                <Profile />
              </div>
              <div class="column is-three-quarters">
                <Skills />
              </div>
            </section>
          </section>
        </div>
      </section>
    </div>
  );
}

export default App;
