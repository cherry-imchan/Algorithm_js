// 백준 10998번: AxB

// 입력 받기
const INPUT = require("fs").readFileSync("dev/stdin").toString().split(" ");
const A = parseInt(INPUT[0]);
const B = parseInt(INPUT[1]);

// 알고리즘
const ANSWER = A * B;

// 출력
console.log(ANSWER);
