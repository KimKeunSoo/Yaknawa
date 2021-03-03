import React, { useState, useRef } from "react";
import Header from '../component/Header/Header';
import Footer from '../component/Footer/Footer';
import Form from "react-validation/build/form";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import NativeSelect from '@material-ui/core/NativeSelect';
import '../style/css/style.css';

const Share = (props) => {
    const form = useRef();
    const pharmacyRef = useRef();
    const [pharmacy, setPharmacy] = useState("");
    const [pill, setPill] = useState("");
    const [address, setAddress] = useState("");
    const [type, setType] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");
    const [review, setReview] = useState("");

    const [ispharmacy,setIsPharmacy] = useState(true);
    const [isaddress,setIsAddress] = useState(true);
    const [ispill,setIsPill] = useState(true);
    const [isprice,setIsPrice] = useState(true);
    const [isquantity,setIsQuantity] = useState(true);

    const onChangePharmacy = (e) => {
        const pharmacy = e.target.value;
        setPharmacy(pharmacy);
        if(!ispharmacy){
            setIsPharmacy(true);
        }     
    };
    const onChangeAddress = (e) => {
        const address = e.target.value;
        setAddress(address);
        if(!isaddress){
            setIsAddress(true);
        }   
    };
    const onChangeType = (e) => {
        const type = e.target.value;
        setType(type);
    };
    const onChangePill = (e) => {
        const pill = e.target.value;
        setPill(pill);        
        if(!ispill){
            setIsPill(true);
        }  
    };
    const onChangeQuantity = (e) => {
        const quantity = e.target.value;
        setQuantity(quantity);
        if(!isquantity){
            setIsQuantity(true);
        }  
    };
    const onChangePrice = (e) => {
        const price = e.target.value;
        setPrice(price);
        if(!isprice){
            setIsPrice(true);
        }  
    };
    const onChangeReview = (e) => {
        const review = e.target.value;
        setReview(review);
    };
    const onClickSubmit = (e) =>{
        e.preventDefault();
        setIsPharmacy(pharmacy?true:false);
        setIsAddress(address?true:false);
        setIsPill(pill?true:false);
        setIsPrice(price?true:false);
        setIsQuantity(quantity?true:false);
    }
    return (
        <div>
            <Header />
            <div className="body">
                <div className="position-center text-lg"><strong>약값 공유</strong></div>
                <div className="position-right text-sm padding-right-lg">필수사항<sup>*</sup></div>
                <div className="upperline share-body left-space-lg right-space-lg">
                    <div className="form-body">
                        <Form ref={form}>
                            <Grid container>
                                <Grid item lg={2}></Grid>
                                <Grid item lg={8}>
                                    <div className="form-control">
                                        <label className="size-big position-left form-label">약국이름<sup>*</sup></label>
                                        <TextField
                                            error={ispharmacy?false:true}
                                            helperText={ispharmacy?"":"약국이름이 입력되지 않았습니다"}
                                            placeholder="약국이름을 입력해주세요"
                                            className="size-full"
                                            name="pharmacy"
                                            value={pharmacy}
                                            onChange={onChangePharmacy}
                                            ref = {pharmacyRef}
                                            validations={require}
                                            autoFocus
                                        />

                                    </div>
                                    <div className="form-control">
                                        <label className="size-big position-left form-label">주소<sup>*</sup></label>
                                        <TextField
                                            error={isaddress?false:true}
                                            helperText={isaddress?"":"주소가 입력되지 않았습니다"}
                                            className="size-full"
                                            name="address"
                                            value={address}
                                            onChange={onChangeAddress}
                                        />
                                        <br/>
                                        <br/>
                                        <br/>
                                        <NativeSelect                                            
                                            name="selectAddress"                                           
                                            inputProps={{ 'aria-label': 'age' }}
                                            className="size-full">
                                            <option value=""></option>
                                            <option value={10}>Ten</option>
                                            <option value={20}>Twenty</option>
                                            <option value={30}>Thirty</option>
                                        </NativeSelect>
                                    </div>
                                    <div className="form-control">
                                        <label className="size-big position-left form-label">약종류</label>
                                        <TextField
                                            
                                            className="size-full"
                                            name="type"
                                            value={type}
                                            placeholder="약종류를 입력해주세요"
                                            onChange={onChangeType}
                                        />
                                    </div>
                                    <div className="form-control">
                                        <label className="size-big position-left form-label">약이름<sup>*</sup></label>
                                        <TextField
                                            error={ispill?false:true}
                                            helperText={ispill?"":"약이름이 입력되지 않았습니다"}
                                            className="size-full"
                                            name="pill"
                                            value={pill}
                                            placeholder="약이름을 입력해주세요"
                                            onChange={onChangePill}
                                        />
                                    </div>
                                    <div className="form-control">
                                        <label className="size-big position-left form-label">수량(정)<sup>*</sup></label>
                                        <TextField
                                            error={isquantity?false:true}
                                            helperText={isquantity?"":"수량이 입력되지 않았습니다"}
                                            className="size-full"
                                            name="quantity"
                                            value={quantity}
                                            placeholder="수량을 입력해주세요"
                                            onChange={onChangeQuantity}
                                        />
                                    </div>
                                    <div className="form-control">
                                        <label className="size-big position-left form-label">가격<sup>*</sup></label>
                                        <TextField
                                            error={isprice?false:true}
                                            helperText={isprice?"":"가격이 입력되지 않았습니다"}
                                            className="size-full"
                                            name="price"
                                            value={price}
                                            placeholder="가격을 입력해주세요"
                                            onChange={onChangePrice}
                                        />
                                    </div>
                                    <div className="form-control">
                                        <label className="size-big position-left form-label">영수증</label>
                                        <TextField                                            
                                            type="file"
                                            className="size-full"
                                            name="recipt"
                                        />
                                    </div>
                                    <div className="form-control">
                                        <label className="size-big position-left form-label">약국리뷰</label>
                                        <textarea placeholder="200자 이내로 기입해주세요" maxLength="200"
                                            className="textarea-resizenone size-full textarea-size-md position-right textarea-onfocus"
                                            onChange={onChangeReview}></textarea>
                                    </div>
                                </Grid>
                                <Grid item lg={2}></Grid>
                            </Grid>
                            <br /><br />
                            <div className="position-center">
                                <Button variant="contained" color="primary" className="share-btn right-space-lg" size="lg" onClick={onClickSubmit}>
                                    등록하기
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

export default Share;