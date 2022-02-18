import './App.css';
import Navbar from './components/navbar/navbar' ;
import Banner from './components/banner/banner';
import About from './components/about/about';
import Portfolio from './components/portfolio/portfolio'

function App() {
  return (
    <div className="App">
      < Navbar />
      < Banner />
      < About />
      < Portfolio />

    </div>
  );
}

export default App;
