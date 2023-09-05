import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MyProfile from "./pages/My_profile";
import MyPet from "./pages/My_pet";
import MyFavoriteMovie from "./pages/My_favorite_movie";
import CurrentTime from "./pages/Current_time";
import Navigation from "./components/Navigation";
import styleProps from "./utils/style_config";
import my_profile from "./utils/my_profile";
import my_pet from "./utils/my_pet";
import my_favorite_movie from "./utils/my_favorite_movie";
import s from "./styles/color_picker.module.css";
import { useState } from "react";

function App() {
  const [isDark, setLight] = useState(false);
  return (
    <div className="App">
      <header
        className="App-header"
        style={{ backgroundColor: isDark ? "#e4ebe9" : "#282c34" }}
      >
        <div>
          <input
            id="checkbox_toggle"
            type="checkbox"
            className={s.check}
            checked={isDark}
            onChange={() => {
              setLight(!isDark);
            }}
          />
          <div className={s.checkbox}>
            <label className={s.slide} for="checkbox_toggle">
              <label className={s.toggle} for="checkbox_toggle"></label>
              <label className={s.tex} for="checkbox_toggle">
                Day
              </label>
              <label className={s.text} for="checkbox_toggle">
                Night
              </label>
            </label>
          </div>
        </div>
        <BrowserRouter>
          <Navigation navProps={styleProps.nav} thema={isDark} />
          <div>
            <Routes>
              <Route
                path="my_profile"
                element={<MyProfile my_profile={my_profile} thema={isDark} />}
              />
              <Route
                path="my_pet"
                element={<MyPet my_pet={my_pet} thema={isDark} />}
              />
              <Route
                path="my_favorite_movie"
                element={
                  <MyFavoriteMovie
                    my_favorite_movie={my_favorite_movie}
                    thema={isDark}
                  />
                }
              />
              <Route
                path="current_time"
                element={<CurrentTime thema={isDark} />}
              />
            </Routes>
          </div>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
