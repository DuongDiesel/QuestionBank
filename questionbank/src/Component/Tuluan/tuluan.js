import React, { Component } from 'react';
//import {connect} from 'react-redux'

class Tuluan extends Component {

    constructor(props){
        super(props);
        this.state = {
            ques:"",
            answ:"",
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

    addData = (ques,answ,lever) => {
        var item = {}; //khai bao 1 doi tuong rong
        item.ques = ques;
        item.answ = answ;
        item.lever = lever;
        //gui item len tren app
        this.props.getData(item);

        //this.props.addDataStore(); //su dung reducer trong store,thuc thi (dispatch) ADD_DATA
    }

    render() {
        return (
            
               <form className="container p-3 my-3 bg-primary text-white">
                    <div>
                        <h1>Câu tự luận</h1>
                        <textarea onChange={(event) => this.isChange(event)} id="ques" name="ques" placeholder="Nhập câu hỏi vào đây ..." defaultValue={""} />
                        <textarea onChange={(event) => this.isChange(event)} id="answ" name="answ" placeholder="Nhập đáp án vào đây ..." defaultValue={""} />
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
                        <button type="reset" className="btn btn-dark" onClick={ () => this.addData(this.state.ques,this.state.answ,this.state.lever)}>Reset</button>				
                    </div>
                </form>
            
        );
    }
}
//dung thuoc tinh(state) nao trong store thi dung ham nay
// const mapStateToProps = (state, ownProps) => {
//     return {
//         testthoi: state.testConnect
//     }
// }
//trong nay se nhan dc :this.props.testthoi

//dung ham nao trong store thi dung ham nay
// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         addDataStore: () => {
//             dispatch({type:"ADD_DATA"})
//         }
//     }
// }
//trong nay se nhan duoc this.props.addDataStore

//export default connect(mapStateToProps, mapDispatchToProps)(Tuluan);
export default Tuluan;