function solution(number) {
  let answer = 0;

  /**
   * @param {number} start - 중복 방지를 위해 탐색을 시작할 인덱스
   * @param {number} count - 현재까지 선택된 학생 수 (3명이 되면 스톱)
   * @param {number} sum   - 현재까지 선택된 학생들의 번호 합
   */
  function findTrios(start, count, sum) {
    // [조건 달성] 3명을 다 뽑았을 때
    if (count === 3) {
      // 그 합이 0이면 우리가 찾던 '삼총사' 한 팀 추가!
      if (sum === 0) answer++;
      return; // 3명 넘게 뽑을 필요 없으니 여기서 끊어줌
    }

    // [가지치기] 시작점이 배열 끝까지 왔다면 더 이상 뽑을 사람이 없음
    if (start >= number.length) return;

    // 현재 위치(start)부터 남은 학생들을 한 명씩 골라봄
    for (let i = start; i < number.length; i++) {
      // 1. 현재 학생(number[i])을 팀에 넣고
      // 2. 다음 학생은 현재 인덱스보다 뒤(i + 1)에서 찾고
      // 3. 뽑은 명수(+1)와 합계(+현재 번호)를 갱신해서 다음 단계로 진입
      findTrios(i + 1, count + 1, sum + number[i]);
    }
  }

  // 인덱스 0번부터 시작, 현재 0명 뽑았고, 합계는 0인 상태로 출발
  findTrios(0, 0, 0);

  return answer;
}
