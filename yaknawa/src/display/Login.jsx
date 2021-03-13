import React, { useState, useRef } from "react";
import { Redirect } from "react-router-dom";
import { Grid, Button, ButtonGroup, Input } from "@material-ui/core";
import setTitle from "../services/set-title";
import { login } from "../_actions/auth";
import { useDispatch, useSelector } from "react-redux";
import "../style/css/style.css";

const Login = (props) => {
    setTitle("로그인");

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [isid, setIsid] = useState(true);
    const [isPw, setIspw] = useState(true);
    const { isLoggedIn } = useSelector((state) => state.auth);
    const { message } = useSelector((state) => state.message);

    const findId = () => {
        alert("아이디찾기");
    }
    const findPw = () => {
        alert("비밀번호 찾기");
    }
    const dispatch = useDispatch();

    const onUsernameHandler = (e) => {
        setUsername(e.currentTarget.value);
        setIsid(true);
    };
    const onPasswordHandler = (e) => {
        setPassword(e.currentTarget.value);
        setIspw(true);
    };

    const onLoginHandler = (e) => {
        e.preventDefault();

        setLoading(true);

        dispatch(login(username, password))
            .then((msg) => {//서버에서 로그인 결과 메세지 받아옴
                switch (msg) {
                    case "errId": //아이디 오류
                        setIsid(false);
                        break;
                    case "errPw": //비밀번호 오류
                        setIspw(false);
                        break;
                    case "correct":
                        props.history.push("/");
                        window.location.reload();
                        break;
                }

            })
            .catch(() => {
                setLoading(false);
            });
    };
    if (isLoggedIn) {
        return <Redirect to="/" />;
    }




    return (
        <div className="body">
            <div className="padding-top-lg position-center text-lg">
                <strong>로그인</strong>
            </div>
            <div className="share-body left-space-lg right-space-lg ">
                <form onSubmit={onLoginHandler} className="login-box">
                    <Grid container>
                        <Grid item lg={4}></Grid>
                        <Grid item lg={4}>
                            <Input
                                error={isid ? false : true}
                                helperText={isid ? "" : "아이디가 올바르지 않습니다"}
                                type="username"
                                className="size-full postion-center"
                                placeholder="ID를 입력해주세요"
                                variant="outlined"
                                value={username}
                                onChange={onUsernameHandler}
                                autoFocus
                            />
                            <br />
                            <br />
                            <Input
                                error={isPw ? false : true}
                                helperText={isPw ? "" : "비밀번호가 올바르지 않습니다"}
                                type="password"
                                className="size-full postion-center"
                                placeholder="PassWord를 입력해주세요"
                                variant="outlined"
                                value={password}
                                onChange={onPasswordHandler}
                            />
                            <Grid container className="top-space-lg bottom-space-lg">
                                <Grid item lg={5} sm={0}></Grid>
                                <Grid item lg={3} sm={6} className="text-sm set-gray positon-center link-cursor-pointer position-center" onClick={findId}>
                                    아이디 찾기
                                </Grid>
                                <Grid item lg={4} sm={6} className="text-sm set-gray positon-center link-cursor-pointer position-center" onClick={findPw}>
                                    비밀번호 찾기
                                </Grid>
                            </Grid>


                            <Button
                                variant="contained"
                                color="primary"
                                className=" position-center size-full share-btn set-white"
                                type="submit"
                            >
                                로그인
                </Button>
                        </Grid>
                        <Grid item lg={4}></Grid>
                    </Grid>
                </form>
            </div>
        </div>


    );
};

export default Login;