import { Outlet } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "70px", paddingBottom: "70px" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;