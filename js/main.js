//KHAI BÁO BIẾN 

// NÚT BTN
const btnTinhtien = document.getElementById('tinhTien')
const btnInBill = document.getElementById('inHoaDon')

// LOAI GRAB
const grabX = document.getElementById('grabX')
const grabSUV = document.getElementById('grabSUV')
const grabBlack = document.getElementById('grabBlack')

// GIÁ TRỊ
const soKM = document.getElementById('soKM')
const thoiGianCho = document.getElementById('thoiGianCho')

// XUẤT THÔNG TIN
const divThanhTien = document.getElementById('divThanhTien')
const xuatTien = document.getElementById('xuatTien')
const showTableHoaDon = document.getElementById('showTableHoaDon')



// ĐƠN GIÁ
// KM ĐẦU TIÊN
const donGiaKMDautienGrabX = 8000;
const donGiaKMDautienGrabSUV = 9000;
const donGiaKMDautienGrabBlack = 10000;

// TỪ 1 KM ĐẾN 19 KM
const donGiaTu1Den19KMGrabX = 7500;
const donGiaTu1Den19KMGrabSUV = 8500;
const donGiaTu1Den19KMGrabBlack = 9500;


// TRÊN 19 KM
const donGiaTren19KMGrabX = 7000;
const donGiaTren19KMGrabSUV = 8000;
const donGiaTren19KMGrabBlack = 9000;

// THỜI GIAN CHỜ
const donGiaChoGrabX = 2000;
const donGiaChoGrabSUV = 3000;
const donGiaChoGrabBlack = 3500;

// XÁC ĐỊNH LOẠI GRAB
function xacDinhLoaiGrab(grabX, grabSUV, grabBlack) {
    let loaiGrab
    if (grabX) {
        loaiGrab = "grabX"
    }

    if (grabSUV) {
        loaiGrab = "grabSUV"
    }

    if (grabBlack) {
        loaiGrab = "grabBlack"
    }

    return loaiGrab;
}

//TÍNH TIỀN KM ĐẦU TIÊN
function tinhTienKMDauTien(donGiaKMdauTien) {
    let tongTienKmDauTien
    tongTienKmDauTien = donGiaKMdauTien;
    return tongTienKmDauTien
}


//TÍNH TIỀN TỪ 1 KM ĐẾN 19 KM
function tinhTienTu1Den19KM(soKM, giaKMdauTien, donGiaTu1Den19KM) {
    let tongTienTu1Den19Km
    tongTienTu1Den19Km = giaKMdauTien + (soKM - 1) * donGiaTu1Den19KM;
    return tongTienTu1Den19Km;
}


//TÍNH TIỀN TRÊN 19 KM
function tinhTienTren19KM(soKm, giaKMdauTien, donGiaTu1Den19KM, donGiaTren19KM) {
    let tongTienTren19KM
    tongTienTren19KM = giaKMdauTien + 18 * donGiaTu1Den19KM + (soKm - 19) * donGiaTren19KM;
    return tongTienTren19KM;
}


//TÍNH TIỀN THỜI GIAN CHỜ
function tinhTienThoiGianCho(thoiGianCho, donGiaThoiGianCho) {
    let tongTienThoiGianCho;
    tongTienThoiGianCho = Math.floor(thoiGianCho / 3) * donGiaThoiGianCho;
    return tongTienThoiGianCho
}


//----------------------------------------HÀM TÍNH TIỀN TỔNG
function handleTinhTien(soKM, loaiGrab) {
    let tienThoiGianCho;
    let tongTienTheoKM;
    let tongTien;
    switch (loaiGrab) {
        case "grabX": {
            tienThoiGianCho = tinhTienThoiGianCho(Number(thoiGianCho.value), donGiaChoGrabX)
            if (soKM <= 1 && soKM > 0) {
                tongTienTheoKM = tinhTienKMDauTien(donGiaKMDautienGrabX)
            }

            if (soKM > 1 && soKM <= 19) {
                tongTienTheoKM = tinhTienTu1Den19KM(soKM, donGiaKMDautienGrabX, donGiaTu1Den19KMGrabX)
            }

            if (soKM > 19) {
                tongTienTheoKM = tinhTienTren19KM(soKM, donGiaKMDautienGrabX, donGiaTu1Den19KMGrabX, donGiaTren19KMGrabX)
            }
            break;
        }

        case "grabSUV": {
            tienThoiGianCho = tinhTienThoiGianCho(Number(thoiGianCho.value), donGiaChoGrabSUV)
            if (soKM <= 1 && soKM > 0) {
                tongTienTheoKM = tinhTienKMDauTien(donGiaKMDautienGrabSUV)
            }

            if (soKM > 1 && soKM <= 19) {
                tongTienTheoKM = tinhTienTu1Den19KM(soKM, donGiaKMDautienGrabSUV, donGiaTu1Den19KMGrabSUV)
            }

            if (soKM > 19) {
                tongTienTheoKM = tinhTienTren19KM(soKM, donGiaKMDautienGrabSUV, donGiaTu1Den19KMGrabSUV, donGiaTren19KMGrabSUV)
            }

            break;

        }

        default: {
            tienThoiGianCho = tinhTienThoiGianCho(Number(thoiGianCho.value), donGiaChoGrabBlack)
            if (soKM <= 1 && soKM > 0) {
                tongTienTheoKM = tinhTienKMDauTien(donGiaKMDautienGrabBlack)
            }

            if (soKM > 1 && soKM <= 19) {
                tongTienTheoKM = tinhTienTu1Den19KM(soKM, donGiaKMDautienGrabBlack, donGiaTu1Den19KMGrabBlack)
            }

            if (soKM > 19) {
                tongTienTheoKM = tinhTienTren19KM(soKM, donGiaKMDautienGrabBlack, donGiaTu1Den19KMGrabBlack, donGiaTren19KMGrabBlack)
            }

            break;
        }
    }

    tongTien = tongTienTheoKM + tienThoiGianCho

    return tongTien
}




