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
import Modal from "@mui/material/Modal";
import { styled } from "@mui/system";
import ModalUnstyled from "@mui/base/ModalUnstyled";

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
          Open modal
        </button>
        <StyledModal
          aria-labelledby="unstyled-modal-title"
          aria-describedby="unstyled-modal-description"
          open={open}
          onClose={handleClose}
          BackdropComponent={Backdrop}
        >
          <Box sx={style}>
            <h2 id="unstyled-modal-title">Text in a modal</h2>
            <p id="unstyled-modal-description">Aliquid amet deserunt earum!</p>
          </Box>
        </StyledModal>
      </div>
    </>
  );
};
