// Game data chia sẻ qua git — tạo bằng nút "Xuất cho git". Không sửa tay.
// Cách dùng: chép file này vào cùng thư mục index.html rồi git push. Máy khác pull về, mở app là tự thấy.
window.GAME_DATA = {
  "updatedAt": 1,
  "penalty": false,
  "teams": [
    { "name": "Đội 1" },
    { "name": "Đội 2" },
    { "name": "Đội 3" }
  ],
  "questions": [
    {
      "points": 100,
      "question": "Hành tinh nào gần Mặt Trời nhất?",
      "answers": ["Sao Thủy", "Sao Kim", "Trái Đất", "Sao Hỏa"],
      "correct": 0,
      "images": [],
      "buff": false,
      "buffText": ""
    },
    {
      "points": 200,
      "question": "Nước sôi ở bao nhiêu độ C?",
      "answers": ["90°C", "100°C", "110°C", "120°C"],
      "correct": 1,
      "images": [],
      "buff": false,
      "buffText": ""
    },
    {
      "points": 300,
      "question": "Khí nào chiếm nhiều nhất trong khí quyển?",
      "answers": ["Oxy", "CO2", "Nitơ", "Hydro"],
      "correct": 2,
      "images": [],
      "buff": false,
      "buffText": ""
    },
    {
      "points": 100,
      "question": "Thủ đô đầu tiên của Việt Nam là?",
      "answers": ["Hoa Lư", "Thăng Long", "Huế", "Cổ Loa"],
      "correct": 3,
      "images": [],
      "buff": false,
      "buffText": ""
    },
    {
      "points": 200,
      "question": "Ai là tác giả Tuyên ngôn Độc lập 1945?",
      "answers": ["Hồ Chí Minh", "Võ Nguyên Giáp", "Phạm Văn Đồng", "Trường Chinh"],
      "correct": 0,
      "images": [],
      "buff": false,
      "buffText": ""
    },
    {
      "points": 300,
      "question": "Chiến thắng Điện Biên Phủ năm nào?",
      "answers": ["1945", "1954", "1968", "1975"],
      "correct": 1,
      "images": [],
      "buff": false,
      "buffText": ""
    },
    {
      "points": 100,
      "question": "Con gì đập thì sống, không đập thì chết?",
      "answers": ["Con tim", "Con đập", "Con gà", "Con số"],
      "correct": 0,
      "images": [],
      "buff": true,
      "buffText": "Thưởng nóng do quản trò quyết định"
    },
    {
      "points": 200,
      "question": "1+1×0 = ?",
      "answers": ["0", "1", "2", "3"],
      "correct": 1,
      "images": [],
      "buff": false,
      "buffText": ""
    }
  ]
};
