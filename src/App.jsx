import './App.css'
import Header from './components/Header/header';
import Destinations from './components/Destination/Destinations';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div className="app">
      <Header />
      <Destinations />
      <Footer />
    </div>
  );
}

export default App;