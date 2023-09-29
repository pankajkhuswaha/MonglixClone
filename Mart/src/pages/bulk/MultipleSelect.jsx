import * as React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
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

function getStyles(name, age, theme) {
  return {
    fontWeight:
      age.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelect() {
  const products = useSelector((state) => state.products?.products);

  const theme = useTheme();
  const [age, setage] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setage(
      // On autofill we get a stringified value.
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
          {products.map((ele) => {
            return (
              <MenuItem value={ele}>
                <div className="overflow-x-hidden">{ele.name}</div>{" "}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}
