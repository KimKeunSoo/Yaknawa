import React, { useState, useRef } from "react";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
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

  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();

  const onUsernameHandler = (e) => {
    setUsername(e.currentTarget.value);
  };
  const onPasswordHandler = (e) => {
    setPassword(e.currentTarget.value);
  };

  const onLoginHandler = (e) => {
    e.preventDefault();

    setLoading(true);

    dispatch(login(username, password))
      .then(() => {
        props.history.push("/");
        window.location.reload();
      })
      .catch(() => {
        setLoading(false);
      });
  };
  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <Header />
      <div className="body">
        <div className="position-center text-lg">
          <strong>로그인</strong>
        </div>
        <div className="upperline share-body left-space-lg right-space-lg ">
          <form onSubmit={onLoginHandler} className="login-box">
            <Grid container>
              <Grid item lg={4}></Grid>
              <Grid item lg={4}>
                <Input
                  id="margin-none"
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
                  id="margin-none"
                  type="password"
                  className="size-full postion-center"
                  placeholder="PassWord를 입력해주세요"
                  variant="outlined"
                  value={password}
                  onChange={onPasswordHandler}
                />
                <br />
                <br />
                <ButtonGroup
                  variant="text"
                  color="primary"
                  aria-label="text primary button group"
                >
                  <Button>아이디 찾기</Button>
                  <Button>비밀번호 찾기</Button>
                </ButtonGroup>
                <br />
                <br />

                <Button
                  variant="contained"
                  color="primary"
                  className=" position-center size-full"
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

      <Footer />
    </div>
  );
};

export default Login;
