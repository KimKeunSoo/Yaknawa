import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import setTitle from '../services/set-title';
import '../style/css/style.css';
import Realtimeprice from '../component/Body/Realtime_price';


const Pharmacy = (props) => {
    const name = props.match.params.name;
    const address = props.match.params.address;

    setTitle(`${name}`);

    const createData = (name, quantity, eachPrice, price, id, uploadDate) => {
        return { name, quantity, eachPrice, price, id, uploadDate };
    }

    const createReview = (id, content, uploadDate) => {
        return { id, content, uploadDate };
    }

    const rows = [
        createData("프로페시아", "84정", "15만원", "15만원", "loginID", "2021.01.23"),
        createData("프로페시아", "84정", "15만원", "15만원", "loginID", "2021.01.23"),
        createData("프로페시아", "84정", "15만원", "15만원", "loginID", "2021.01.23"),
        createData("프로페시아", "84정", "15만원", "15만원", "loginID", "2021.01.23"),
        createData("프로페시아", "84정", "15만원", "15만원", "loginID", "2021.01.23"),
        createData("프로페시아", "84정", "15만원", "15만원", "loginID", "2021.01.23"),
        createData("프로페시아", "84정", "15만원", "15만원", "loginID", "2021.01.23"),
    ];
    const [page, setPage] = useState(
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
    );
    const list = [];
    const [theme, setTheme] = useState(true);
    const clickPrice = () => {
        setTheme(true);
        setPage(
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
        );
    }
    const reviewRow = [
        createReview("ID", "리뷰내용~~~~~~", "2021.03.09"),
        createReview("ID", "리뷰내용~~~~~~", "2021.03.09"),
        createReview("ID", "리뷰내용~~~~~~", "2021.03.09"),
        createReview("ID", "리뷰내용~~~~~~", "2021.03.09"),
        createReview("ID", "리뷰내용~~~~~~", "2021.03.09"),
        createReview("ID", "리뷰내용~~~~~~", "2021.03.09"),
        createReview("ID", "리뷰내용~~~~~~", "2021.03.09"),
        createReview("ID", "리뷰내용~~~~~~", "2021.03.09"),
        createReview("ID", "리뷰내용~~~~~~", "2021.03.09"),
    ]
    const clickReview = () => {
        setTheme(false);

        setPage(
            <TableContainer >
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">아이디</TableCell>
                            <TableCell align="center">내용</TableCell>
                            <TableCell align="center">등록일</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {reviewRow.map((row) => (
                            <TableRow key={row.no}>
                                <TableCell align="center">{row.id}</TableCell>
                                <TableCell align="center">{row.content}</TableCell>
                                <TableCell align="center">{row.uploadDate}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }
    //const address = "서울특별시 마포구";

    return (

        <div className="body">
            <div className="left-space-lg right-space-lg padding-bottom-sm ">
                <Grid container>
                    <Grid item lg={1}></Grid>
                    <Grid item lg={2}>
                        <strong className="text-xl">{name}</strong>
                        <p className="set-gray">{address}</p>
                    </Grid>
                    <Grid item lg={1}>
                        <p>약국 리뷰 작성</p>
                    </Grid>
                </Grid>
            </div>
            <div className="top-space-lg ">
                <Grid container className="left-space-lg right-space-lg bottom-space-sm underline">
                    <Grid item lg={2} className={theme ? "position-center underline-impact " : "position-center "}>
                        <div className="btn-noborder-transparent text-lg link-cursor-pointer" onClick={clickPrice}>약 가격</div>
                    </Grid>
                    <Grid item lg={2} className={theme ? "position-center" : "position-center underline-impact"}>
                        <div className="btn-noborder-transparent text-lg link-cursor-pointer" onClick={clickReview}>리뷰</div>
                    </Grid>
                    <Grid item lg={4}></Grid>
                    <Grid item lg={2}>
                        <div className="text-sm position-center"><strong>해당 약국 약사님이신가요?</strong></div>
                        <br />
                        <Button className="share-btn size-full set-white position-center" variant="primary">contact page</Button>
                    </Grid>
                </Grid>

                <div className="left-space-lg right-space-lg">
                    <Grid container spacing={7}>
                        <Grid item lg={8}>
                            {page}
                        </Grid>
                        <Grid item lg={4}>
                            <Realtimeprice />
                        </Grid>
                    </Grid>

                </div>
            </div>
        </div>


    );
}

export default Pharmacy;