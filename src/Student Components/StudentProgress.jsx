import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React from "react";
import StudentMenu from "./StudentMenu";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.gray,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    backgroundColor: theme.palette.common.gray,
    color: theme.palette.common.black,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24),
  createData("Ice cream sandwich", 237, 9.0, 37),
  createData("Eclair", 262, 16.0, 24),
  createData("Cupcake", 305, 3.7, 67),
  createData("Gingerbread", 356, 16.0, 49),
];

function StudentProgress() {
  return (
    <div>
      <StudentMenu />
      <div
        style={{
          float: "right",
          height: "100vh",
          width: "75%",
          backgroundColor: "#a0e697",
        }}
      >
        <div style={{ marginTop: "120px" }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell rowSpan={2}>Student Name</StyledTableCell>

                  <StyledTableCell align="center" colSpan={2}>
                    Quiz 1
                  </StyledTableCell>
                  <StyledTableCell align="center" colSpan={2}>
                    Quiz 2
                  </StyledTableCell>
                  <StyledTableCell align="center" colSpan={2}>
                    Quiz 3
                  </StyledTableCell>
                </TableRow>
                <TableRow>
                  <StyledTableCell align="center">%(2.5)</StyledTableCell>
                  <StyledTableCell align="center">
                    Total Marks (20)
                  </StyledTableCell>
                  <StyledTableCell align="center">%(2.5)</StyledTableCell>
                  <StyledTableCell align="center">
                    Total Marks (30)
                  </StyledTableCell>
                  <StyledTableCell align="center">%(2.5)</StyledTableCell>
                  <StyledTableCell align="center">
                    Total Marks (20)
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell colSpan={2} align="center">
                      {row.calories}
                    </StyledTableCell>
                    <StyledTableCell colSpan={2} align="center">
                      {row.fat}
                    </StyledTableCell>
                    <StyledTableCell colSpan={2} align="center">
                      {row.carbs}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}

export default StudentProgress;
