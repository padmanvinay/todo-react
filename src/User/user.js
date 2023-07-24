import AddItem from "../Additem/additem";
import Login from "../Login/login";
const User = () => {
  if (localStorage.getItem("isValid")) {
    return <AddItem></AddItem>;
  } else {
    return <Login></Login>;
  }
};

export default User;
