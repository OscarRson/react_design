import logo from './logo.svg';
import './App.css';
import Navbar from './layout/Navbar';
import SlideShowBar from './layout/SlideShowBar';
import KeyFeatures from './layout/KeyFeatures';

function App() {
  return (
    <div className="App">
      <Navbar/> 
      <SlideShowBar/>
      <KeyFeatures/>
    </div>
  );
}

export default App;
