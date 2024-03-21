import { useState } from "react";
import "./App.css";
import Articles from "./components/articles/Articles";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import MobileNav from "./components/mobile-nav/MobileNav";

function App() {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const toggleShowMobileNav = () => {
    console.log("Here: ", showMobileNav);
    setShowMobileNav((prev) => !prev);
  };

  return (
    <div className={"app"}>
      {showMobileNav && <MobileNav toggleShowMobileNav={toggleShowMobileNav} />}
      <Header
        mobileNavController={{
          showMobileNav,
          toggleShowMobileNav,
        }}
      />
      <Hero />
      <Features />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
