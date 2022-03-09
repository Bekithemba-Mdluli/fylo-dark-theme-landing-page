import Access from "./components/Access";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Productive from "./components/Productive";
import Users from "./components/Users";


function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Features />
      <Productive />
      <Users />
      <Access />
      <Footer />
    </div>
  );
}

export default App;
