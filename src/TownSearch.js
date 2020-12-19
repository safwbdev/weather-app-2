import React from "react";
import { TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";

const TownSearch = (props) => {
  return (
    <>
      <Autocomplete
        id="combo-box-demo"
        options={props.townData}
        getOptionLabel={(option) => option}
        onChange={props.onTownChange}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Combo box" variant="outlined" />
        )}
      />
    </>
  );
};
export default TownSearch;
