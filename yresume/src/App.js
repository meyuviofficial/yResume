import logo from "./logo.svg";
import "./App.css";
import NavigationBar from "./Components/TopNavBar";
import Profile from "./Components/ProfileComponent";

function App() {
  return (
    <div className="App">
      <section class="hero is-black is-fullheight">
        <div className="hero-head">
          <NavigationBar />
        </div>
        <div class="hero-body">
          <section>
            <div class="level">
              <div clssName="level-left">
                <div className="level-item">
                  <Profile />
                </div>
              </div>
              <div clssName="level-right">
                <div className="level-item">
                  {/* <Profile /> */}
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

export default App;
