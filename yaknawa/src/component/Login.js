import React, { useState, useRef } from "react";
import "./component_css/Join_us.css";
import Header from "./Header_ver2";
import Footer from "./Footer";
import logo from "./component_img/yaknawa-logo2.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../services/auth-service";
import { Link } from "react-router-dom";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        입력해주세요.
      </div>
    );
  }
};

const Login = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.login(username, password).then(
        () => {
          props.history.push("/profile");
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setLoading(false);
          setMessage(resMessage);
        }
      );
    } else {
      setLoading(false);
    }
  };

  return (
    <div className="Login">
      <Header />
      <body className="Login-body">
        <Container fluid>
          <Row>
            <Col lg={2}></Col>
            <Col lg={8}>
              <div className="body-title">
                <strong>로그인</strong>
              </div>
              <Form onSubmit={handleLogin} ref={form}>
                <Container fluid className="body-item">
                  <Row className="login-id">
                    <Col lg={3}></Col>
                    <Col lg={2}>
                      <div className="item-lable login-label">
                        <strong>아이디</strong>
                      </div>
                    </Col>
                    <Col lg={4}>
                      <div>
                        <Input
                          type="text"
                          className="form-control"
                          name="username"
                          value={username}
                          onChange={onChangeUsername}
                          validations={[required]}
                        />
                      </div>
                    </Col>
                    <Col lg={3}></Col>
                  </Row>
                  <Row className="login-pw">
                    <Col lg={3}></Col>
                    <Col lg={2}>
                      <div className="item-lable login-label">
                        <strong>비밀번호</strong>
                      </div>
                    </Col>
                    <Col lg={4}>
                      <div>
                        <Input
                          type="password"
                          className="form-control"
                          name="password"
                          value={password}
                          onChange={onChangePassword}
                          validations={[required]}
                        />
                      </div>
                    </Col>
                    <Col lg={3}></Col>
                  </Row>
                  <br />
                  <Row className="find-info">
                    <Col lg={7}></Col>
                    <Col lg={2}>
                      <div>
                        <Link>아이디 찾기</Link> | <Link>비밀번호찾기</Link>
                      </div>
                    </Col>
                    <Col lg={3}></Col>
                  </Row>
                  <br />
                  <Row className="login-commit">
                    <Col lg={3}></Col>
                    <Col lg={6}>
                      <div>
                        <button
                          className="btn btn-primary btn-block"
                          disabled={loading}
                        >
                          {loading && (
                            <span className="spinner-border spinner-border-sm"></span>
                          )}
                          <span>로그인</span>
                        </button>
                      </div>
                    </Col>
                    <Col lg={3}></Col>
                  </Row>
                  <Row className="login-join_us">
                    <Col lg={3}></Col>
                    <Col lg={6}>
                      <div>
                        <input
                          type="button"
                          className="item-input"
                          value="회원가입"
                        ></input>
                      </div>
                    </Col>
                    <Col lg={3}></Col>
                  </Row>
                </Container>
              </Form>
            </Col>
            <Col lg={2}></Col>
          </Row>
        </Container>
      </body>
      <Footer />
    </div>
  );
};

export default Login;
