function twoSum(numbers, targetNumber) {
  // 創一個新Array來避免複寫
  let numberArr = [...numbers];
  // 確保target在string下也能使用
  let target = +targetNumber;
  // 用數字差作篩選
  let minusResult;
  // 裝結果的容器
  let result = [];

  // 0)第一次迴圈，取第一個數值的index
  for (const index in numbers) {
    // 取出正在篩選用的值
    let numberBeingUsed = numberArr[index];
    // 取出後，讓被使用的值的位置歸零
    // (功用: 讓Array維持長度來取index + 避免同個位置被重複計次)
    numberArr[index] = 0;
    // 計算差值
    minusResult = target - numberBeingUsed;

    //  再跑一次迴圈，取出配對值
    for (const indexMatch in numberArr) {
      minusResult === numberArr[indexMatch] &&
        result.push({
          message: `The number ${index} and ${indexMatch} is equal to ${target}.`,
          pair: [index, indexMatch],
        });
    }
  }
  result.length === 0 &&
    result.push({ message: 'There is no match.', pair: 0 });
  return result;
}

const result = twoSum([1, 2, 3, 4, 1, 4], 11);
console.log(result);

// 失敗版本:
/*
    1. 取index跟取值程序混亂
    2. count本意是防止j超過長度，但變得很多餘，因為意義跟j存在雷同
      (count基本上就是另一個i)
    3. 會重複取值

      >>整體而言大災難，但幫助再寫一次時思考更多
*/
// function twoSumTest(numbers, targetNumber) {
//   let target = +targetNumber;
//   let minusResult;
//   let count = 0;
//   let result = [];

//   for (const i in numbers) {
//     minusResult = target - numbers[i];
//     count++;
//     for (const j in numbers) {
//       const indexCheck = count + j > 3 ? 3 : count + j;
//       minusResult === numbers[indexCheck] && result.push([i, indexCheck]);
//     }
//   }
//   return result;
// }
// console.log(twoSumTest([1, 2, 3, 4, 1, 4], 5));
