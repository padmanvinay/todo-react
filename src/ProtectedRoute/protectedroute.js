import NotFound from "../NotFound/notfound";

const ProtectedRoute = ({ children }) => {
  const isValid = JSON.parse(localStorage.getItem("isValid"));
  if (!isValid) {
    return <NotFound></NotFound>;
  }
  return children;
};
export default ProtectedRoute;