//SỰ KIỆN ONCLICK VÀO NÚT TÍNH TIỀN
btnTinhtien.onclick = function (e) {
    e.preventDefault()
    // validation
    if (!soKM.value || !thoiGianCho.value || Number(soKM.value) <= 0 || Number(thoiGianCho.value) <= 0) {
        alert('Tất cả các trường là bắt buộc. Số KM và thời gian chờ phải là số dương lớn hơn 0!')
    } else {
        // tinhTien
        divThanhTien.classList.remove('d-none')
        xuatTien.innerHTML = handleTinhTien(Number(soKM.value), xacDinhLoaiGrab(grabX.checked, grabSUV.checked, grabBlack.checked)).toLocaleString()
    }
}





//////////////////////////////////////////////-----XỬ LÝ XUẤT HOÁ ĐƠN ---------//////////////////////////////////////////////


// SỐ KM ĐẦU TIÊN

function renderSuDungKMDauTien(soKM) {
    let inSuDung

    if (soKM <= 1) {
        inSuDung = soKM.toFixed(1)
    }

    if (soKM > 1) {
        inSuDung = "1.0"
    }

    return inSuDung
}

function donGiaKMDauTienXuatHoaDon(loaiGrab) {
    let donGiaKMDauTienXuatHoaDon
    switch (loaiGrab) {
        case "grabX": {
            donGiaKMDauTienXuatHoaDon = donGiaKMDautienGrabX
            break;
        }


        case "grabSUV": {
            donGiaKMDauTienXuatHoaDon = donGiaKMDautienGrabSUV
            break;
        }

        default: {
            donGiaKMDauTienXuatHoaDon = donGiaKMDautienGrabBlack
            break;
        }
    }

    return donGiaKMDauTienXuatHoaDon
}

//TỪ 1 ĐẾN 19KM
function renderSuDungTu1Den19KM(soKM) {
    let inSuDung

    if (soKM <= 1) {
        inSuDung = "0.0"
    }

    if (soKM > 1 && soKM <= 19) {
        inSuDung = (soKM - 1).toFixed(1)
    }

    if (soKM > 19) {
        inSuDung = "18.0"
    }

    return inSuDung
}

function donGiaTu1Den19KMXuatHoaDon(loaiGrab) {
    let donGiaTu1Den19KMXuatHoaDon
    switch (loaiGrab) {
        case "grabX": {
            donGiaTu1Den19KMXuatHoaDon = donGiaTu1Den19KMGrabX
            break;
        }


        case "grabSUV": {
            donGiaTu1Den19KMXuatHoaDon = donGiaTu1Den19KMGrabSUV
            break;
        }

        default: {
            donGiaTu1Den19KMXuatHoaDon = donGiaTu1Den19KMGrabBlack
            break;
        }
    }

    return donGiaTu1Den19KMXuatHoaDon
}


//TRÊN 19 KM
function renderSuDungTren19KM(soKM) {
    let inSuDung

    if (soKM <= 19) {
        inSuDung = "0.0"
    }

    if (soKM > 19) {
        inSuDung = (soKM - 19).toFixed(1)
        console.log(inSuDung)
    }


    return inSuDung
}

function donGiaTren19KMXuatHoaDon(loaiGrab) {
    let donGiaTren19KMXuatHoaDon
    switch (loaiGrab) {
        case "grabX": {
            donGiaTren19KMXuatHoaDon = donGiaTren19KMGrabX
            break;
        }


        case "grabSUV": {
            donGiaTren19KMXuatHoaDon = donGiaTren19KMGrabSUV
            break;
        }

        default: {
            donGiaTren19KMXuatHoaDon = donGiaTren19KMGrabBlack
            break;
        }
    }

    return donGiaTren19KMXuatHoaDon
}

//THỜI GIAN CHỜ
function renderSuDungThoiGianCho(thoiGianCho) {
    let inSuDung

    inSuDung = Math.floor(thoiGianCho / 3).toFixed(1)


    return inSuDung
}
function donGiaThoiGianCho(loaiGrab) {
    let donGiaThoiGianCho

    switch (loaiGrab) {
        case "grabX": {
            donGiaThoiGianCho = donGiaChoGrabX
            break;
        }


        case "grabSUV": {
            donGiaThoiGianCho = donGiaChoGrabSUV
            break;
        }

        default: {
            donGiaThoiGianCho = donGiaChoGrabBlack
            break;
        }
    }

    return donGiaThoiGianCho
}


