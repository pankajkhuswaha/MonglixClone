import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useSelector } from "react-redux";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,   
    },
  },
};



export default function MultipleSelect() {
  const products = useSelector((state) => state.products?.products);

  const [age, setage] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setage(
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
          MenuProps={MenuProps}
        >
          {products.map((ele,i) => {
            return (
              <MenuItem key={i} value={ele}>
                <div className="overflow-x-hidden">{ele.name}</div>{" "}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}
