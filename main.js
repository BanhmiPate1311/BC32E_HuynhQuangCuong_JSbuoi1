/*
    Bài 1: Tính tiền lương nhân viên
    Lương 1 ngày : 100.000
    Công thức: lương 1 ngày * số ngày làm

    - Đầu vào:
        + luong 1 ngày = 100.000
        + số ngày làm: n = 22
    - Xử lý:
        + Tạo biến luong1Ngay gán giá trị là 100000
        + Tạo biến ngay gán giá trị là 22

        + Luong = luong 1 ngày * số ngày làm
    - Đầu ra:
        + luong = ?
*/

    var ngay = 22;
    var luong1Ngay = 100000;

    var luong = luong1Ngay * ngay;
    console.log("Luong nhan vien la: " + luong + " vnd");

/*
    Bài 2: Tính giá trị trung bình của 5 số và xuất ra màn hình
    
    - Đầu vào:
        + Nhập 5 số thực (n1 ... n5)
    - Xử lý:
        + Tạo biến n1 gán giá trị là 1
        + Tạo biến n2 gán giá trị là 2
        + Tạo biến n3 gán giá trị là 3
        + Tạo biến n4 gán giá trị là 4
        + Tạo biến n5 gán giá trị là 5

        + Giá trị trung bình =  (n1 + n2 + n3 + n4 +n5)/5
    - Đầu ra:
        + trungbinh = ?
*/

    var n1 = 1;
    var n2 = 2;
    var n3 = 3;
    var n4 = 4;
    var n5 = 5;

    var trungBinh = (n1 + n2 + n3 + n4 +n5)/5;
    console.log("Gia tri trung binh la: " + trungBinh)

/*
    Bài 3: Quy đổi tiền
    
    - Đầu vào:
        + Gia USD hien nay: 23.500 vnd
        + So tien USD can quy doi
    - Xử lý:
        + Tạo biến soUsd gán giá trị là 1000
        + Tạo biến giaUsd gán giá trị là 23500

        + So tien sau quy doi = so USD * 23.500
    - Đầu ra:
        + thanhTien = ?
*/

    var soUsd = 1000;
    var giaUsd = 23500;

    var thanhTien = soUsd * giaUsd;
    console.log("So tien sau quy doi la: " + thanhTien + " vnd");
    
/*
    Bài 4: Tính diện tích, chu vi hình chữ nhật
    
    - Đầu vào:
        + chieuDai;
        + chieuRong;
    - Xử lý:
        + Tạo biến chieuDai gán giâ trị là 4
        + Tạo biến chieuRong gán giâ trị là 3

        + dienTich = chieuDai * chieuRong
        + chuVi = (chieuDai + chieuRong)*2
    - Đầu ra:
        + dienTich = ?
        + chuVi = ?
*/

    var chieuDai = 4;
    var chieuRong = 3;

    var dienTich = chieuDai * chieuRong;
    var chuVi = (chieuDai + chieuRong)*2;

    console.log("Dien tich la: " + dienTich);
    console.log("Chu vi là: " + chuVi);

/*
    Bài 5:Tổng 2 ký số
    Giả sử:
    n = 12 => 1 + 2=> total = 3

    - Đầu vào
        + n = 12
    - Xử lý        
        + Tách lấy hàng chục => n / 10
        + Tách lấy hàng đơn vị => n % 10

        + Tổng = hàng chục +  hàng đơn vị

    - Đầu ra
        + tong = ?
*/

    var n = 12;

    var hangChuc = Math.floor(n / 10);
    var hangDonVi = n % 10;

    var tong2KySo = hangChuc + hangDonVi;
    console.log("Tong 2 ky so: " + tong2KySo);