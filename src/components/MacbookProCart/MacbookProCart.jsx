import React, { useContext, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Container, Divider, IconButton, Typography } from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import InfoIcon from "@mui/icons-material/Info";
import { useNavigate } from "react-router-dom";
import { macbookProCart } from "../../contexts/macbookProCart";

export default function Cart() {
  const { getCart, cart, changeProductCount, deleteFromCart } =
    useContext(macbookProCart);
  useEffect(() => {
    getCart();
  }, []);
  const navigate = useNavigate();
  // console.log(cart);
  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}>
      <div className="container-favorite-p">
        <p className="favorite-product-p">Favorite Product</p>
      </div>
      <TableContainer
        sx={{ maxWidth: "400px", marginLeft: "370px" }}
        className="table-container"
        component={Paper}>
        <Table className="table" aria-label="simple table">
          <TableHead>
            <TableRow className="table-row"></TableRow>
          </TableHead>
          <TableBody
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}>
            {cart &&
              cart?.products.map(row => (
                <TableRow
                  key={row.item.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {row.item.title}
                  </TableCell>
                  <TableCell align="right">
                    <IconButton
                      onClick={() => deleteFromCart(row.item.id)}
                      aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        style={{
          display: "flex",
          justifyContent: "flex-end",
          margin: "20px 10px",
        }}></Box>
    </Container>
  );
}
