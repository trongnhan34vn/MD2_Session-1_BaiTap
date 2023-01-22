import React, { Component } from 'react'

export default class Form extends Component {

    handleSubmitForm = (e) => {
        e.preventDefault();
        let studentId = document.getElementById('studentId').value;
        let studentName = document.getElementById('studentName').value;
        let studentAge = document.getElementById('studentAge').value;
        let studentGender = document.getElementById('studentGender').value;
        let studentBirthday = document.getElementById('studentBirth').value;
        let studentBirthPlace = document.getElementById('studentBirthPlace').value;
        let studentAddress = document.getElementById('studentAddress').value;
        let stInfo = {
            studentId: studentId,
            studentName: studentName,
            studentAge: studentAge,
            studentGender: studentGender,
            studentBirthday: studentBirthday,
            studentBirthPlace: studentBirthPlace,
            studentAddress: studentAddress,
        }
        this.props.handleSubmit(stInfo)
    }
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title">Thông tin sinh viên</h3>
                        <form className="form-sample">
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Mã sinh viên</label>
                                <div className="col-sm-9">
                                    <input id="studentId" type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Tên sinh viên</label>
                                <div className="col-sm-9">
                                    <input id="studentName" type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Tuổi</label>
                                <div className="col-sm-9">
                                    <input id="studentAge" type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Giới tính</label>
                                <div className="col-sm-9">
                                    <select id="studentGender" className="form-control">
                                        <option value={"Nam"}>Nam</option>
                                        <option value={"Nữ"}>Nữ</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Ngày sinh</label>
                                <div className="col-sm-9">
                                    <input id="studentBirth" className="form-control" placeholder="dd/mm/yyyy" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Nơi sinh</label>
                                <div className="col-sm-9">
                                    <select id="studentBirthPlace" className="form-control">
                                        <option value={"Hà Nội"}>Hà Nội</option>
                                        <option value={"TP. Hồ Chí Minh"}>TP. Hồ Chí Minh</option>
                                        <option value={"Đà Nẵng"}>Đà Nẵng</option>
                                        <option value={"Quảng Ninh"}>Quảng Ninh</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Địa chỉ</label>
                                <div className="col-sm-9">
                                    <textarea id="studentAddress" className="form-control" defaultValue={""} />
                                </div>
                            </div>
                            <button onClick={this.handleSubmitForm} type="submit" className="btn btn-primary me-2">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
