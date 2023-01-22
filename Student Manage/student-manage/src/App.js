import logo from './logo.svg';
import './App.css';
import Control from './components/Control';
import ListStudents from './components/ListStudents';
import Form from './components/Form';
import { Component } from 'react';

class App extends Component {
  // Khởi tạo danh sách sinh viên
  constructor(props) {
    super();
    this.state = {
      students: [
        {
          studentId: "SV001",
          studentName: "Nguyễn Văn A",
          studentAge: "12",
          studentGender: true,
          studentBirthday: "23/4/1998",
          studentBirthPlace: "HN",
          studentAddress: "HN"
        },
        {
          studentId: "SV002",
          studentName: "Nguyễn Văn B",
          studentAge: "10",
          studentGender: true,
          studentBirthday: "10/2/1998",
          studentBirthPlace: "HN",
          studentAddress: "HN"
        },
        {
          studentId: "SV003",
          studentName: "Nguyễn Thị C",
          studentAge: "20",
          studentGender: false,
          studentBirthday: "5/3/2000",
          studentBirthPlace: "HN",
          studentAddress: "HN"
        },
      ],
      searchData: '',
      submitData: ''
    }
  }
  // B1: Tạo function để nhận dữ liệu truyền từ control đến app
  handSearch = (searchData) => {
    console.log(searchData);
    this.setState({
      searchData: searchData,
    })
  }

  handleSubmit = (stInfo) => {
    console.log(stInfo);
  }

  render() {
    // Lọc dữ liệu theo search data
    let students = [];
    if (this.state.searchData == '') {
      students = [...this.state.students];
    } else {
      this.state.students.forEach(st => {
        if (st.studentName.toLocaleLowerCase().includes(this.state.searchData.toLocaleLowerCase())) {
          students.push(st)
          console.log("abc");
        }
      })
    }
    return (
      <div className="App">
        <div className="row">
          <div className="col-lg-7 grid-margin stretch-card">
            <div className="card">
              {/* START CONTROL */}
              {/* B2: Truyền props map với hàm nhận dữ liệu */}
              <Control handleSearchProps={this.handSearch} />
              {/* END CONTROL */}
              {/* START LIST STUDENT */}
              <ListStudents students={students} />
              {/* END LIST STUDENT */}
            </div>
          </div>
          <div className="col-5 grid-margin">
            {/* START FORM SINH VIEN */}
            <Form handleSubmit={this.handleSubmit} />
            {/* END FORM SINH VIÊN */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
