import { Route, Routes } from "react-router-dom";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.app}>
      Movies
      <Routes>
        <Route path="/" />
      </Routes>
    </div>
  );
}

export default App;
