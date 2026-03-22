function solution(array, commands) {
  var answer = [];
  for (let command of commands) {
    let [i, j, k] = command;

    let sliceArray = array.slice(i - 1, j);
    sliceArray.sort((a, b) => a - b);
    answer.push(sliceArray[k - 1]);
  }
  return answer;
}
