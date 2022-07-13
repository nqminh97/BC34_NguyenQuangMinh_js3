// Bài 1: Tính lương nhân viên
document.getElementById("btnTinhLuong").onclick = function(){
    //input:
    var luongNgay = document.getElementById("luongNgay").value;
    var soNgayLam = document.getElementById("soNgayLam").value;
    //process:
    var total = luongNgay * soNgayLam;
    //format vnd:
    var format = new Intl.NumberFormat("vn-VN");
    var totalVND = format.format(total) + "vnd";   
    //output
    document.getElementById("thongBaoTinhLuong").innerHTML = totalVND;

}

// Bài 2: Tính giá trị trung bình
document.getElementById("btnTinhTB").onclick = function(){
    //input:
    var num1 = document.getElementById("num1").value * 1;
    var num2 = document.getElementById("num2").value * 1;
    var num3 = document.getElementById("num3").value * 1;
    var num4 = document.getElementById("num4").value * 1;
    var num5 = document.getElementById("num5").value * 1;
    
    //process:
    var numTB = (num1 + num2 + num3 + num4 + num5) / 5; 

    //output:
    document.getElementById("giaTriTB").innerHTML = numTB;
}


// Bài 3: Quy đổi tiền
document.getElementById("btnQuyDoiTien").onclick = function(){
    //input
    var doiTien = document.getElementById("doiTien").value * 1 ;

    //process
    var thanhTien = doiTien * 23500 ; 
    //format
    var format3 = new Intl.NumberFormat("vn-VN");
    var thanhTienVN = format3.format(thanhTien) + "vnd";
    //output
    document.getElementById("giaTriTienVN").innerHTML = thanhTienVN;
}


// Bài 4: Tính diện tích và chu vi hình chữ nhật

document.getElementById("btnTinh").onclick = function(){
    //input
    var chieuDai = document.getElementById("chieuDai").value * 1;
    var chieuRong = document.getElementById("chieuRong").value * 1;
    //process
    var dienTich = chieuDai * chieuRong;
    var chuVi = (chieuDai + chieuRong) * 2 ;
    //output
    var showKichThuoc = "";
    showKichThuoc += "<p>Diện tích: " + dienTich + "m2</p>";
    showKichThuoc += "<p>Chu vi: " + chuVi + "cm2</p>";
    document.getElementById("giaTriHCN").innerHTML = showKichThuoc;
}


// Bài 5

document.getElementById("btnTinhTong").onclick = function(){
    //input
    var soTuNhien = document.getElementById("soTuNhien").value * 1;
    //process
    var numright = soTuNhien % 10;
    var numleft = Math.floor(soTuNhien / 10);
    var ketQua = numright + numleft;
    //output
    document.getElementById("giaTriTong").innerHTML = ketQua;
}



// var num6 = 82;
// var numright = num6 % 10;
// var numleft = Math.floor(num6 / 10);
// var sum2 = numright + numleft;

// console.log("Tổng của 2 ký số là: ", sum2 );




//Bài tập movie:

document.getElementById("btnSubmit").onclick = function(){
    //input:
    var tenPhim = document.getElementById("tenPhim").value;
    var giaVeNL = document.getElementById("giaVeNL").value * 1;
    var slVeNL = document.getElementById("slVeNL").value * 1;
    var giaVeTE = document.getElementById("giaVeTE").value * 1;
    var slVeTE = document.getElementById("slVeTE").value * 1;
    var phanTramTuThien = document.getElementById("phanTramTuThien").value;
    
    //process:
    var soVeDaBan = slVeNL + slVeTE ;
    var doanhThu = giaVeNL*slVeNL + giaVeTE*slVeTE;
    var tongTienTTT = (doanhThu * phanTramTuThien) /100 ;
    var loiNhuan = doanhThu - tongTienTTT;

    //format:
    var format1 = new Intl.NumberFormat("vn-VN");
    //output:
    var showInfo = "";
    showInfo += "<div class='bg-success'>";
    showInfo += "<p>Tên phim: " + tenPhim + "</p>";
    showInfo += "<p>Số vé đã bán: " + soVeDaBan + "</p>";
    showInfo += "<p>Doanh thu: " + format1.format(doanhThu) + " vnd</p>";
    showInfo += "<p>Trích % từ thiện: " + phanTramTuThien + "%</p>";
    showInfo += "<p>Tong tien trích từ thiện: " + format1.format(tongTienTTT) + " vnd</p>";
    showInfo += "<p>Lợi nhuận: " + format1.format(loiNhuan) + " vnd</p>";
    showInfo += "</div>";
    document.getElementById("thongBaoMovie").innerHTML = showInfo;
}