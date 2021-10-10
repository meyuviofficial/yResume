import logo from "./logo.svg";
import "./App.css";
import NavigationBar from "./Components/TopNavBar";
import Profile from "./Components/ProfileComponent";
import Skills from "./Components/SkillsComponent";

function App() {
  return (
    <div className="App">
      <section class="section">
        <NavigationBar />
      </section>
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
  );
}

export default App;
