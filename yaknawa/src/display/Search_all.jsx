import React, { useState } from "react";
import { Link } from 'react-router-dom';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import setTitle from '../services/set-title';
import '../style/css/style.css';

const SearchResult = (props) => {
    setTitle("전체 의약품");
    const item = props.match.params.item;
    const [region, setRegion] = useState("");
    const [sub, setSub] = useState("");
    const [type, setType] = useState("");
    const [sort, setSort] = useState("");
    const [second, setSecond] = useState(false);
    const [third, setThird] = useState(false);

    const onChangeRegion = (e) => {
        setRegion(e.target.value);
        setSecond(true);
    }
    const onChangeSecond = (e) => {
        setSub(e.target.value);
        setThird(true);
    }
    const onChangeThird = (e) => {
        setType(e.target.value);

    }
    const onChangeSort = (e) => {
        setSort(e.target.value);

    }

    const createData = (pharmacy, pill, name, quantity, eachPrice, price, id, uploadDate) => {
        return { pharmacy, pill, name, quantity, eachPrice, price, id, uploadDate };
    }

    const rows = [
        createData("BJ약국", "탈모약", "프로페시아", "84정", "15만원", "15만원", "loginID", "2021.01.23"),
        createData("BJ약국", "탈모약", "프로페시아", "84정", "15만원", "15만원", "loginID", "2021.01.23"),
        createData("BJ약국", "탈모약", "프로페시아", "84정", "15만원", "15만원", "loginID", "2021.01.23"),
        createData("BJ약국", "탈모약", "프로페시아", "84정", "15만원", "15만원", "loginID", "2021.01.23"),
        createData("BJ약국", "탈모약", "프로페시아", "84정", "15만원", "15만원", "loginID", "2021.01.23"),
        createData("BJ약국", "탈모약", "프로페시아", "84정", "15만원", "15만원", "loginID", "2021.01.23"),
    ];

    return (

        <div className="body">
            <div className="left-space-lg"><strong className="text-lg">전체의약품</strong></div>
            <div className="left-space-lg right-space-lg top-space-lg bottom-space-sm">
                <Grid container spacing={2}>
                    <Grid item lg={2}>
                        <FormControl variant="outlined" className="size-full">
                            <InputLabel >지역(시)</InputLabel>
                            <Select
                                native

                                value={region}
                                onChange={onChangeRegion}
                            >
                                <option aria-label="None" value="" />
                                <option value="서울특별시">서울특별시</option>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item lg={2}>
                        <FormControl variant="outlined" className="size-full">
                            <InputLabel>지역(구)</InputLabel>
                            <Select
                                native

                                value={sub}
                                onChange={onChangeSecond}
                                disabled={second ? false : true}
                            >
                                <option aria-label="None" value="" />
                                <option value={10}>Ten</option>
                                <option value={20}>Twenty</option>
                                <option value={30}>Thirty</option>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item lg={2}>
                        <FormControl variant="outlined" className="size-full">
                            <InputLabel >약 종류</InputLabel>
                            <Select
                                native

                                disabled
                                value={type}
                                disabled={third ? false : true}
                                onChange={onChangeThird}
                            >
                                <option aria-label="None" value="" />
                                <option value={10}>Ten</option>
                                <option value={20}>Twenty</option>
                                <option value={30}>Thirty</option>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item lg={4}></Grid>
                    <Grid item lg={2}>
                        <FormControl variant="outlined" className="size-full">
                            <InputLabel >정렬</InputLabel>
                            <Select
                                native
                                label="Age"
                                value={sort}
                                onChange={onChangeSort}
                            >
                                <option aria-label="None" value="" />
                                <option value={10}>최신순</option>
                                <option value={20}>최저가순</option>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>

            </div>
            <div className="upperline left-space-lg right-space-lg">
                <TableContainer >
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">약국</TableCell>
                                <TableCell align="center">약종류</TableCell>
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
                                    <TableCell align="center">{row.pharmacy}</TableCell>
                                    <TableCell align="center">{row.pill}</TableCell>
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

export default SearchResult;