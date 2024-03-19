import "./App.css";
import Articles from "./components/articles/Articles";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
