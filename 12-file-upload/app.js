const express = require("express");
const app = express();
const PORT = 8000;

// multer관련 설정
const multer = require("multer");
const path = require("path"); // 경로에 관한 내장 모듈
const upload = multer({
  dest: "uploads/", // dest: 클라이언트가 업로드한 파일을 저장할 서버측 경로
  // 그냥 업로드하면 확장자가 사라지고 업로드됨
});

//multer 세부 설정
const uploadDetail = multer({
  // storage: 저장할 공간에 대한 정보
  storage: multer.diskStorage({
    // destination : 경로 설정
    destination(req, file, done) {
      // done: callback 함수
      // done(null, xx) : null => 에러가 없다는 의미
      done(null, "uploads/"); // 파일을 업로드할 경로 설정
    },
    filename(req, file, done) {
      //파일의 확장자 추출 => "path" 모듈 활용
      const ext = path.extname(file.originalname);
      console.log("exe > ", ext);
      console.log("file name > ", path.basename(file.originalname, ext));
      // path.basename(file.originalname, ext) => 확장자 제외 파일이름
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  // limits: 파일 제한 정보
  limits: {
    fileSize: 5 * 1024 * 1024, // 5mb
  },
});

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// static 등록 => 이미지 경로 접근 (프론트) // 미들웨어
app.use("/uploads", express.static(__dirname + "/uploads"));

app.get("/", (req, res) => {
  res.render("index");
});

// 1. single(): 하나의 파일을 업로드
// upload.single('userfile') // 미들웨어: 클라이언트 요청이 들어오면,
// multer 설정에 따라 파일을 업로드 한 후, req.file 객체를 생성

// single() 인자는 input 태그의 name과 일치시켜야함
app.post("/upload", uploadDetail.single("userfile"), (req, res) => {
  console.log(req.file);
  console.log(req.body);
  res.send("파일 업로드 완료!");
});
/* req.file
{ 파일정보 } */

// 2. array(): 하나의 인풋에 여러 파일 업로드
app.post("/upload/array", uploadDetail.array("userfiles"), (req, res) => {
  // [{file1 정보}, {file2 정보}, {file3 정보} ... ] : 배열 형태
  console.log(req.files);
  console.log(req.body);
  res.send("하나의 input에 여러 파일 업로드 완료!");
});

// 3. fileds(): 여러 파일을 각각의 인풋에 업로드
app.post(
  "/upload/fields",
  uploadDetail.fields([{ name: "userfile1" }, { name: "userfile2" }]),
  (req, res) => {
    /* {
        userfile1: [ {파일 정보} ],
        userfile2: [ {파일 정보} ],
    } */
    console.log(req.files);
    console.log(req.body);
    res.send("여러개의 input에 각각의 파일 업로드 완료!");
  }
);

// 동적 폼 업로드
app.post("/dynamic", uploadDetail.single("dynamicFile"), (req, res) => {
  console.log(req.file);
  console.log(req.body);
  res.send({ file: req.file, title: req.body.title });
});

// 실습
app.get("/practice1", (req, res) => {
  res.render("practice1");
});

// 실습 multer 세부 설정

// 미들웨어 역할
const uploadPractice = multer({
  // storage: 저장할 공간에 대한 정보
  storage: multer.diskStorage({
    // destination : 경로 설정
    destination(req, file, done) {
      // done: callback 함수
      // done(null, xx) : null => 에러가 없다는 의미
      done(null, "uploads/"); // 파일을 업로드할 경로 설정
    },
    filename(req, file, done) {
      console.log("file name > req.body :", req.body);
      //파일의 확장자 추출 => "path" 모듈 활용
      const ext = path.extname(file.originalname);
      console.log("exe > ", ext);
      console.log("file name > ", path.basename(file.originalname, ext));
      // path.basename(file.originalname, ext) => 확장자 제외 파일이름
      // userId.확장자 -> 파일명
      done(null, req.body.id + ext);
    },
  }),
  // limits: 파일 제한 정보
  limits: {
    fileSize: 5 * 1024 * 1024, // 5mb
  },
});

app.post(
  "/uploads/practice1",
  uploadPractice.single("userProfile"),
  (req, res) => {
    console.log(req.body);
    console.log(req.file);
    res.send("파일 업로드 완료!");
  }
);

app.listen(PORT, () => {
  console.log(`${PORT} port is opening`);
});
