import './App.css';
import {Navbar} from './Components/Navbar/Navbar'
import {Header} from './Components/Header/Header'
import {Buty} from './Components/Buty/Buty'
import * as ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
 return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Navbar />}>
      <Route index element={<App />}/>
      <Route path="blogs" element={<Header />} />
    </Route>
  </Routes>
</BrowserRouter>
  );
}


export default App
