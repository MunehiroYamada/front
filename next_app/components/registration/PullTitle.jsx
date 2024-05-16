import { FormControl } from "@mui/material";
import { InputLabel } from "@mui/material";
import { Select } from "@mui/material";
import { Box } from "@mui/material";
import { MenuItem } from "@mui/material";

const PullTitle = ({ setSelected, selected }) => {
  const OPTIONS = [
    "アナリスト",
    "コンサルタント",
    "シニアコンサルタント",
    "マネージャー",
    "シニアマネージャー",
    "ディレクター",
  ];

  return (
    <Box>
      <FormControl sx={{ minWidth: 240 }}>
        <InputLabel id="demo-simple-select-label">役職</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="役職"
          value={selected}
          onChange={(e) => {
            setSelected(e.target.value);
          }}
          sx={{ background: "white" }}
        >
          {OPTIONS.map((obj, key) => (
            <MenuItem value={obj} key={obj}>
              {obj}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default PullTitle;
