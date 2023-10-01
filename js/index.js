
//Giữa var message và tinhTongSoDuong, các bài còn lại được liên kết với nhau qua mangSo
//Câu 1:
var tinhTongSoDuong = domID('tinhTongSoDuong').onclick = function(){
    var tongSoDuong = 0;
    for(index = 0; index <mangSo.length; index++){
        if(mangSo[index] > 0){
            tongSoDuong += mangSo[index];
        }
    }
    message = `<h4> Tổng số dương: ${tongSoDuong}</h4>`;
    domID('ketQua1').innerHTML = message;
}
//Câu 2:
var tinhDemSoDuong = domID('tinhDemSoDuong').onclick = function(){
    var demSoDuong = 0;
    var count = 1;
    for(index = 0; index< mangSo.length; index++){
        if(mangSo[index] > 0){
            demSoDuong = count++;
        }
    }
    message = ` <h4> Đếm số dương: ${demSoDuong}</h4>`;
    domID('ketQua2').innerHTML = message;
}
//Câu 3:
var timSoNhoNhat = domID('timSoNhoNhat').onclick = function(){
    nhapSoNguyen = mangSo[0];
    for(index = 0; index< mangSo.length; index++){
        if(mangSo[index] < nhapSoNguyen){
            nhapSoNguyen = mangSo[index];
        }
    }
    message = ` <h4> Số nhỏ nhất: ${nhapSoNguyen}</h4>`;
    domID('ketQua3').innerHTML = message;
}
//Câu 4:
var timSoDuongNhoNhat = domID('timSoDuongNhoNhat').onclick = function(){
    nhapSoNguyen = mangSo[0];
    for(index = 0; index< mangSo.length; index++){
        if(mangSo[index] > 0){
            if(mangSo[index] < nhapSoNguyen){
                nhapSoNguyen = mangSo[index];
            }
        }
    }
    message = ` <h4> Số dương nhỏ nhất: ${nhapSoNguyen}</h4>`;
    domID('ketQua4').innerHTML = message;
}
//Câu 5:
var timSoChanCuoiCung = domID('timSoChanCuoiCung').onclick = function(){
    var SoChanCuoiCung = 0;
    for(index = 0; index< mangSo.length; index++){ 
       if(mangSo[index] %2 == 0 ){
        SoChanCuoiCung = mangSo[index];
       }
       else if(mangSo[0] % 2 != 0 && mangSo[1] % 2 != 0 && mangSo[2] % 2 != 0 && mangSo[3] % 2 != 0 && mangSo[4] % 2 != 0 && mangSo[5] % 2 != 0 && mangSo[6] % 2 != 0 && mangSo[7] % 2 != 0
       && mangSo[8] % 2 != 0){
        SoChanCuoiCung = -1;
       }
    }
    message = ` <h4> Số chẵn cuối cùng: ${SoChanCuoiCung}</h4>`;
    domID('ketQua5').innerHTML = message;
}
//Câu 6:
function swap(index0, index1){
    var bienTam = mangSo[index0];
    mangSo[index0] = mangSo[index1];
    mangSo[index1] = bienTam;
}
var doiCho2GiaTri = domID('doiCho2GiaTri').onclick = function(){
    swap(domID('viTri1').value, domID('viTri2').value);
    message = `<h4 >Mảng sau khi đổi chỗ: </h4> ${mangSo}`;
    domID('ketQua6').innerHTML = message;
}
//Câu 7:
var sapXepTangDan = domID('sapXepTangDan').onclick = function(){
    for(index =0; index < mangSo.length; index++){
       for(jdex = 0; jdex < mangSo.length -1; jdex++){
        //mangSo.length -1 vì vị trí 0 so với vị trí 1 thì không nói, vị trí 3 so với vị trí 4, vị trí 4 không có, dẫn đến lỗi.
        mangSo[jdex] > mangSo[jdex +1] && swap(jdex, jdex +1);
       }    
    }
    message = ` <h4>Mảng sau khi tăng dần : ${mangSo}</h4>`;
    domID('ketQua7').innerHTML = message;
}
//Câu 8:
//Số nguyên tố là những số >=2, suy ra ĐIỀU KIỆN 1 ngược lại là số nguyên tố < 2 thì ko được 
//Số nguyên tố chỉ chia hết cho 1 và chính nó, cho nên ĐIỀU KIỆN 2 là số nguyên tố chia hết cho 2 dư 0 cũng không được.
//1 không phải là số nguyên tố.
function kiemTraSoNguyenTo(nhapSoNguyen){
    if(nhapSoNguyen < 2){
        return false; //trả về không là số nguyên tố
    }
    for(var jdex = 2; jdex <= Math.sqrt(nhapSoNguyen); jdex++){
        if(nhapSoNguyen % jdex == 0){
            return false; //trả về không là số nguyên tố
        }
    }
    return true; //trả về là số nguyên tố, quan trọng cái return sẽ trả về cái gì
}
var timSoNguyenDau = domID('timSoNguyenDau').onclick = function(){
    // nhapSoNguyen = mangSo[jdex]; 
    // để nhapSoNguyen = -1, để khi không có số nào là số nguyên tố thì trả về -1 
    for( var nhapSoNguyen = -1, jdex =0; jdex < mangSo.length; jdex++){
       if(kiemTraSoNguyenTo(mangSo[jdex])){
        nhapSoNguyen = mangSo[jdex];
        break; //Khi tìm thấy số nguyên tố thì dừng lại
       }
    }   
    message = ` <h4>Mảng sau khi nhập số nguyên tố : ${nhapSoNguyen}</h4>`;
    domID('ketQua8').innerHTML = message;
    if(nhapSoNguyen === -1){
        ketQua8.innerHTML = `<h4> Không có số nguyên tố </h4>`;
    }  
}
//Câu 9:
mangSoNguyen = [];
function getInteger(){
    var nhapSoNguyen9 = domID('nhapSoNguyen9').value*1;
    mangSoNguyen.push(nhapSoNguyen9);
    domID('themSoNguyen').innerHTML = mangSoNguyen;
}
var timSoNguyen = domID('timSoNguyen').onclick = function(){
    var nhapSoNguyen9 = 0;
    for(index =0; index < mangSoNguyen.length; index++){ //nhapSoNguyen9 nên để trong for, chỉ for sử dụng được nó, tránh để bên ngoài gây lỗi
        Number.isInteger(mangSoNguyen[index]) && nhapSoNguyen9++; //nhapSoNguyen9 trở thành biến đếm
    }
    message = `<h4> Đếm số nguyên: ${nhapSoNguyen9} </h4>`;
    domID('ketQua9').innerHTML = message; 
}
function domID(id){
    return document.getElementById(id);
}
