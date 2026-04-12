const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 1. 첫 줄에서 N(카드의 개수)과 M(목표 숫자)을 추출
const [N, M] = input[0].split(" ").map(Number);
// 2. 두 번째 줄에서 카드들에 적힌 숫자들을 배열로 추출
const cards = input[1].split(" ").map(Number);

function solve() {
  let maxSum = 0; // M과 가장 가까운 합을 저장할 변수

  // 3. 3중 반복문을 통해 3장의 카드를 뽑는 모든 경우의 수 탐색
  for (let i = 0; i < N - 2; i++) {
    for (let j = i + 1; j < N - 1; j++) {
      for (let k = j + 1; k < N; k++) {
        // 세 카드의 합 계산
        let sum = cards[i] + cards[j] + cards[k];

        // 4. 합이 M과 같으면 이보다 완벽한 정답은 없으므로 즉시 종료
        if (sum === M) {
          return sum;
        }

        // 5. 합이 M보다 작거나 같으면서, 기존의 최대합인 maxSum보다 크면 갱신
        if (sum <= M && sum > maxSum) {
          maxSum = sum;
        }
      }
    }
  }

  // 모든 경우를 다 돌아본 후의 최대합 반환
  return maxSum;
}

console.log(solve());
