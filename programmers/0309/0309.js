let participant = ["lee", "kim", "park"];
let completion = ["lee", "kim"];

function solution(participant, completion) {
  var answer = "";
  participant.sort();
  completion.sort();
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      answer = participant[i];
      break;
    }
  }
  return answer;
}

console.log(solution(participant, completion));
