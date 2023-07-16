import { Route, Routes } from "react-router-dom";
import styles from "./App.module.scss";
import Home from "pages/Home/HomePage";
import Contacts from "pages/Contacts/ContactsPage";
import AboutPage from "pages/About/AboutPage";
import { SharedLayout } from "components/SharedLayout/SharedLayout";
import { Profile } from "pages/Profile/Profile";
import { Favorites } from "pages/Favorites/Favorites";

function App() {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="profile" element={<Profile />} />
          <Route path="favorites" element={<Favorites />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
