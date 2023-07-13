import { Route, Routes } from "react-router-dom";
import styles from "./App.module.scss";
import Home from "pages/Home";
import Contacts from "pages/Contacts";

function App() {
  return (
    <div className={styles.app}>
      Movies
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
}

export default App;
