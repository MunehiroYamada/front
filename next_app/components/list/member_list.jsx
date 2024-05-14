import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import React from "react";
import Link from "next/link";
export default function MemberList({ member }) {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableBody>
              <TableRow>
                <TableCell>社員番号</TableCell>
                <TableCell align="right">氏名</TableCell>
                <TableCell align="right">住所</TableCell>
                <TableCell align="right">連絡先</TableCell>
                <TableCell align="right">役職</TableCell>
                <TableCell align="right">担当プロジェクト</TableCell>
              </TableRow>
              {member.map((value, index) => (
                <TableRow key={index}>
                  <tTableCell component="th" scope="row" align="right">
                    <Link
                      href={`http://localhost:3000/04_detail/${value.memberid}`}
                    >
                      {value.memberid}
                    </Link>
                  </tTableCell>
                  <TableCell align="right">{value.name}</TableCell>
                  <TableCell align="right">{value.location}</TableCell>
                  <TableCell align="right">{value.phone}</TableCell>
                  <TableCell align="right">{value.title}</TableCell>
                  <TableCell align="right">{value.project}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </TableHead>
        </Table>
      </TableContainer>
    </div>
  );
}
