var mangSo = [];
var message;
function getNumber(){
    var nhapSoNguyen = Number(domID("nhapSoNguyen").value);
    mangSo.push(nhapSoNguyen);
    domID('ketQua').innerHTML = mangSo;
}


