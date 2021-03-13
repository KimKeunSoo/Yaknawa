import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import setTitle from '../services/set-title';
import '../style/css/style.css';

const PharmacyResult = (props) => {

    const name = props.match.params.name;
    setTitle(`${name} 검색결과`);


    const createData = (name, quantity, eachPrice, price, id, uploadDate) => {
        return { name, quantity, eachPrice, price, id, uploadDate };
    }

    const rows = [
        createData("프로페시아", "84정", "15만원", "15만원", "loginID", "2021.01.23"),
        createData("프로페시아", "84정", "15만원", "15만원", "loginID", "2021.01.23"),
        createData("프로페시아", "84정", "15만원", "15만원", "loginID", "2021.01.23"),
        createData("프로페시아", "84정", "15만원", "15만원", "loginID", "2021.01.23"),
        createData("프로페시아", "84정", "15만원", "15만원", "loginID", "2021.01.23"),
    ];

    const list = [];
    const address = "서울특별시 마포구";
    for (let i = 0; i < 2; i++) {
        list.push(
            <div className="top-space-lg ">
                <Grid container className="left-space-lg bottom-space-sm">
                    <Grid item lg={1} className="text-lg">
                        <strong>{name}</strong>
                    </Grid>
                    <Grid item lg={2}>
                        <small className="set-gray text-sm">{address}</small>
                    </Grid>
                    <Grid item lg={7}></Grid>
                    <Grid item lg={2}>
                        <Link className="link-black link-nonunderline"><small className="text-sm">+더보기</small></Link>
                    </Grid>
                </Grid>

                <div className="upperline left-space-lg right-space-lg">
                    <TableContainer >
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">약 이름</TableCell>
                                    <TableCell align="center">용량</TableCell>
                                    <TableCell align="center">정당 가격</TableCell>
                                    <TableCell align="center">가격</TableCell>
                                    <TableCell align="center">아이디</TableCell>
                                    <TableCell align="center">등록일</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row.no}>
                                        <TableCell align="center">{row.name}</TableCell>
                                        <TableCell align="center">{row.quantity}</TableCell>
                                        <TableCell align="center">{row.eachPrice}</TableCell>
                                        <TableCell align="center">{row.price}</TableCell>
                                        <TableCell align="center">{row.id}</TableCell>
                                        <TableCell align="center">{row.uploadDate}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                </div>
            </div>
        );
    }
    return (

        <div className="body">
            <div className="left-space-lg padding-bottom-sm underline"><strong className="text-lg">"{name}"</strong>&nbsp;검색결과</div>
            {list}
        </div>


    );
}

export default PharmacyResult;