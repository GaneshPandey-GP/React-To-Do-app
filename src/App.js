import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddTwoToneIcon from "@material-ui/icons/AddTwoTone";
import List from "./List";
const App = () => {
  const [data, setData] = useState("");
  const [items, setItems] = useState([]);
  const inputEvent = (event) => {
    setData(event.target.value);
  };
  const dataStore = () => {
    setItems((itemArray) => {
      return [...itemArray, data];
    });
    setData("");
  };
  const deleteItem = (id) => {
    console.log("Hello!!");
    console.log(id)
    setItems((itemArray) => {
      return itemArray.filter((elem, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1>To-Do app</h1>
          <input
            type="text"
            onChange={inputEvent}
            placeholder="Add an Items.."
            value={data}
          />
          <Button onClick={dataStore}>
            <AddTwoToneIcon />
          </Button>
          {
            <ol>
              {items.map((values, index) => {
                return (
                  <List
                    value={values}  
                    key= {index}
                    id= {index}
                    onclicks={deleteItem}
                  />
                );
              })}
            </ol>
          }
        </div>
      </div>
    </>
  );
};
export default App;
