//@ts-check
const crypto = require("crypto");

const fans = [
  "21976055",
  "39355079",
  "382665493",
  "1881521678",
  "https://space.bilibili.com/346605626",
  "179500250",
  "512110307",
  "400534959",
  "432139353",
  "505165922",
  "165528918",
  "34440708",
  "29129207",
  "342323360",
  "23659069",
  "626148930",
  "3973675",
  "187343031",
  "uid:31501304",
  "3546701784680729",
  "370186858",
  "2036903545",
  "327996895",
  "10261196",
  "uid:479156638",
  "1800978482",
  "43881777",
  "491003688",
  "434626233",
  "40829402",
  "198667882",
  "350578994",
  "472396821",
  "679667153",
  "33145268",
  "UID:1810913623",
  "372821290",
  "8692067",
  "500762955",
  "475698713",
  "UID:312249633",
  "398707486",
  "37738597",
  "312288155",
  "28784208",
];
const originFans = [
  "21976055",
  "https://space.bilibili.com/346605626",
  "177961412",
  "503759681",
  "382212828",
  "187343031",
  "27204442",
  "491003688",
  "434626233",
  "33145268",
  "28784208",
];

/**
 * 抽奖函数
 * @param {string} seed - 随机种子
 * @param {Array<string>} userList - 用户名列表
 * @returns {string} - 中奖用户名
 */
function drawWinner(seed, userList) {
  // 创建一个基于种子的随机数生成器
  const random = seedRandom(seed);

  // 生成一个 0 到 userList.length - 1 之间的随机索引
  const randomIndex = Math.floor(random() * userList.length);

  // 返回中奖用户
  return userList[randomIndex];
}

/**
 * 基于种子的随机数生成器
 * @param {string} seed - 随机种子
 * @returns {function} - 随机数生成函数
 */
function seedRandom(seed) {
  const hash = crypto.createHash("sha256");
  hash.update(seed);
  const seedBuffer = hash.digest();

  let index = 0;
  return function () {
    if (index >= seedBuffer.length) {
      index = 0;
    }
    return seedBuffer[index++] / 256;
  };
}

// 示例使用
const seed = "random-seed";
console.log(`中奖粉丝是: ${drawWinner(seed, fans)}`);
console.log(`中奖原始粉丝是: ${drawWinner(seed, originFans)}`);
