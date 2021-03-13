import React, { useState, useEffect } from "react";
import setTitle from '../services/set-title';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TableHead from '@material-ui/core/TableHead';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import '../style/css/style.css';



const MPay = (props) => {
    setTitle("병원별 진료비");
    const [region, setRegion] = useState("");
    const [regionCode, setRegioncode] = useState("");
    const [main, setMain] = useState("");
    const [sub, setSub] = useState("");
    const [second, setSecond] = useState(false);
    const [third, setThird] = useState(false);
    const district = [
        "110001/강남구", "110002/강동구", "110003/강서구", "110004/관악구", "110005/구로구",
        "110006/도봉구", "110007/동대문구", "110008/동작구", "110009/마포구", "110010/서대문구",
        "110011/성동구", "110012/성북구", "110013/영등포구", "110014/용산구", "110015/은평구",
        "110016/종로구", "110017/중구", "110018/송파구", "110019/중랑구", "110020/양천구",
        "110020/양천구", "110021/서초구", "110022/노원구", "110023/광진구", "110024/강북구",
        "110025/금천구"
    ];
    const onChangeRegion = (e) => {
        const regionCode = e.target.value.split('/');
        //console.log(regionCode)
        setRegion(e.target.value);
        setRegioncode(regionCode[0]);
        // console.log(e.target.value.split('/')[1]);
        if (e.target.value) {
            setSecond(true);
        } else {
            setSecond(false);
        }
    }
    const onChangeSecond = (e) => {
        setMain(e.target.value);
        if (e.target.value) {
            setThird(true);
        } else {
            setThird(false);
        }

    }
    const onChangeThird = (e) => {
        setSub(e.target.value);
    }
    const createData = (yadmNm, clCdNm, minPrc, maxPrc, adtFrDd, adtEndDd) => {
        const frd = new String(adtFrDd);
        const end = new String(adtEndDd);
        return {
            yadmNm, clCdNm, minPrc, maxPrc, adtFrDd: `${frd.substring(0, 4)}.${frd.substring(4, 6)}.${frd.substring(6, 8)}`, adtEndDd: `${end.substring(0, 4)}.${end.substring(4, 6)}.${end.substring(6, 8)}`
        };
    }


    const [resultPage, setResultPage] = useState(<div className="default-page"><p className="position-center text-xl">검색을 해주세요</p></div>);


    const click_search = (e) => {
        e.preventDefault();
        var rows = [];

        if (sub) {
            axios.get(`http://localhost:4000/select/${regionCode}/${main}/${sub}`).then((response) => {
                var data = response.data;
                if (data) {
                    data.sort(function (a, b) {
                        return a.minPrc - b.minPrc;
                    });
                    data.map((item) => {
                        rows.push(
                            createData(item.yadmNm, item.clCdNm, item.minPrc, item.maxPrc, item.adtFrDd, item.adtEndDd)
                        );
                    })
                    setResultPage(
                        <div className="left-space-xs right-space-xs">
                            <Grid container className="underline padding-bottom-sm">
                                <Grid item lg={3}><div className="set-green text-lg padding-left-lg"><strong>{region.split('/')[1]}</strong></div></Grid>
                                <Grid item lg={8}></Grid>
                                <Grid item lg={1} className="text-sm padding-top-sm"></Grid>
                            </Grid>
                            <TableContainer >
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="center">병원명</TableCell>
                                            <TableCell align="center">병원분류</TableCell>
                                            <TableCell align="center">최소가격(원)</TableCell>
                                            <TableCell align="center">최대가격(원)</TableCell>
                                            <TableCell align="center">개시일</TableCell>
                                            <TableCell align="center">종료일</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row) => (
                                            <TableRow>
                                                <TableCell align="center">{row.yadmNm}</TableCell>
                                                <TableCell align="center">{row.clCdNm}</TableCell>
                                                <TableCell align="center">{row.minPrc}</TableCell>
                                                <TableCell align="center">{row.maxPrc}</TableCell>
                                                <TableCell align="center">{row.adtFrDd}</TableCell>
                                                <TableCell align="center">{row.adtEndDd}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>);
                } else {
                    setResultPage(
                        <div className="default-page"><p className="position-center text-xl">검색결과가 없습니다</p></div>
                    );
                }

            });

        } else {
            alert("모든 항목을 선택해주세요");
        }

    }



    return (

        <div className="body">
            <div className="text-lg padding-left-lg"><strong>병원별 진료비</strong></div>
            <Grid container spacing={2} className="padding-left-lg padding-right-lg top-space-lg padding-top-lg">
                <Grid item lg={2}>
                    <FormControl variant="outlined" className="size-full">
                        <InputLabel >지역(구)</InputLabel>
                        <Select
                            native
                            value={region}
                            onChange={onChangeRegion}
                        >
                            <option aria-label="None" value="" />
                            {district.map((row) => (
                                <option value={row}>{row.split("/")[1]}</option>
                            ))}

                        </Select>
                    </FormControl>
                </Grid>
                <Grid item lg={4}>
                    <FormControl variant="outlined" className="size-full">
                        <InputLabel>대분류</InputLabel>
                        <Select
                            native
                            value={main}
                            onChange={onChangeSecond}
                            disabled={second ? false : true}
                        >
                            <option aria-label="None" value="" />
                            <option value={"내시경, 천자 및 생검료 "}>내시경, 천자 및 생검료</option>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item lg={5}>
                    <FormControl variant="outlined" className="size-full">
                        <InputLabel >소분류</InputLabel>
                        <Select
                            native
                            disabled
                            value={sub}
                            disabled={third ? false : true}
                            onChange={onChangeThird}
                        >
                            <option aria-label="None" value="" />
                            <option value={"약물유도 수면상기도 내시경검사"}>약물유도 수면상기도 내시경검사</option>

                        </Select>
                    </FormControl>
                </Grid>
                <Grid item lg={1}>
                    <Button className="btn-noborder-transparent" onClick={click_search}> <FontAwesomeIcon icon={faSearch} size="3x" className="set-gray position-center" /></Button>
                </Grid>
            </Grid>
            <div className="upperline share-body left-space-sm right-space-sm">
                {resultPage}
            </div>
        </div>

    );
}

export default MPay;