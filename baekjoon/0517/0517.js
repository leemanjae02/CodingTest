const fs = require("fs");

function solve() {
  const input = fs.readFileSync("/dev/stdin").toString().trim().split(/\s+/);
  if (input.length === 0 || input[0] === "") return;

  let idx = 0;
  const n = parseInt(input[idx++], 10);
  const m = parseInt(input[idx++], 10);

  // 2차원 배열 지도(grid) 생성
  const grid = [];
  for (let i = 0; i < n; i++) {
    const row = [];
    for (let j = 0; j < m; j++) {
      row.push(parseInt(input[idx++], 10));
    }
    grid.push(row);
  }

  // 정답을 담을 거리 배열(dist)을 -1로 초기화
  const dist = Array.from({ length: n }, () => Array(m).fill(-1));

  // 포인터(head)를 이용한 간단한 큐를 구현
  const queue = [];
  let head = 0;

  // 시작점(2) 찾기 및 벽(0) 초기화
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j]);
        dist[i][j] = 0; // 목표 지점 거리는 0
      } else if (grid[i][j] === 0) {
        dist[i][j] = 0; // 원래 갈 수 없는 땅도 거리는 0
      }
    }
  }

  // 상, 하, 좌, 우 이동을 위한 방향 벡터
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  // BFS 탐색 시작
  while (head < queue.length) {
    const [x, y] = queue[head++]; // queue.shift() 대신 포인터를 이동해 O(1) 유지

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      // 지도를 벗어나지 않는지 확인
      if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
        // 갈 수 있는 땅(1)이고 아직 방문하지 않은 곳(-1)이라면
        if (grid[nx][ny] === 1 && dist[nx][ny] === -1) {
          dist[nx][ny] = dist[x][y] + 1; // 이전 칸 거리 + 1
          queue.push([nx, ny]);
        }
      }
    }
  }

  let result = "";
  for (let i = 0; i < n; i++) {
    result += dist[i].join(" ") + "\n";
  }
  console.log(result.trim());
}

solve();
