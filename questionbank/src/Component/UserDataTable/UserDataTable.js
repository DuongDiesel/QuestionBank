import React, { Component } from 'react'

export default class UserDataTable extends Component {
    render() {
        return (
                        <div className="col-9">
            <table className="table table-striped table-inverse table-responsive">
                <thead className="thead-inverse">
                <tr>
                    <th>STT</th>
                    <th>Tên User</th>
                    <th>Mật khẩu</th>
                    <th>Ghi chú</th>
                    <th>Môn</th>
                    <th>Lớp</th>
                    <th>Kì</th>                                
                    <th>Trắc nghiệm</th>
                    <th>Tự luận</th>
                    <th>Thao tác</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td scope="row">1</td>
                    <td>Nguyễn Hồng Dương</td>
                    <td>291479</td>
                    <td>Người nhập câu hỏi</td>
                    <td>Toán</td>
                    <td>Lớp 1</td>
                    <td>Kì 1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>
                    <div className="btn btn-warning sua"><i className="fa fa-edit" />Sửa</div>
                    <div className="btn btn-danger xoa"><i className="fa fa-edit" />Xóa</div>
                    </td>
                </tr>
                <tr>
                    <td scope="row" />
                    <td />
                    <td />
                </tr>
                </tbody>
            </table>
            </div>


        )
    }
}
