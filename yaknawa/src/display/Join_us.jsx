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

const JoinUs = (props) => {
    const form = useRef();
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [passcheck, setPasscheck] = useState("");
    const [birthday, setBirthday] = useState("");
    const [gender, setGender] = useState("");
    const [type, setType] = useState("");
    const [nickname, setNickname] = useState("");
    const [email, setEmail] = useState("");

    const [issame, setIssame] = useState(true);
    const [issameform, setIssameform] = useState(true);
    const [isid, setIsid] = useState(true);
    const [ispassword, setIspassword] = useState(true);
    const [isnickname, setIsnickname] = useState(true);
    const [isemail, setIsemail] = useState(true);

    const onChangeId = (e) => {
        const id = e.target.value;
        setId(id);
        if(!isid){
            setIsid(true);
        }

    };
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
    }
    const onChangeBirthday = (e) => {
        const birthday = e.target.value;
        const dateform = /\d{4}\/\d{2}\/\d{2}/;
        setBirthday(birthday);
        if (!birthday) {
            setIssameform(true);
        }
        else if (dateform.test(birthday)) {
            setIssameform(true);
        } else {
            setIssameform(false);
        }
    }
    const onChangeGender = (e) => {
        const gender = e.target.value;
        setGender(gender);
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
    const checkId = (e) => {
        e.preventDefault();
        alert("아이디 중복검사");
    }
    const checkNickname = (e) => {
        e.preventDefault();
        alert("닉네임 중복검사");
    }

    const submit = (e) => {
        e.preventDefault();
        setIsid(id ? true : false);
        setIspassword(password ? true : false);
        setIsnickname(nickname ? true : false);
        setIsemail(email ? true : false);
    }
    return (
        <div>
           <Header/>
            <div className="body">
                <div className="position-center text-lg"><strong>회원가입</strong></div>
                <div className="position-right text-sm padding-right-lg">필수사항<sup>*</sup></div>
                <div className="upperline share-body left-space-lg right-space-lg">
                    <div className="form-body">
                        <Form ref={form}>
                            <Grid container>
                                <Grid item lg={2}></Grid>
                                <Grid item lg={8}>
                                    <div className="form-control">
                                        <label className="size-big size-quarter position-left form-label">아이디<sup>*</sup></label>
                                        <Button variant="contained" color="default" className="position-right" onClick={checkId}>
                                            중복확인
                                        </Button>
                                        <TextField
                                            error={isid ? false : true}
                                            helperText={isid ? "" : "아이디가 입력되지 않았습니다."}
                                            placeholder="아이디를 입력해주세요"
                                            className="size-full"
                                            name="id"
                                            value={id}
                                            onChange={onChangeId}
                                            validations={require}
                                            autoFocus
                                        />
                                    </div>
                                    <div className="form-control">
                                        <label className="size-big size-quarter position-left form-label">비밀번호<sup>*</sup></label>
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
                                        <label className="size-big size-quarter position-left form-label">비밀번호 확인<sup>*</sup></label>
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
                                        <label className="size-big size-quarter position-left form-label">생년월일</label>
                                        <TextField
                                            error={issameform ? false : true}
                                            helperText={issameform ? "" : "양식이 일치하지 않습니다."}
                                            placeholder="yyyy/mm/dd"
                                            type="text"
                                            className="size-full"
                                            name="birthday"
                                            value={birthday}
                                            onChange={onChangeBirthday}
                                        />
                                    </div>
                                    <div className="form-control">
                                        <label className="size-big size-quarter position-left form-label">성별</label>
                                        <RadioGroup row aria-label="gender" name="gender" className="size-full" value={gender} onChange={onChangeGender}>
                                            <FormControlLabel
                                                className="radio-item-form"
                                                value="male"
                                                control={<Radio color="primary" />}
                                                label="남자"
                                                labelPlacement="남자"
                                            />
                                            <FormControlLabel
                                                className="radio-item-form"
                                                value="female"
                                                control={<Radio color="primary" />}
                                                label="여자"
                                                labelPlacement="여자"
                                            />
                                            <FormControlLabel
                                                className="radio-item-form"
                                                value="other"
                                                control={<Radio color="primary" />}
                                                label="선택안함"
                                                labelPlacement="선택안함"
                                            />
                                        </RadioGroup>
                                    </div>
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
                                        <label className="size-big size-quarter position-left form-label">닉네임<sup>*</sup></label>
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
                            <div className="full-size position-center">
                                본인은 <strong>만 14세 이상</strong>이며 <Link className="link-black">이용약관</Link>,<Link className="link-black">개인정보 수집 및 이용</Link>,
                                    <Link className="link-black">개인정보 제공</Link> 내용을 확인 하였으며 <strong>동의합니다.</strong>
                            </div>
                            <br /><br />
                            <div className="position-center">
                                <Button variant="contained" color="primary" className="position-center" onClick={submit}>
                                    회원가입
                                </Button>
                            </div>
                        </Form>
                    </div>

                </div>
            </div>

            <Footer />
        </div>

    );
}

export default JoinUs;