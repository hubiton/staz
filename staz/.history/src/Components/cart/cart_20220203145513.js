import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, Tooltip, Typography } from "@mui/material";
import { styled } from "@mui/system";
import ModalUnstyled from "@mui/base/ModalUnstyled";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled("div")`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  p: 2,
  px: 4,
  pb: 3,
};

export const EnhancedTable = () => {
  const items = JSON.parse(localStorage.getItem("itemArray"));

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleCloseAlert}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  const [open1, setOpen1] = React.useState(false);

  const handleClick1 = () => {
    setOpen1(true);
  };

  const handleClose1 = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen1(false);
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Paper sx={{ width: "700px", mb: 2 }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Typography style={{ fontWeight: 600 }}>Nazwa</Typography>
                  </TableCell>
                  <TableCell align="right">
                    {" "}
                    <Typography style={{ fontWeight: 600 }}>Cena</Typography>
                  </TableCell>

                  <TableCell align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {items ? (
                  items.map((item) => (
                    <TableRow
                      key={item.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {item.name}
                      </TableCell>
                      <TableCell align="right">{item.price}</TableCell>
                      <TableCell align="right">
                        <Button
                          onClick={() => {
                            localStorage.removeItem("itemArray");
                            window.location.reload();
                          }}
                        >
                          <Tooltip title="Usuń z koszyka">
                            <DeleteIcon style={{ color: "#af24ff" }} />
                          </Tooltip>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <Typography style={{ textAlign: "center" }}>
                    Koszyk jest pusty
                  </Typography>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
      <div>
        <button type="button" onClick={handleOpen}>
          <Typography>Kup</Typography>
        </button>
        <StyledModal
          aria-labelledby="unstyled-modal-title"
          aria-describedby="unstyled-modal-description"
          open={open}
          onClose={handleClose}
          BackdropComponent={Backdrop}
        >
          <Box sx={style}>
            <h2 id="unstyled-modal-title">
              <Typography>Suma:</Typography>
            </h2>
            <Button variant="outlined" onClick={handleClick1}>
              Open success snackbar
            </Button>
            <Snackbar
              open={open}
              autoHideDuration={6000}
              onClose={handleClose1}
            >
              <Alert
                onClose={handleClose1}
                severity="success"
                sx={{ width: "100%" }}
              >
                This is a success message!
              </Alert>
            </Snackbar>
          </Box>
        </StyledModal>
      </div>
    </>
  );
};
