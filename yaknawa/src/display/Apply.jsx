import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import setTitle from '../services/set-title';
import { Link } from 'react-router-dom';
import '../style/css/style.css';

const Apply = (props) => {
    setTitle("신청하기");
    const form = useRef();
    const [type, setType] = useState("");
    const [applyContent, setApplycontent] = useState("");
    const onChangeType = (e) => {
        setType(e.target.value);
    }

    const onChangeApplycontent = (e) => {
        setApplycontent(e.target.value);
    }

    return (

        <div className="body">
            <div className="position-center text-lg"><strong>의약품 신청</strong></div>
            <div className="upperline share-body left-space-lg right-space-lg">
                <div className="form-body">
                    <Form ref={form}>
                        <Grid container>
                            <Grid item lg={2}></Grid>
                            <Grid item lg={8}>
                                <div className="form-control">
                                    <label className="size-big size-quarter position-left form-label">의약품 이름</label>
                                    <TextField
                                        placeholder="의약품 이름을 입력해주세요"
                                        className="size-full"
                                        name="type"
                                        value={type}
                                        onChange={onChangeType}
                                        autoFocus
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="size-big position-left form-label">신청내용</label>
                                    <textarea placeholder="지역명, 약국 이름 등등" maxLength="300"
                                        className="textarea-resizenone size-full textarea-size-md position-right textarea-onfocus"
                                        value={applyContent}
                                        onChange={onChangeApplycontent}></textarea>
                                </div>

                            </Grid>
                            <Grid item lg={2}></Grid>
                        </Grid>
                        <br /><br />

                        <br /><br />
                        <div className="position-center">
                            <Button variant="contained" color="primary" className="share-btn s set-white position-center " >
                                신청하기
                                </Button>
                        </div>
                    </Form>
                </div>

            </div>
        </div>


    );
}

export default Apply;