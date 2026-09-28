# HDSD — Game Trắc Nghiệm Nhóm 7 TA3

Game chạy bằng 1 file `index.html`, không cần mạng, không cần cài đặt.
Mở file `index.html` bằng trình duyệt (Chrome/Edge) là dùng được.

## 1. Chuẩn bị game (màn hình soạn)

Mở app lần đầu sẽ ở màn **soạn câu hỏi**:

- **Đội chơi**: thêm/xóa đội, đổi tên trực tiếp. Bấm vào **số điểm** trên bảng điểm để sửa tay bất cứ lúc nào.
- **Câu hỏi**: mỗi câu gồm nội dung, **điểm số** (tự nhập), đáp án (2–6 đáp án, tick radio chọn đáp án đúng), **ảnh minh họa** (chọn nhiều file hoặc dán link, mỗi ảnh xóa riêng).
- **Câu BUFF**: tick `★ Câu BUFF` để biến câu đó thành câu đặc biệt (ô điểm ẩn đi, thay bằng ô **nội dung buff**, VD: "Nhân đôi điểm"). Trên bảng chơi không lộ câu nào là buff.
- **Luật trừ điểm**: tick "Trừ điểm khi trả lời sai" nếu muốn (mặc định không trừ — quản trò tự quyết).
- **Nạp hàng loạt**: bấm **📂 Nhập file** (JSON / CSV / Excel / TXT / Markdown). Bấm **CSV mẫu / TXT mẫu** để tải file ví dụ đúng định dạng:
  - CSV/Excel: cột `Points, Question, AnswerA..F, Correct, Image, Buff` (cột `Buff` ghi `x` hoặc ghi luôn nội dung buff; cột `Image` nhiều link cách nhau bằng `;`).
  - TXT: mỗi câu cách nhau 1 dòng trống, VD:
    ```
    Cau: Thủ đô của Việt Nam?
    Diem: 100
    Buff: Nhân đôi điểm
    Hinh: https://...anh1.jpg
    Hinh: https://...anh2.jpg
    A. Hà Nội
    B. Huế
    C. Đà Nẵng
    D. Sài Gòn
    Dap an: A
    ```

## 2. Vào trận đấu

- Bấm **▶️ Vào trận đấu**: thanh Dự án bị ẩn đi, các câu hỏi **tự trộn vị trí**, mọi ô hiện giống nhau (`Câu 1..N`) — không lộ điểm, không lộ buff.
- Bấm vào 1 ô → hiện **trang trung gian**: câu tính điểm hiện số điểm, câu buff hiện nội dung buff → bấm **Vào câu hỏi →** mới thấy câu hỏi và đáp án.
- Bấm đáp án: hiện ngay đúng (xanh) / sai (đỏ). Bấm **Đóng câu hỏi** để quay lại bảng.
- **Chấm điểm**: quản trò bấm vào **số điểm của đội** trên bảng điểm để sửa tay.
- **Ảnh**: bấm vào ảnh để phóng to full màn hình (bấm lần nữa hoặc Esc để thu lại). Câu nhiều ảnh có 2 nút:
  - **🖼 Khung đều**: mọi ảnh cùng một khung (ảnh bị cắt cho vừa).
  - **📐 Giữ nguyên ảnh**: thấy trọn vẹn nội dung gốc từng ảnh.
- Nút **🔀 Trộn câu hỏi**: xáo lại vị trí. Nút **↩️ Reset game**: điểm về 0, mở lại tất cả câu.
- Muốn sửa game: bấm **← Quay lại** (góc trái) hoặc **✏️ Sửa game**.

## 3. Chia sẻ cấu hình qua git

Dữ liệu game lưu trong **bộ nhớ trình duyệt (localStorage)** — push code lên git thì người khác **không** thấy cấu hình của bạn. Muốn chia sẻ:

1. Trên máy bạn: bấm **⬆️ Xuất cho git** → tải về file `game-data.js` (điểm các đội đã reset về 0).
2. Chép đè `game-data.js` vào thư mục repo → `git add game-data.js index.html` → commit → push.
3. Máy khác `git pull` về, mở `index.html` → app **tự nạp bản mới nhất** (hỏi xác nhận nếu máy đó đang có game riêng).

## 4. Lưu ý

- Mỗi trình duyệt/máy giữ dữ liệu riêng. Đổi trình duyệt = game trắng → dùng **💾 Xuất / 📂 Nhập file** (JSON) để chuyển.
- Ảnh **upload từ máy** được nhúng vào dữ liệu nên file `game-data.js` có thể nặng (mỗi ảnh ~100–300KB). Muốn nhẹ thì dùng ảnh dán link.
- Phím **Esc**: thu ảnh đang phóng to, hoặc đóng câu hỏi đang mở.
- Kết thúc tất cả câu hỏi, app tự hiện đội thắng cuộc.
