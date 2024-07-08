---
title: "[소프티어] 나무 조경 Python"
date: "2024-07-08T18:00:00"
type: blog
description: 알고리즘 종류를 조금 더 빠르게 파악했으면...
category: 
  - algorithm
  - combination
  - python
thumbnail: "./thumbnail.png"
---

### 1. 문제
---
[현대 소프티어: Lv3. 나무 조경](https://softeer.ai/practice/7594)


### 2. 아이디어 도출 과정
---
`(잘못된 접근)`  
문제를 읽자 마자 머릿속에서 든 생각은 상하좌우 탐색 알고리즘이 떠올랐다.  
2차원 모양의 맵을 그리는 문제는 대게 탐색 문제였기에 머릿속에서는 빠르게 DFS/BFS 알고리즘으로 이 문제를 바라보고 있었다.

그래서, 방문기록(Visited) 2차원 기록지를 전역에서 함께 공유되고, depth가 2이면 종료되는 bfs를 여러번 시행해야하나..?  
라는 글로 적어도 난해한 뚱딴지 같은 생각을 계속하고 있었다.
위의 생각에 빠져서, 내가 목표한 시간(30분 안에 풀기)를 실패했다.

`(올바른 접근)`  
자세히 살펴보니 nxn 크기의 지도의 범위가 고작 2 <= n <= 4 밖에 되지 않음을 알게되었고,  
문제해결의 실마리를 얻을 수 있었다. 모든 조합 쌍을 구하고, 문제에 최적인 조합을 골라내도 시간 복잡도가 크게 증가 되지 않음을 알게 되었고 아래의 과정으로 정리할 수 있었다.  

(n = 4, 4x4 지도에서 24쌍의 나무 묶음을 만들 수 있고 이 중 4개의 조합을 구하는데 **24 * 24 * 24 * 24 ≈ 33만** 정도 밖에 걸리지 않는다.)

1. 나무들을 2쌍 씩 묶을 수 있는 모든 경우의 수 구하기
2. 묶음 중에서 모든 4개의 조합구하기
    (n=2, 즉 2x2 맵에서는 2쌍의 묶음이 2개밖에 나오지 않으므로 2개의 조합만 구함)
3. 조건에 부적절한 조합 걸러내기
    조합은 공유된 구역을 가질 수 없다
4. 남은 조합들 중 합이 가장 큰 조합 고르기
5. 가장 큰 조합의 나무 높이 합 구하기

의 과정으로 정리할 수 있었다.


### 3. 코드
---
```py:title=나무조경.py
from itertools import combinations

n = int(input())
trees = [list(map(int, input().split())) for _ in range(n)]

#2쌍의 묶음 조합 구하기. 오른쪽, 아래
dx = [1,0]
dy = [0,1]

twoTrees = []
for x in range(n):
    for y in range(n):
        for i in range(2):
            nx = x + dx[i]
            ny = y + dy[i]
            if nx < 0 or ny < 0 or nx > n-1 or ny > n-1:
                continue
            twoTrees.append([[x,y],[nx,ny]])

#조합내에 값 계산하기
def getValue(treeComb):
    total = 0
    for twoTree in treeComb:
        total += trees[twoTree[0][0]][twoTree[0][1]]
        total += trees[twoTree[1][0]][twoTree[1][1]]
            
    return total

# 조합에서 나무가 겹치는지 확인
def isDuplicate(treeComb):

    checker1 = []
    checker2 = set()
    for tree1, tree2 in treeComb:
        checker2.add((tree1[0],tree1[1]))
        checker2.add((tree2[0],tree2[1]))
        checker1.append(tree1)
        checker1.append(tree2)

    return len(checker1) != len(checker2)
        
#2쌍 묶음 조합중에서 4개의 조합 목록 구하기
if n == 2:
    treeCombs = combinations(twoTrees, 2)
else:
    treeCombs = combinations(twoTrees, 4)

maxValue = 0
for treeComb in treeCombs:
    if isDuplicate(treeComb):
        continue
    maxValue = max(maxValue, getValue(treeComb))
    
print(maxValue)
```

### 4. 알게된 점
---
문제를 풀 때, 어떤 알고리즘과 절차지향적인 과정으로 접근해야하는지를 머릿속에서 빠르게 설계하는게 중요한 것 같다.  
2차원 좌표 문제만 보면 상하좌우 탐색문제로 접근하는 생각을 먼저 떠올리는데 다음과 같은 풀이도 있으니 조금 더 사고를 열고 생각하는 연습을 해야겠다.

추가적으로, 여러가지 CASE 목록값들 중 최적은 값을 찾을 때 48~52줄 과 같이 설계를 하니깐 사고가 명료해져서 좋았다.