import React, { useState, useRef } from "react";
import Header from '../component/Header/Header';
import Footer from '../component/Footer/Footer';
import Form from "react-validation/build/form";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import { Link } from 'react-router-dom';
import '../style/css/style.css';

const Modify = (props) => {
    const form = useRef();
    const [nickname, setNickname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passcheck, setPasscheck] = useState("");
    const [type, setType] = useState("");

    const [issame, setIssame] = useState(true);
    const [ispassword, setIspassword] = useState(true);
    const [isnickname, setIsnickname] = useState(true);
    const [isemail, setIsemail] = useState(true);

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
        if (!ispassword) {
            setIspassword(true);
        }
    };
    const onChangePasscheck = (e) => {
        const passcheck = e.target.value;
        setPasscheck(passcheck);
        if (password != passcheck) {
            setIssame(false);
        } else {
            setIssame(true);
        }
    };
    const onChangeType = (e) => {
        const type = e.target.value;
        setType(type);

    };
    const onChangeNickname = (e) => {
        const nickname = e.target.value;
        setNickname(nickname);
        if (!isnickname) {
            setIsnickname(true);
        }
    };
    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
        if (!isemail) {
            setIsemail(true);
        }

    };

    const checkNickname = (e) => {
        e.preventDefault();
        alert("닉네임 중복검사");
    }


    return (
        <div>
            <Header />
            <div className="body">
                <div className="position-center text-lg"><strong>정보 수정</strong></div>

                <div className="upperline share-body left-space-lg right-space-lg">
                    <Form ref={form}>
                    <Grid container>
                        <Grid item lg={2}></Grid>
                        <Grid item lg={8}>
                            <div className="form-control">
                                <label className="size-big size-quarter position-left form-label">관심 의약품</label>
                                <NativeSelect
                                    name="selecttype"
                                    className="size-full" value={type} onChange={onChangeType}>
                                    <option value=""></option>
                                    <option value={10}>Ten</option>
                                    <option value={20}>Twenty</option>
                                    <option value={30}>Thirty</option>
                                </NativeSelect>
                            </div>
                            <div className="form-control">
                                <label className="size-big size-quarter position-left form-label">닉네임</label>
                                <Button variant="contained" color="default" className="position-right" onClick={checkNickname}>
                                    중복확인
                                        </Button>
                                <TextField
                                    error={isnickname ? false : true}
                                    helperText={isnickname ? "" : "닉네임이 입력되지 않았습니다."}
                                    placeholder="닉네임을 입력해주세요"
                                    type="text"
                                    className="size-full"
                                    name="nickname"
                                    value={nickname}
                                    onChange={onChangeNickname}
                                />
                            </div>
                            <div className="form-control">
                                        <label className="size-big size-quarter position-left form-label">비밀번호</label>
                                        <TextField
                                            error={ispassword ? false : true}
                                            helperText={ispassword ? "" : "비밀번호가 입력되지 않았습니다."}
                                            type="password"
                                            className="size-full"
                                            placeholder="비밀번호를 입력해주세요"
                                            name="password"
                                            value={password}
                                            onChange={onChangePassword}
                                        />
                                    </div>
                                    <div className="form-control">
                                        <label className="size-big size-quarter position-left form-label">비밀번호 확인</label>
                                        <TextField
                                            error={issame ? false : true}
                                            helperText={issame ? "" : "비밀번호가 일치하지 않습니다"}
                                            placeholder="비밀번호를 한번 더 입력해주세요"
                                            type="password"
                                            className="size-full"
                                            name="passcheck"
                                            value={passcheck}
                                            onChange={onChangePasscheck}
                                        />
                                    </div>
                                    <div className="form-control">
                                        <label className="size-big size-quarter position-left form-label">이메일<sup>*</sup></label>
                                        <TextField
                                            error={isemail ? false : true}
                                            helperText={isemail ? "" : "이메일이 입력되지 않았습니다."}
                                            placeholder="이메일을 입력해주세요"
                                            type="text"
                                            className="size-full"
                                            name="email"
                                            value={email}
                                            onChange={onChangeEmail}
                                        />
                                    </div>
                        </Grid>
                        <Grid item lg={2}></Grid>
                    </Grid>
                    <br /><br />
                            <div className="position-center">
                                <Button variant="contained" color="primary" className="position-center size-quarter" >
                                    수정하기
                                </Button>
                            </div>
                    </Form>
                </div>
            </div>

            <Footer />
        </div>

    );
}

export default Modify;