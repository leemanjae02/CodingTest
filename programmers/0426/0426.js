function solution(new_id) {
  const answer = new_id
    .toLowerCase() // 1단계
    .replace(/[^a-z0-9-_.]/g, "") // 2단계
    .replace(/\.{2,}/g, ".") // 3단계
    .replace(/^\.|\.$/g, "") // 4단계
    .replace(/^$/, "a") // 5단계 (빈 문자열이면 a)
    .slice(0, 15)
    .replace(/\.$/g, ""); // 6단계

  // 7단계
  const len = answer.length;
  return len <= 2 ? answer + answer[len - 1].repeat(3 - len) : answer;
}
