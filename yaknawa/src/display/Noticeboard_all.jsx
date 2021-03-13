import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import setTitle from '../services/set-title';
import '../style/css/style.css';

const Noticeall = (props) => {
    setTitle("공지사항");
    const createData = (no, content, nickname, date) => {
        return { no, content, nickname, date };
    }

    const rows = [
        createData(1, 159, 6.0, 24),
        createData(2, 237, 9.0, 3),
        createData(3, 262, 16.0, 24),
        createData(4, 305, 3.7, 67),
        createData(5, 356, 16.0, 49),
        createData(6, 356, 16.0, 49),
        createData(7, 356, 16.0, 49),
        createData(8, 356, 16.0, 49),
        createData(9, 356, 16.0, 49),
    ];

    return (

        <div className="body">
            <div className="position-center text-lg"><strong>공지사항</strong></div>
            <div className="upperline share-body left-space-lg right-space-lg">
                <TableContainer >
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">순번</TableCell>
                                <TableCell align="center">내용</TableCell>
                                <TableCell align="center">글쓴이</TableCell>
                                <TableCell align="center">등록일</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.no}>
                                    <TableCell align="center">{row.no}</TableCell>
                                    <TableCell align="center">{row.content}</TableCell>
                                    <TableCell align="center">{row.nickname}</TableCell>
                                    <TableCell align="center">{row.date}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>


    );
}

export default Noticeall;