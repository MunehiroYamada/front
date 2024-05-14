import { FormControl } from "@mui/material";
import { InputLabel } from "@mui/material";
import { Select } from "@mui/material";
import { Box } from "@mui/material";
import { MenuItem } from "@mui/material";

const PullTitleEdit = ({ position, setPosition }) => {
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
      <FormControl>
        <InputLabel id="demo-simple-select-label">役職</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="役職"
          value={position}
          onChange={(e) => {
            setPosition(e.target.value);
          }}
        >
          {OPTIONS.map((obj) => (
            <MenuItem value={obj}>{obj}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default PullTitleEdit;
