import Login from "./Login/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./NotFound/notfound";
import ProtectedRoute from "./ProtectedRoute/protectedroute";
import AddItem from "./Additem/additem";

function App() {
  if (!localStorage.getItem("isAuthenticated"))
    window.localStorage.setItem("isAuthenticated", false);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/user"
            element={
              <ProtectedRoute>
                <AddItem />
              </ProtectedRoute>
            }
          />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
