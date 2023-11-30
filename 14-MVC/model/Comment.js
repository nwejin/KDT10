// (임시) DB로 부터 받아온 데이터 댓글 목록 (가정)
exports.commentInfos = () => {
  return [
    {
      id: 1,
      userid: "helloworld",
      date: "2022-10-31",
      comment: "안녕하세요~",
    },
    {
      id: 2,
      userid: "hello",
      date: "2022-11-31",
      comment: "안녕하세요~",
    },
    {
      id: 3,
      userid: "lastday",
      date: "2022-11-30",
      comment: "오늘은 11월 마지막",
    },
    {
      id: 4,
      userid: "coffee",
      date: "2023-11-30",
      comment: "이제 12월이네~",
    },
  ];
};
