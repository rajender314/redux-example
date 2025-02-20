import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, TextField, Button } from "@material-ui/core";
import { deleteItem, getInitialData, save } from "./slices/locationSlice";
import axios from "axios";

export default function DisplayUI() {
  const [locationName, setLocationName] = useState("");
  const dispatch = useDispatch();
  const { location }: any = useSelector((state: any) => state.location);
  console.log(23)

  useEffect(() => {
    (async () => {
        console.log(2322)

      await getdata().then((response: any) => {
        console.log(response);
        dispatch(getInitialData(response));
      });
    })();
  }, []);

  const getdata = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return response?.data;
  };

  const handleData = (e: any) => {
    setLocationName(e.target.value);
  };
  const handleSave = () => {
    const ifPrestent = location.includes(locationName);
    if (locationName !== undefined && !ifPrestent) {
      dispatch(
        save({
          userId: 1,
          id: 101,
          title:
            "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        })
      );
      setLocationName("");
    } else {
      setLocationName("");
    }
  };
  const handleDelete = (ele: any) => {
    const index = location.indexOf(ele);
    if (index > -1) {
      dispatch(deleteItem(index));
    }
  };
  return (
    <Box>
      <Box>
        <TextField
          onChange={handleData}
          value={locationName}
          label="Enter location name"
        />
        <Button
          style={{ margin: "10px" }}
          variant="contained"
          color="primary"
          onClick={handleSave}
        >
          add
        </Button>
      </Box>
      <Box>
        <h3> List of locations </h3>
      </Box>
      <Box>
        {location &&
          location.map((item: any, index: number) => (
            <li key={index}>
              <div>
                {item.id}
                <span onClick={() => handleDelete(item)}>delete</span>
              </div>
            </li>
          ))}
      </Box>
    </Box>
  );
}
