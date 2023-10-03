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
//PROGRESS: 
//B1: Tạo nút timSoDuongNhoNhat thông qua id.
var timSoDuongNhoNhat = domID('timSoDuongNhoNhat').onclick = function(){
    //B2: Cho biến nhapSoNguyen = mangSo[0]. 
    nhapSoNguyen = mangSo[0];
    //B3: Tạo vòng lặp for.
    for(index = 0; index< mangSo.length; index++){
        //B4: Nếu mangSo[index] > 0, thì nhapSoNguyen = mangSo[index]. 
        if(mangSo[index] > 0){
            if(mangSo[index] < nhapSoNguyen){
                nhapSoNguyen = mangSo[index];
            }
        }
    }
    //B4: Gán kết quả nhapSoNguyen cho biến message.
    message = ` <h4> Số dương nhỏ nhất: ${nhapSoNguyen}</h4>`;
    //OUTPUT: dom tới id ketQua4 và xuất ra màn hình biến message.
    domID('ketQua4').innerHTML = message;
}
//Câu 5:
//PROGRESS: 
//B1: Tạo nút timSoChanCuoiCung thông qua id.
var timSoChanCuoiCung = domID('timSoChanCuoiCung').onclick = function(){
    //B2: Tạo biến SoChanCuoiCung = 0. 
    var SoChanCuoiCung = 0;
    for(index = 0; index< mangSo.length; index++){ 
       //B3: Nếu mangSo[index] chia hết cho 2 dư 0, thì SoChanCuoiCung = mangSo[index].
       if(mangSo[index] %2 == 0 ){
        SoChanCuoiCung = mangSo[index];
       }
       //B4: Ngược lại nếu mangSo[index] tới vị trí thứ 8 (có thể thêm vị trí tiếp theo nếu muốn chuỗi số lẻ tiếp tục in ra -1) không chia hết cho 2 thì in ra -1.
       else if(mangSo[0] % 2 != 0 && mangSo[1] % 2 != 0 && mangSo[2] % 2 != 0 && mangSo[3] % 2 != 0 && mangSo[4] % 2 != 0 && mangSo[5] % 2 != 0 && mangSo[6] % 2 != 0 && mangSo[7] % 2 != 0
       && mangSo[8] % 2 != 0){
        SoChanCuoiCung = -1;
       }
    }
    //B4: Gán kết quả nhapSoNguyen cho biến message.
    message = ` <h4> Số chẵn cuối cùng: ${SoChanCuoiCung}</h4>`;
    //OUTPUT: dom tới id ketQua5 và xuất ra màn hình biến message.
    domID('ketQua5').innerHTML = message;
}
//Câu 6:
//PROGRESS: 
//B1: Tạo hàm đổi chỗ swap(index0, index1)  
function swap(index0, index1){
    //B2: tạo 1 biến tạm, cho biến tạm gán bằng mangSo[index0], mangSo[index0] = mangSo[index1], mangSo[index1] = bienTam.
    var bienTam = mangSo[index0];
    mangSo[index0] = mangSo[index1];
    mangSo[index1] = bienTam;
}
//B3: tạo nút doiCho2GiaTri thông qua id.
var doiCho2GiaTri = domID('doiCho2GiaTri').onclick = function(){
    //B4: Liên kết đến hàm swap bên trên, index[0] = domID('viTri1').value, index[1] = domID('viTri2').value. 
    swap(domID('viTri1').value, domID('viTri2').value);
    //B5: Gán kết quả nhapSoNguyen cho biến message.
    message = `<h4 >Mảng sau khi đổi chỗ: </h4> ${mangSo}`;
    //OUTPUT: dom tới id ketQua6 và xuất ra màn hình biến message.
    domID('ketQua6').innerHTML = message;
}
//Câu 7:
//PROGRESS: 
//B1: Tạo nút sapXepTangDan thông qua id.
var sapXepTangDan = domID('sapXepTangDan').onclick = function(){
    //B2: Tạo vòng lặp for, có index < mangSo.length.
    for(index =0; index < mangSo.length; index++){
        //B3: Tạo vòng lặp for, mangSo.length -1, ví dụ chiều dài mảng là 4, có vị trí từ 0 đến 3, vị trí 0 so với vị trí 1 thì vẫn trong vị trí 0 -> 3, vị trí 3 so với vị trí 4, vị trí 4 không có, dẫn đến lỗi.
       for(jdex = 0; jdex < mangSo.length -1; jdex++){
        //B4: Nếu đúng jdex < mangSo.length -1 thì nếu mangSo[jdex] > mangSo[jdex +1] và đổi chỗ 2 vị trí.  
        mangSo[jdex] > mangSo[jdex +1] && swap(jdex, jdex +1);
       }    
    }
    //B5: Gán kết quả mangSo cho biến message.
    message = ` <h4>Mảng sau khi tăng dần : ${mangSo}</h4>`;
    //OUTPUT: dom tới id ketQua7 và xuất ra màn hình biến message.
    domID('ketQua7').innerHTML = message;
}
//Câu 8:
//Số nguyên tố là những số >=2, suy ra ĐIỀU KIỆN 1 ngược lại là số nguyên tố < 2 thì ko được 
//Số nguyên tố chỉ chia hết cho 1 và chính nó, cho nên ĐIỀU KIỆN 2 là số nguyên tố chia hết cho 2 dư 0 cũng không được.
//1 không phải là số nguyên tố.
//PROGRESS: 
//B1: Tạo hàm kiểm tra số nguyên và gán tham số là nhapSoNguyen.
function kiemTraSoNguyenTo(nhapSoNguyen){
    //B2: Nếu nhapSoNguyen <2, thì trả về false.
    if(nhapSoNguyen < 2){
        return false; //trả về không là số nguyên tố
    }
    //B3: Tạo vòng lặp for, cho jdex = 2; nếu jdex <= Math.sqrt(nhapSoNguyen), thì thực hiện vòng lặp.
    for(var jdex = 2; jdex <= Math.sqrt(nhapSoNguyen); jdex++){
        //Nếu nhapSoNguyen chia hết cho jdex dư 0, thì trả false.
        if(nhapSoNguyen % jdex == 0){
            return false; //trả về không là số nguyên tố
        }
    }
    //B4: Ngược lại điều kiện trên là trả về đúng.
    return true; //trả về là số nguyên tố, quan trọng cái return sẽ trả về cái gì
}
//B5: Tạo nút timSoNguyenDau thông qua id.
var timSoNguyenDau = domID('timSoNguyenDau').onclick = function(){
    // để nhapSoNguyen = -1, để khi không có số nào là số nguyên tố thì trả về -1.
    //B6: Tạo vòng lặp for, nếu jdex < mangSo.length, thì thực hiện vòng lặp.
    for( var nhapSoNguyen = -1, jdex =0; jdex < mangSo.length; jdex++){
        //Thì trở lên kiểm tra hàm kiemTraSoNguyenTo có mangSo[jdex] = nhapSoNguyen. 
       if(kiemTraSoNguyenTo(mangSo[jdex])){
        nhapSoNguyen = mangSo[jdex];
        break; //Khi tìm thấy số nguyên tố thì dừng lại
       }
    }
    //B7: Gán kết quả nhapSoNguyen cho biến message.
    message = ` <h4>Mảng sau khi nhập số nguyên tố : ${nhapSoNguyen}</h4>`;
    //OUTPUT: dom tới id ketQua8 và xuất ra màn hình biến message.
    domID('ketQua8').innerHTML = message;
    //Nếu nhapSoNguyen bằng giá trị và bằng kiểu -1 thì không có số nguyên tố.
    if(nhapSoNguyen === -1){
        ketQua8.innerHTML = `<h4> Không có số nguyên tố </h4>`;
    }  
}
//Câu 9:
//PROGRESS: 
//B1: Tạo mảng mangSoNguyen = [].
mangSoNguyen = [];
//B2: Tạo hàm getInteger(). 
function getInteger(){
    //Tạo biến nhapSoNguyen9 và dom tới id nhapSoNguyen9.
    var nhapSoNguyen9 = domID('nhapSoNguyen9').value*1;
    //mangSoNguyen sẽ thêm biến nhapSoNguyen9 vào chính nó. 
    mangSoNguyen.push(nhapSoNguyen9);
    //dom tới id themSoNguyen và xuất ra màn hình bằng mangSoNguyen  
    domID('themSoNguyen').innerHTML = mangSoNguyen;
}
//B3: Tạo nút timSoNguyen thông qua id.
var timSoNguyen = domID('timSoNguyen').onclick = function(){
    //Tạo biến nhapSoNguyen9 = 0.
    var nhapSoNguyen9 = 0;
    //Tạo vòng lặp for, nếu index < mangSoNguyen.length, thì thực hiện vòng lặp. 
    for(index =0; index < mangSoNguyen.length; index++){ 
        //Hàm kiểm tra số nguyên và đúng là số nguyên thì tăng thêm 1;
        Number.isInteger(mangSoNguyen[index]) && nhapSoNguyen9++; //nhapSoNguyen9 trở thành biến đếm
    }
    //B4: Gán kết quả nhapSoNguyen9 cho biến message.
    message = `<h4> Đếm số nguyên: ${nhapSoNguyen9} </h4>`;
    //OUTPUT: dom tới id ketQua9 và xuất ra màn hình biến message.
    domID('ketQua9').innerHTML = message; 
}
//Câu 10:
//PROGRESS: 
//B1: Tạo nút soSanhSDSA thông qua id.
var soSanhSDSA = domID('soSanhSDSA').onclick = function(){ 
    //Đếm trước mới biết số lượng
    // var count = 1;
    //B2: Tạo vòng lặp for, nếu index < mangSo.length thì thực hiện vòng lặp.
    for(var demSoDuong = 0, demSoAm = 0, index =0; index < mangSo.length; index++){
       //Nếu mangSo[index] > 0 thì demSoDuong tăng lên 1. 
       if(mangSo[index] > 0){
        demSoDuong++;
       } else if(mangSo[index] < 0){
        demSoAm++;
       }
    }

    //B3: Đem số lượng đã đếm đi so sánh. Nếu demSoDuong > demSoAm thì tạo biến message ra kết quả.
    if(demSoDuong > demSoAm){
        message = `Số lượng số dương ${demSoDuong} > Số lượng số âm ${demSoAm} `;
    }
    //Ngược lại nếu demSoDuong < demSoAm thì tạo biến message ra kết quả.
    else if(demSoAm > demSoDuong){
        message = `Số lượng số âm ${demSoAm} > Số lượng số dương ${demSoDuong} `;
    } 
    //Nếu demSoDuong = demSoAm thì tạo biến message ra kết quả.
    else{
        message = `Số lượng số âm ${demSoAm} = Số lượng số dương ${demSoDuong} `;
    }
    //Tạo ra để đếm số trước
    // message = `<h4> Đếm số dương: ${demSoDuong} </h4> <h4> Đếm số âm: ${demSoAm} </h4> `;
    //OUTPUT: dom tới id ketQua10 và xuất ra màn hình biến message.
    domID('ketQua10').innerHTML = message; 
}
function domID(id){
    return document.getElementById(id);
}
