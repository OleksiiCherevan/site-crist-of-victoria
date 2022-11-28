import logo from './logo.svg';
import './App.css';
import Header from "./components/Header.jsx"

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Main from './components/Main';
import About from './components/About';
import Container from './components/Container';
import Gallery from './components/Gallery';
import News from './components/News';
import Contacts from './components/Contacts';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Container>
        
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/news" element={<News />}></Route>
        <Route path='/contacts' element={<Contacts />}></Route>
      </Routes>
      </Container>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
