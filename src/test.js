import React from "react";
import { TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";

function ComboBox({ getData }) {
  return (
    <div>
      <Autocomplete
        id="combo-box-demo"
        options={getData}
        getOptionLabel={(option) => option}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Combo box" variant="outlined" />
        )}
      />
    </div>
  );
}
export default ComboBox;
