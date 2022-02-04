import React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Button,
  FormHelperText,
  Grid,
  Tooltip,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import ModalUnstyled from "@mui/base/ModalUnstyled";
import Snackbar from "@mui/material/Snackbar";
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
  display: "flex",
  justifyContent: "center",
};

export const EnhancedTable = () => {
  const items = JSON.parse(localStorage.getItem("itemArray"));

  let suma = 0;
  items?.map((item) => {
    suma = suma + Number(item.price);
  });

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open1, setOpen1] = React.useState(false);
  const [animation, setAnimation] = React.useState(false);

  const handleClick1 = () => {
    setOpen1(true);
    setAnimation(true);
    localStorage.removeItem("itemArray");
    setTimeout(() => {
      setOpen(false);
      setAnimation(false);
    }, 3500);
  };

  const handleClose1 = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen1(false);
  };

  const remove = (itemDelete) => {
    const newItems = items.filter((item) => item !== itemDelete);
    localStorage.setItem("itemArray", JSON.stringify(newItems));
    window.location.reload();
  };

  return (
    <Grid container spacing={2}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
          flexDirection: "column",
        }}
      >
        <Paper sx={{ width: "700px", mb: 2 }}>
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650 }}
              aria-label="simple table"
              style={{ border: "solid 1px #af24ff", textAlign: "center" }}
            >
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Typography style={{ fontWeight: 600 }}>Nazwa</Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography style={{ fontWeight: 600 }}>Cena</Typography>
                  </TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {items ? (
                  items.map(([item, index]) => (
                    <TableRow
                      key={item.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {item.name}
                      </TableCell>
                      <TableCell align="right">{item.price}</TableCell>
                      <TableCell align="right">
                        <Button onClick={() => remove(item)}>
                          <Tooltip title="Usuń z koszyka">
                            <DeleteIcon style={{ color: "#af24ff" }} />
                          </Tooltip>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <Typography style={{ textAlign: "right", margin: "10px 0" }}>
                    Koszyk jest pusty
                  </Typography>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
        <div>
          <Grid container spacing={2}>
            <Grid
              item
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                onClick={handleOpen}
                variant="outlined"
                style={{
                  borderColor: "#af24ff",
                  color: "#af24ff",
                }}
                disabled={!items}
              >
                <Typography>Przejdź do płatności</Typography>
              </Button>
              {!items && <FormHelperText>Kosz jest pusty </FormHelperText>}
            </Grid>
            <Grid item>
              <Button
                style={{ borderColor: "#af24ff", color: "#af24ff" }}
                onClick={() => {
                  localStorage.removeItem("itemArray");
                  window.location.reload();
                }}
                variant="outlined"
              >
                <Typography>Oproznij koszyk</Typography>
              </Button>
            </Grid>
          </Grid>
          <StyledModal
            aria-labelledby="unstyled-modal-title"
            aria-describedby="unstyled-modal-description"
            open={open}
            onClose={handleClose}
            BackdropComponent={Backdrop}
          >
            <Box sx={style}>
              {!animation ? (
                <Grid>
                  <h2 id="unstyled-modal-title">
                    <Typography>Suma: {suma.toFixed(2)} zł</Typography>
                  </h2>
                  <Button
                    variant="outlined"
                    onClick={handleClick1}
                    style={{
                      borderColor: "#af24ff",
                      color: "#af24ff",
                    }}
                  >
                    Kup produkty
                  </Button>
                </Grid>
              ) : null}
              {animation ? (
                <Grid
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src="https://i.postimg.cc/Z5Jw9dZS/output-onlinegiftools-1.gif"
                    width="350px"
                    height="250px"
                    alt="animation"
                  />
                  <Typography>Dziekujemy!</Typography>
                </Grid>
              ) : null}
            </Box>
          </StyledModal>
          <Snackbar
            open={open1}
            autoHideDuration={3000}
            onClose={handleClose1}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          >
            <Alert
              onClose={handleClose1}
              severity="success"
              sx={{ width: "100%" }}
            >
              Zakupiono produkty!
            </Alert>
          </Snackbar>
        </div>
      </Box>
    </Grid>
  );
};
