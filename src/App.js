import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import routes from "./router/router";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {routes.map((route) => (
            <Route
              path={route.path}
              element={<route.component />}
              key={route.path}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
