import React, { Component } from 'react'

export default class Tracnghiem extends Component {

    constructor(props){
        super(props);
        this.state = {
            ques:"",
            answ1:"",
            answ2:"",
            answ3:"",
            answ4:"",
            answTrue:"",
            lever:""
        }
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        console.log(name);
        console.log(value);
        this.setState({
            [name]:value
        })
    }

    addData = (ques,answ1,answ2,answ3,answ4,answTrue,lever) => {
        var item = {}; //khai bao 1 doi tuong rong
        item.ques = ques;
        item.answ1 = answ1;
        item.answ2 = answ2;
        item.answ3 = answ3;
        item.answ4 = answ4;
        item.answTrue = answTrue;
        item.lever = lever;
        //gui item len tren app
        this.props.getData(item);

        //this.props.addDataStore(); //su dung reducer trong store,thuc thi (dispatch) ADD_DATA
    }

    render() {
        return (
            <form className="container p-3 my-3 bg-primary text-white">
            <div>
                <h1>Câu trắc nghiệm</h1>
                <textarea onChange={(event) => this.isChange(event)} id="ques" name="ques" placeholder="Nhập câu hỏi vào đây ..." defaultValue={""} />
                <textarea onChange={(event) => this.isChange(event)} id="answ1" name="answ1" placeholder="Nhập lựa chọn 1 vào đây ..." defaultValue={""} />
                <textarea onChange={(event) => this.isChange(event)} id="answ2" name="answ2" placeholder="Nhập lựa chọn 2 vào đây ..." defaultValue={""} />
                <textarea onChange={(event) => this.isChange(event)} id="answ3" name="answ3" placeholder="Nhập lựa chọn 3 vào đây ..." defaultValue={""} />
                <textarea onChange={(event) => this.isChange(event)} id="answ4" name="answ4" placeholder="Nhập lựa chọn 4 vào đây ..." defaultValue={""} />
                <textarea onChange={(event) => this.isChange(event)} id="answTrue" name="answTrue" placeholder="Nhập đáp án vào đây ..." defaultValue={""} />
                <h1>Chọn độ khó</h1>
                <select id="lever" onChange={(event) => this.isChange(event)} name="lever" className="custom-select">
                    <option value={0}>Chọn độ khó:</option>
                    <option value={1}>Mức 1</option>
                    <option value={2}>Mức 2</option>
                    <option value={3}>Mức 3</option>
                    <option value={4}>Mức 4</option>
                    <option value={5}>Mức 5</option>	  
                </select>
                <button type="button" className="btn btn-dark">Click</button>
                <button type="reset" className="btn btn-dark" onClick={ () => this.addData(this.state.ques,this.state.answ1,this.state.answ2,this.state.answ3,this.state.answ4,this.state.answTrue,this.state.lever)}>Reset</button>				
            </div>
        </form>
        )
    }
}
