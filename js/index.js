//Giữa var message và tinhTongSoDuong, các bài còn lại được liên kết với nhau qua mangSo
//Câu 1:
//PROGRESS: 
//B1: Tạo nút tinhTongSoDuong thông id.
var tinhTongSoDuong = domID('tinhTongSoDuong').onclick = function(){
    //B2: Tạo biến tongSoDuong = 0.
    var tongSoDuong = 0;
    //B3: Tạo vòng lặp for, nếu mangSo[index] > 0,thì tongSoDuong += mangSo[index].
    for(index = 0; index <mangSo.length; index++){
        if(mangSo[index] > 0){
            tongSoDuong += mangSo[index];
        }
    }
    //B4: Gán kết quả tongSoDuong cho biến message.
    message = `<h4> Tổng số dương: ${tongSoDuong}</h4>`;
    //OUTPUT: dom tới id ketQua1 và xuất ra màn hình biến message.
    domID('ketQua1').innerHTML = message;
}
//Câu 2:
//PROGRESS: 
//B1: Tạo nút tinhDemSoDuong thông qua id.
var tinhDemSoDuong = domID('tinhDemSoDuong').onclick = function(){
    //B2: Tạo vòng lặp for, tạo biến demSoDuong = 0. 
    for(var demSoDuong = 0, index = 0; index< mangSo.length; index++){
        //B3: Nếu mangSo[index] > 0, thì tăng biến demSoDuong lên 1. 
        if(mangSo[index] > 0){
            demSoDuong++;
        }
    }
    //B4: Gán kết quả demSoDuong cho biến message.
    message = ` <h4> Đếm số dương: ${demSoDuong}</h4>`;
    //OUTPUT: dom tới id ketQua2 và xuất ra màn hình biến message.
    domID('ketQua2').innerHTML = message;
}
//Câu 3:
//PROGRESS: 
//B1: Tạo nút timSoNhoNhat thông qua id.
var timSoNhoNhat = domID('timSoNhoNhat').onclick = function(){
    //B2: Cho biến nhapSoNguyen = mangSo[0]. 
    nhapSoNguyen = mangSo[0];
    //B3: Tạo vòng lặp for.
    for(index = 0; index< mangSo.length; index++){
        //B4: Nếu mangSo[index] < nhapSoNguyen, thì nhapSoNguyen = mangSo[index]. 
        if(mangSo[index] < nhapSoNguyen){
            nhapSoNguyen = mangSo[index];
        }
    }
    //B4: Gán kết quả nhapSoNguyen cho biến message.
    message = ` <h4> Số nhỏ nhất: ${nhapSoNguyen}</h4>`;
    //OUTPUT: dom tới id ketQua3 và xuất ra màn hình biến message.
    domID('ketQua3').innerHTML = message;
}
//Câu 4:
//PROGRESS: Tạo 
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
//PROGRESS: Tạo 
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
//PROGRESS: Tạo 
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
//PROGRESS: Tạo 
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
//PROGRESS: Tạo 
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
//PROGRESS: Tạo 
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
//Câu 10:
//PROGRESS: Tạo 
var soSanhSDSA = domID('soSanhSDSA').onclick = function(){ 
    //Đếm trước mới biết số lượng
    // var count = 1;
    for(var demSoDuong = 0, demSoAm = 0, index =0; index < mangSo.length; index++){
       if(mangSo[index] > 0){
        demSoDuong++;
       } else if(mangSo[index] < 0){
        demSoAm++;
       }
    }
    //Đem số lượng đã đếm đi so sánh
    if(demSoDuong > demSoAm){
        message = `Số lượng số dương ${demSoDuong} > Số lượng số âm ${demSoAm} `;
    }
    else if(demSoAm > demSoDuong){
        message = `Số lượng số âm ${demSoAm} > Số lượng số dương ${demSoDuong} `;
    } else{
        message = `Số lượng số âm ${demSoAm} = Số lượng số dương ${demSoDuong} `;
    }
    //Tạo ra để đếm số trước
    // message = `<h4> Đếm số dương: ${demSoDuong} </h4> <h4> Đếm số âm: ${demSoAm} </h4> `;
    domID('ketQua10').innerHTML = message; 
}
function domID(id){
    return document.getElementById(id);
}
