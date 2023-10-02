var mangSo = []; //Tạo mảng số
var message; //Tạo biến message
//Hàm lấy số
function getNumber(){
    //Nhập vào 1 số nguyên 
    var nhapSoNguyen = Number(domID("nhapSoNguyen").value);
    //Thêm nhapSoNguyen vào mảng số
    mangSo.push(nhapSoNguyen);
    //dom tới id ketQua, xuất ra màn hình bằng mangSo
    domID('ketQua').innerHTML = mangSo;
}


