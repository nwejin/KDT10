const express = require("express");
const app = express();

const dotenv = require("dotenv");
const aws = require("aws-sdk"); // aws 설정을 위한 모듈
const multer = require("multer");
const multerS3 = require("multer-s3"); // aws s3에 업로드하기 위한 multer 설정

dotenv.config();

// aws 설정
aws.config.update({
  accessKeyId: process.env.AWS_S3_KEY_ID,
  secretAccessKey: process.env.AWS_S3_ACCESS_KEY,
  region: process.env.AWS_S3_REGION,
});

const s3 = new aws.S3();

const PORT = process.env.PORT;

app.set("view engine", "ejs");
// app.set("views", "/views");

// multer 설정 aws
const upload = multer({
  storage: multerS3({
    // 옵션
    s3: s3,
    bucket: process.env.AWS_S3_BUCKET,
    acl: "public-read", // 파일 접근 권한(public-read로 해야 업로드 된 파일이 공개)
    contentType: multerS3.AUTO_CONTENT_TYPE,
    metadata: (req, file, cb) => {
      cb(null, { fieldName: file.fieldname });
    },
    key: (req, file, cb) => {
      cb(null, Date.now().toString() + "-" + file.originalname);
    },
  }),
});

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/upload", upload.array("files"), (req, res) => {
  console.log(req.files);
  res.send(req.files);
});

app.post("/login", (req, res) => {
  try {
    const { id, pw } = req.body;
    const { id: realId, pw: realPw } = userInfo;

    if (id === realId && pw === realPw) {
      // 토큰 생성
      // jwt.sign(payLoad, .. 이외에는 옵션)
      const token = jwt.sign({ id: id }, Sscect);
      res.sendStatus({ isLogin: true, token });
    } else
      res.send({ isLogin: false, msg: "로그인 정보가 올바르지 않습나다." });
  } catch (err) {
    console.error(err);
  }
});

app.listen(PORT, () => {
  console.log(`localhost:${PORT})`);
});
