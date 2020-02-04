import React, { Component } from 'react'

export default class AddUser extends Component {
    render() {
        return (
            <div className="col-3">
  <div className="card text-left">
    <div className="card border-primary mb-3">
      <div className="card-header">Thêm mới/Sửa</div>
      <div className="card-body text-primary">                              
        <div className="form-group">
          <label htmlFor>Tên User</label>                                
          <input type="text" className="form-control" name id aria-describedby="helpId" placeholder="Nhập tên User" />
        </div>
        <div className="form-group">
          <label htmlFor>Mật khẩu</label>                                
          <input type="text" className="form-control" name id aria-describedby="helpId" placeholder="Nhập tên User" />
        </div>
        <div className="form-group">
          <label htmlFor>Ghi chú</label>                                
          <input type="text" className="form-control" name id aria-describedby="helpId" placeholder="Nhập tên User" />
        </div>
        <div className="form-group">
          <label htmlFor>Môn</label>                                
          <select name="inputMon" id="inputMon" className="custom-select">
            <option selected value="null">Chọn môn</option>
            <option value={1}>Tiếng Việt</option>
            <option value={2}>Toán</option>
            <option value={3}>Tiếng Anh</option>
            <option value={4}>Khoa học</option>
            <option value={5}>Lịch sử và địa lí</option>
            <option value={6}>Tin học</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor>Lớp</label>                                
          <select className="custom-select" name="inputClass" id="inputClass">
            <option selected>Chọn lớp</option>
            <option value={1}>Lớp 1</option>
            <option value={2}>Lớp 2</option>
            <option value={3}>Lớp 3</option>
            <option value={4}>Lớp 4</option>
            <option value={5}>Lớp 5</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor>Kì</label>                                
          <select className="custom-select" name="inputSem" id="inputSem">
            <option selected>Chọn kì</option>
            <option value={1}>Kì 1</option>
            <option value={2}>Kì 2</option>                                
          </select>
        </div>
        <div className="form-group">
          <label htmlFor>Số câu trắc nghiệm</label>                                
          <select className="custom-select" name="inputSem" id="inputSem">
            <option selected>Chọn số lượng trắc nghiệm</option>
            <option value={1}>1 Câu</option>
            <option value={2}>2 Câu</option>
            <option value={3}>3 Câu</option>
            <option value={4}>4 Câu</option>
            <option value={5}>5 Câu</option>
            <option value={6}>6 Câu</option>
            <option value={7}>7 Câu</option>
            <option value={8}>8 Câu</option>
            <option value={9}>9 Câu</option>
            <option value={10}>10 Câu</option>                                
          </select>
        </div>
        <div className="form-group">
          <label htmlFor>Số câu tự luận</label>                                
          <select className="custom-select" name="inputSem" id="inputSem">
            <option selected>Chọn số lượng tự luận</option>
            <option value={1}>1 Câu</option>
            <option value={2}>2 Câu</option>
            <option value={3}>3 Câu</option>
            <option value={4}>4 Câu</option>
            <option value={5}>5 Câu</option>
            <option value={6}>6 Câu</option>
            <option value={7}>7 Câu</option>
            <option value={8}>8 Câu</option>
            <option value={9}>9 Câu</option>
            <option value={10}>10 Câu</option>                                
          </select>
        </div>
        <div className="form-group">
          <button className="btn btn-block btn-primary">Xác nhận</button>
        </div>
      </div>
    </div>
  </div>
</div>

        )
    }
}
