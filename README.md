# INPRO – Hệ Thống Quản Trị Doanh Nghiệp Thông Minh

> **Tăng lời, vững lãi** · *Earn More. Keep More. Increase Profit.*

Landing page chính thức của giải pháp quản trị doanh nghiệp **INPRO (Hệ sinh thái Nonelab)**, đồng nhất theo bộ **Brand Guidelines 2026** và tối ưu đa nền tảng (Desktop, Tablet, Mobile).

---

## 📁 Cấu Trúc Dự Án Đẩy Lên GitHub

```text
├── index.html              # Mã nguồn chính landing page (HTML5, CSS3, Vanilla JS)
├── favicon.png             # Icon hiển thị trên tab trình duyệt
├── assets/                 # Toàn bộ hình ảnh, biểu tượng và đồ họa tối ưu web
│   ├── inpro-ngang.png     # Logo ngang sắc nét (Header / Footer)
│   ├── inpro-ngang-titled.png # Logo kèm slogan thương hiệu (Hero banner)
│   ├── inpro-vuong.png     # Logo icon vuông
│   ├── demo-1.jpg          # Mockup giao diện Inpro OS Realtime
│   ├── sme-mockup-trans.png# Mockup đồ họa banner SME
│   ├── tools/              # 9 icon bộ công cụ vận hành
│   ├── ql-*.jpg            # Hình ảnh 4 module Quản lý
│   ├── kv-*.jpg            # Hình ảnh 4 module Kho vận
│   └── val-*.jpg           # Hình ảnh 4 giá trị doanh nghiệp
├── google-apps-script.gs   # Kịch bản Apps Script nhận lead về Google Sheet
└── README.md               # Tài liệu hướng dẫn dự án
```

---

## 🚀 Hướng Dẫn Bật Website Miễn Phí Với GitHub Pages

Sau khi tải các file lên kho lưu trữ (Repository) trên GitHub:

1. Vào mục **Settings** của Repository trên GitHub.
2. Chọn mục **Pages** ở thanh menu bên trái.
3. Tại phần **Build and deployment > Branch**:
   - Chọn nhánh: `main` (hoặc `master`).
   - Thư mục: `/ (root)`.
   - Bấm **Save**.
4. Chờ 1–2 phút, bạn sẽ nhận được đường dẫn website hoạt động trực tiếp dạng:  
   `https://<ten-tai-khoan>.github.io/<ten-repo>/`

---

## 📊 Kết Nối Nhận Lead Về Google Sheet

1. Tạo một trang **Google Sheet** mới.
2. Chọn **Tiện ích mở rộng (Extensions) > Apps Script**.
3. Dán toàn bộ mã nguồn trong tệp [`google-apps-script.gs`](google-apps-script.gs) vào.
4. Bấm **Triển khai (Deploy) > Tùy chọn triển khai mới (New deployment)**:
   - Loại: **Ứng dụng web (Web app)**.
   - Thực thi dưới tên: **Tôi (Me)**.
   - Ai có quyền truy cập: **Bất kỳ ai (Anyone)**.
5. Sao chép liên kết Web App URL nhận được và dán vào biến `const SHEET_URL = '...'` ở cuối tệp `index.html`.

---
© 2026 INPRO · inpro.vn · Hệ sinh thái Nonelab. All rights reserved.
