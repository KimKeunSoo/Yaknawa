import React, { useState, useEffect } from "react";
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TableHead from '@material-ui/core/TableHead';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';

const Userlist = () => {

    const creatList = (nickname, email, birthday, gender, blacklist) => {
        return { nickname, email, birthday, gender, blacklist };
    }
    const userList = [
        creatList("닉네임", "이메일", "생년월일", "성별", "블랙리스트여부"),
        creatList("닉네임", "이메일", "생년월일", "성별", "블랙리스트여부"),
        creatList("닉네임", "이메일", "생년월일", "성별", "블랙리스트여부")
    ];


    return (
        <div>
            <TableContainer >
                <Table>
                    <TableHead className="background-set-gray">
                        <TableRow>
                            <TableCell align="center">닉네임</TableCell>
                            <TableCell align="center">이메일</TableCell>
                            <TableCell align="center">생년월일</TableCell>
                            <TableCell align="center">성별</TableCell>
                            <TableCell align="center">블랙리스트</TableCell>
                            <TableCell align="center">수정</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {userList.map((item) => (
                            <TableRow>
                                <TableCell align="center">{item.nickname}</TableCell>
                                <TableCell align="center">{item.email}</TableCell>
                                <TableCell align="center">{item.birthday}</TableCell>
                                <TableCell align="center">{item.gender}</TableCell>
                                <TableCell align="center">{item.blacklist}</TableCell>
                                <TableCell align="center"><Button variant="contained" value={item.nickname}>수정</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    );
}

export default Userlist;