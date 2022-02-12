import Navbar from "./components/Navbar";
import Routes from "./components/Routes";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  console.log(darkTheme);
  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="dark:bg-gray-900 bg-gray-100 dark:text-gray-200 black min-h-screen">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Routes />
        <Footer />
      </div>
    </div>
  );
}

export default App;
