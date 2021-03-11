import React, { useState,useRef } from "react";
import Header from '../component/Header/Header';
import Footer from '../component/Footer/Footer';
import Grid from '@material-ui/core/Grid';
import Form from "react-validation/build/form";
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import setTitle from '../services/set-title';
import '../style/css/style.css';


const Askbc = (props) => {
    setTitle("문의하기");
    const form = useRef();
    const [company, setCompany] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [content, setContent] = useState("");

    const onChangeCompany = (e) => {
        const company = e.target.value;
        setCompany(company);
    }
    const onChangeName = (e) => {
        const name = e.target.value;
        setName(name);
    }
    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    }
    const onChangeContent = (e) => {
        const content = e.target.value;
        setContent(content);
    }
    const submit = (e) => {
        e.preventDefault();
        alert(company + name + email + content);
    }
    return (
        <div>
            <Header/>
            <div className="body">
                <div className="position-center text-lg"><strong>문의하기</strong></div>
                <div className="upperline share-body left-space-lg right-space-lg">
                <Form ref={form}>                           
                    <Grid container>
                        <Grid item lg={4}></Grid>
                        <Grid item lg={4}>
                            <div className="form-control">
                                <label className="size-big position-left form-label">회사명</label>
                                <TextField
                                    type="text"
                                    className="size-full"
                                    name="company"
                                    value={company}
                                    onChange={onChangeCompany}
                                />
                            </div>
                            <div className="form-control">
                                <label className="size-big position-left form-label">성함</label>
                                <TextField
                                    type="text"
                                    className="size-full"
                                    name="recipt"
                                    value={name}
                                    onChange={onChangeName}
                                />
                            </div>
                            <div className="form-control">
                                <label className="size-big position-left form-label">메일주소</label>
                                <TextField
                                    type="text"
                                    className="size-full"
                                    name="recipt"
                                    value={email}
                                    onChange={onChangeEmail}
                                />
                            </div>
                            <div className="form-control">
                                <label className="size-big position-left form-label">문의내용</label>
                                <textarea maxLength="500"
                                    className="textarea-resizenone size-full textarea-size-lg position-right textarea-onfocus"
                                    value={content}
                                    onChange={onChangeContent}
                                ></textarea>
                            </div>

                        </Grid>
                        <Grid item lg={4}></Grid>
                    </Grid>
                    <br /><br />
                    <div className="position-center">
                        <Button variant="contained" color="primary" className="share-btn set-white position-center size-quarter" onClick={submit}>
                            전송하기
                                </Button>
                    </div>
                    </Form>
                </div>
                
            </div>

            <Footer />
        </div>

    );
}

export default Askbc;