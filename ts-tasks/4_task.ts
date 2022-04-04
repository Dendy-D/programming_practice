let num = 11224553873307;

type ResultObj = {
  [key: string]: number
}

const getLuckyNumber = (num: number) => {
  const resultObj: ResultObj = {};

  num
    .toString()
    .split('')
    .forEach((el: string) => {
      resultObj[el] ? resultObj[el]++ : resultObj[el] = 1;
    });

  let result;  

  const array = Object.entries(resultObj).forEach((el) => {
    if (+el[0] === el[1]) {
      result = el[1];
    } 
  })

  return result;
};

console.log(getLuckyNumber(num)); // 3
