import ModalContent from "./ModalContent";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Grid";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ModalStart = ({ setMemberState }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button
        variant="contained"
        type="button"
        onClick={handleOpen}
        disabled={open}
      >
        検索
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} md={style}>
          <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <ModalContent setMemberState={setMemberState} />
            </Grid>
            <Grid item>
              <Button variant="contained" type="button" onClick={handleClose}>
                閉じる
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
};

{
  /* <Box sx={style}>
<Grid container spacing={2}>
  <Grid item>
    <ModalContent setMemberState={setMemberState} />
  </Grid>
  <Grid item>
    <Button variant="contained" type="button" onClick={handleClose}>
      閉じる
    </Button>
  </Grid>
</Grid>
</Box>
</Modal>
</div>
);
}; */
}

export default ModalStart;
