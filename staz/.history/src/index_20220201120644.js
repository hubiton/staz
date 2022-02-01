import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';

ReactDOM.render(
    <App />,
    document.getElementById("root")
  );
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Navbar />}>
      <Route index element={<App />} />
      <Route path="blogs" element={<Header />} />
    </Route>
  </Routes>
</BrowserRouter>