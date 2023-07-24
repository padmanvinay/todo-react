import { useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";
import EditIcon from "@mui/icons-material/Edit";
import TextField from "@mui/material/TextField";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

var todo = ["apple", "orange", "banana", "Watermelon"];
if (!localStorage.getItem("todo"))
  localStorage.setItem("todo", JSON.stringify(todo));
function DisplayItem({ getLocal, setGetLocal }) {
  const [itemList, setItemList] = useState(
    JSON.parse(localStorage.getItem("todo") || [])
  );

  const [editText, setEditText] = useState("");
  const [showIndex, setShowIndex] = useState(-1);
  const [deleteFlag, setDeleteFlag] = useState(false);

  const deleteItem = (index) => {
    let deleteList = itemList.slice();
    deleteList.splice(index, 1);
    setItemList(deleteList); //delete an item
    console.log(deleteList);
    localStorage.setItem("todo", JSON.stringify(deleteList));
    setGetLocal(deleteList);
  };

  const editItem = (index) => {
    setShowIndex(index);
    setDeleteFlag(true);
  };

  const editItemClicked = (index, item) => {
    //edit an item
    setShowIndex(-1);
    let editList = JSON.parse(localStorage.getItem("todo"));
    if (editText.length === 0) {
      editList[index] = item;
    } else {
      editList[index] = editText;
    }
    setItemList(editList);
    localStorage.setItem("todo", JSON.stringify(editList));
    setEditText("");
    setDeleteFlag(false);
  };

  const navigate = useNavigate();
  const redirectHome = () => {
    localStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    setItemList(JSON.parse(localStorage.getItem("todo")));
  }, [getLocal]);

  return (
    <div className="list">
      <Button
        onClick={redirectHome}
        variant="outlined"
        sx={{ left: "40vh", marginBottom: "2%" }}
      >
        Logout
      </Button>
      <div
        className="container"
        style={{
          width: "752px",
          marginLeft: "25%",
          border: "2px solid black",
          backgroundColor: "aliceBlue",
          textAlign: "center",
        }}
      >
        <div style={{ textAlign: "center", display: "block" }}>
          <h1>TODO</h1>
        </div>
        {itemList.map((item, index) => (
          <div className="card" key={index}>
            <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
              <List>
                {
                  <ListItem
                    secondaryAction={
                      <>
                        <IconButton
                          onClick={() => editItem(index)}
                          edge="end"
                          aria-label="delete"
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          disabled={deleteFlag}
                          onClick={() => deleteItem(index)}
                          edge="end"
                          aria-label="delete"
                        >
                          <DeleteIcon />
                        </IconButton>
                      </>
                    }
                  >
                    <span style={{ marginRight: "1%" }}>{index + 1}.</span>
                    {showIndex === index && (
                      <>
                        <TextField
                          size="small"
                          onChange={(e) => setEditText(e.target.value)}
                          label="Edit"
                          defaultValue={item}
                          variant="filled"
                          autoFocus
                        />
                        <CheckCircleIcon
                          onClick={() => editItemClicked(index, item)}
                        />
                      </>
                    )}
                    {(showIndex === index ? false : true) && (
                      <ListItemText id={index} primary={item} />
                    )}
                  </ListItem>
                }
              </List>
            </Box>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayItem;
