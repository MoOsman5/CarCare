import './App.css';
import Header from './components/Header';
import About from './components/about';
import Portfolio from './components/portfolio';
import Services from './components/services';
import Choose from './components/choose';
import Stat from './components/stat';
import Team from './components/team';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Portfolio />
      <Services />
      <Choose/>
      <Stat/>
      <Team/>
      <Footer/>
    </div>
  );
}

export default App;