//---------------------------------SỰ KIỆN ONCLICK VÀO NÚT IN HOÁ ĐƠN
btnInBill.onclick = function (e) {
    if (!soKM.value || !thoiGianCho.value || Number(soKM.value) <= 0 || Number(thoiGianCho.value) <= 0) {
        alert('Tất cả các trường là bắt buộc. Số KM và thời gian chờ phải là số dương lớn hơn 0!')
    } else {
        // Xu ly xuat ban hoa don

        let suDungKMDauTien
        let donGiaKMDauTienXuatHoaDonIn

        let suDungTu1Den19
        let donGiaTu1Den19KMXuatHoaDonIn

        let suDungTren19
        let donGiaTren19KMXuatHoaDonIn

        let suDungThoiGianCho
        let donGiaThoiGianChoIn

        suDungKMDauTien = renderSuDungKMDauTien(Number(soKM.value))
        donGiaKMDauTienXuatHoaDonIn = donGiaKMDauTienXuatHoaDon(xacDinhLoaiGrab(grabX.checked, grabSUV.checked, grabBlack.checked))


        suDungTu1Den19 = renderSuDungTu1Den19KM(Number(soKM.value))
        donGiaTu1Den19KMXuatHoaDonIn = donGiaTu1Den19KMXuatHoaDon(xacDinhLoaiGrab(grabX.checked, grabSUV.checked, grabBlack.checked))


        suDungTren19 = renderSuDungTren19KM(Number(soKM.value))
        donGiaTren19KMXuatHoaDonIn = donGiaTren19KMXuatHoaDon(xacDinhLoaiGrab(grabX.checked, grabSUV.checked, grabBlack.checked))

        suDungThoiGianCho = renderSuDungThoiGianCho(Number(thoiGianCho.value))
        donGiaThoiGianChoIn = donGiaThoiGianCho(xacDinhLoaiGrab(grabX.checked, grabSUV.checked, grabBlack.checked))


        // Xuat hoa don

        showTableHoaDon.innerHTML = `
        <div class="modal fade" id="hoaDon" tabindex="-1"
        aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" style="max-width: unset; width: 60%;">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">HOÁ ĐƠN</h5>
                    <button type="button" class="close" data-dismiss="modal"
                        aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <tt>
                    <table class="table text-center">
                        <thead>
                            <tr>
                                <th class="text-center" colspan="4">CHI TIẾT HOÁ ĐƠN</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="font-weight-bold">CHI TIẾT</td>
                                <td class="font-weight-bold">SỬ DỤNG</td>
                                <td class="font-weight-bold">ĐƠN GIÁ (1000Đ)</td>
                                <td class="font-weight-bold">THÀNH TIỀN (1000Đ)</td>
                            </tr>
                            <tr>
                            <tr>
                                <td class="font-weight-bold">Số KM đầu tiên</td>
                                <td>${suDungKMDauTien}</td>
                                <td>${(donGiaKMDauTienXuatHoaDonIn / 1000).toFixed(1)}</td>
                                <td>${(donGiaKMDauTienXuatHoaDonIn / 1000).toFixed(1)}</td>
                            </tr>
                            <tr>
                                <td class="font-weight-bold">Từ 1 KM đến 19KM </td>
                                <td>${suDungTu1Den19}</td>
                                <td>${donGiaTu1Den19KMXuatHoaDonIn / 1000}</td>
                                <td>${(suDungTu1Den19 * donGiaTu1Den19KMXuatHoaDonIn / 1000).toFixed(1)}</td>
                            </tr>
                            <tr>
                                <td class="font-weight-bold">Trên 19 KM</td>
                                <td>${suDungTren19}</td>
                                <td>${(donGiaTren19KMXuatHoaDonIn / 1000).toFixed(1)}</td>
                                <td>${(suDungTren19 * donGiaTren19KMXuatHoaDonIn / 1000).toFixed(1)}</td>
                            </tr>
                            <tr>
                                <td class="font-weight-bold">Thời gian chờ (mỗi 3 phút)</td>
                                <td>${suDungThoiGianCho}</td>
                                <td>${(donGiaThoiGianChoIn / 1000).toFixed(1)}</td>
                                <td>${(suDungThoiGianCho * donGiaThoiGianChoIn / 1000).toFixed(1)}</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colspan="2"></td>
                                <td class="font-weight-bold">TỔNG TIỀN:</td>
                                <td>${((donGiaKMDauTienXuatHoaDonIn
                + suDungTu1Den19 * donGiaTu1Den19KMXuatHoaDonIn
                + suDungTren19 * donGiaTren19KMXuatHoaDonIn
                + suDungThoiGianCho * donGiaThoiGianChoIn) / 1000).toFixed(1)}
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                    </tt>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-dismiss="modal">Xác nhận</button>
                </div>
            </div>
        </div>
    </div>`
    }

}

