import React, { useState, useRef } from "react";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
import { Redirect } from "react-router-dom";
import { Grid, Button, ButtonGroup } from "@material-ui/core";
import setTitle from "../services/set-title";
import { login } from "../_actions/auth";
import { useDispatch, useSelector } from "react-redux";
import "../style/css/style.css";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        공백으로 둘 수 없습니다.
      </div>
    );
  }
};

const Login = (props) => {
  setTitle("로그인");
  const form = useRef();
  const checkBtn = useRef();

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

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(login(username, password))
        .then(() => {
          props.history.push("/profile");
          window.location.reload();
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };
  if (isLoggedIn) {
    return <Redirect to="/profile" />;
  }

  return (
    <div>
      <Header />
      <div className="body">
        <div className="padding-top-lg position-center text-lg">
          <strong>로그인</strong>
        </div>
        <div className="share-body left-space-lg right-space-lg ">
          <Form onSubmit={onLoginHandler} className="login-box" ref={form}>
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
                  validations={[required]}
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
                  validations={[required]}
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
                <div className="form-group">
                  <Button
                    variant="contained"
                    color="primary"
                    className="position-center size-full"
                    type="submit"
                    disabled={loading}
                  >
                    {loading && (
                      <span className="spinner-border spinner-border-sm"></span>
                    )}
                    <span>로그인</span>
                  </Button>
                </div>
                <br />
                {message && (
                  <div className="form-group">
                    <div className="position-center size-full" role="alert">
                      {message}
                    </div>
                  </div>
                )}
                <CheckButton style={{ display: "none" }} ref={checkBtn} />
              </Grid>
              <Grid item lg={4}></Grid>
            </Grid>
          </Form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
