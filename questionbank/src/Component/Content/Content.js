import React, { Component } from 'react';

export class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trangthai:0
        }
        
    }

    
    componentWillMount() {
        //trc khi render companenet
    }
    componentDidMount() {
        //sau khi render
    }
    shouldComponentUpdate(nextProps, nextState) {
        //duoc goi khi ma co 1 ham nao do thay doi state hoac props
        //dung de kiem tra xem cap nhat co thanh cong hay ko
        //tra ve 2 gia tri la true va false
        //neu la false thi dung lai luon
        //neu la true thi chay componentWillUpdate->render->componentDidUpdate
        //tra ve dung retunr true;
    }
    componentWillUpdate(nextProps, nextState) {
        
    }
    componentDidUpdate(prevProps, prevState) {
        
    }
    
    
    

    thongbao = () => { alert("cach xu li tuong tac");}
    thongbao2 = (x) => { alert(x);}

    renderButton = () => {
        return(
        <div className="row">
            <div class="btn btn-group">
                <div className="btn btn-info" onClick={() => this.editClick()}>Edit</div>
                <div className="btn btn-warning" onClick={()=> this.thongbao2("haha")}>Clear</div>
                <div className="btn btn-warning" onClick={this.thongbao2.bind(this,"hahahaha")}>Clear</div>
            </div>                        
        </div>
        )
    }

    renderForm = () => (
        <div className="row">
            <div className="form-group">
                <input ref={(dulieunhap) => {this.trunggian = dulieunhap}} defaultValue={this.props.tieude} type="text" name="ten" className="form-control"/>                
            </div>
            <div className="form-group">                
                <div className="btn btn-block btn-danger" onClick={() => this.saveClick()}>Save</div>
            </div>
        </div>
        )
    

    displayCheck = () => {
        if(this.state.trangthai == 0){
            return this.renderButton();
        }else{
            return this.renderForm();
        }
    }
    editClick = () =>{
        this.setState({trangthai:1});
    }
    saveClick = () =>{
        this.setState({trangthai:0});
    }

    render() {
        return (
            <section>
            <div className="container">
              <div className="row align-items-center">
                <div className={"col-lg-6 " + this.props.vitri1}>
                  <div className="p-5">
                    <img className="img-fluid rounded-circle" src={this.props.image} alt="" />
                  </div>
                </div>
                <div className="col-lg-6 ">
                  <div className="p-5">
                    <h2 className="display-4"> {this.props.tieude} </h2>
                    <p> {this.props.noidung}</p>           
                    {this.displayCheck()}
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
    }
}

export default Content;
