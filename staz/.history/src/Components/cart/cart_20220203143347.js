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

export const EnhancedTable = () => {
  const items = JSON.parse(localStorage.getItem("itemArray"));

  function ChildModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      pt: 2,
      px: 4,
      pb: 3,
    };

  return (
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
  );
};
