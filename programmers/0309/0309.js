let participant = ["lee", "kim", "park"];
let completion = ["lee", "kim"];

function solution(participant, completion) {
  var answer = "";
  let p = participant.sort();
  let c = completion.sort();
  for (let i = 0; i < participant.length; i++) {
    if (p[i] !== c[i]) {
      return c[i];
    }
  }
  return answer;
}

console.log(solution(participant, completion));
