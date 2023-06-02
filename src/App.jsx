import { BrowserRouter, Route, Routes } from "react-router-dom";
import FetchApi from "./ApiFetch/fetchApi";
import Home from "./component/Home";
import Contact from "./component/contact";

import Summary from "./ApiFetch/data.jsx/Summary";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <FetchApi /> */}
        <Routes>
          <Route path="/" element={<FetchApi />}>
            FetchApi
          </Route>
          <Route path="/contact" element={<Contact />}>
            Contact
          </Route>
          <Route path="/Summary" element={<Summary />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
