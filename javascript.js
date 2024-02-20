class Student {
  constructor(studentId, fullName, birth, classroomId, GPA) {
    this.studentId = studentId;
    this.fullName = fullName;
    this.birth = birth;
    this.classroomId = classroomId;
    this.GPA = GPA;
  }
}

var Input_Number_of_Students = () => {return parseInt(prompt("Nhập số lượng sinh viên:"))};

var Input_Info_of_Students = () => {
  let studentId = prompt("Nhập mã sinh viên:");
  let fullName = prompt("Nhập họ và tên sinh viên:");
  let birth = prompt("Nhập ngày tháng năm sinh:");
  let classroomId = prompt("Nhập lớp học:");
  let GPA = parseFloat(prompt("Nhập gpa:"));
  return new Student(studentId, fullName, birth, classroomId, GPA);
};

function addStudentToTable(student) {
  const tableBody = document.getElementById('student-table-body');
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${student.studentId}</td>
    <td>${student.fullName}</td>
    <td>${student.birth}</td>
    <td>${student.classroomId}</td>
    <td>${student.GPA}</td>
  `;
  tableBody.appendChild(row);
}

function main() {
  let quantity = Input_Number_of_Students();
  let list = [];
  for(var i = 0 ; i < quantity ; i++) {
    list.push(Input_Info_of_Students());
  }

  for(var i = 0 ; i < quantity ; i++){
    addStudentToTable(list[i]);
  }
}

main();
