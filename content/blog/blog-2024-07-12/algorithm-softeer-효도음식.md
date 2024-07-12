---
title: "[소프티어] 효도 음식 Python"
date: "2024-07-12T18:00:00"
type: blog
description: DP 알고리즘은 어렵지 않은데, 여러번 써야했던 문제..
category: 
  - algorithm
  - dynamic programming
  - python
thumbnail: "./thumbnail.png"
---

### 1. 문제
---
[현대 소프티어: Lv3. 효도 음식](https://softeer.ai/practice/7367)

<br/>
<br/>

### 2. 아이디어 도출 과정
---
위 문제는 아래와 같이 숫자가 주어지면  

6  
4 -6 1 2 -2 3

2개의 숫자 그룹 만들어서 합산 된 값이 가장 크게 만들어줘야 했다. 즉, [4], [1,2,-2,3] 와 같이 2그룹으로 나눠서 합한 8이 정답이 된다.  
이 문제를 보자 마자 [백준의 연속합: 1912](https://www.acmicpc.net/problem/1912)문제가 떠올랐다. 이 문제는 `DP`를 이용하여 수열에서 `연속으로 나열된 숫자합`이 최대가 될 때를 구하는 문제이다.

수열의 연속된 숫자의 합이 최대가 되는 점화식은 아래와 같이 만들 수 있다.
> `dp[i] = max(dp[i], dp[i-1] + dp[i])`  
여기서 dp[i]는 i열까지의 연속으로 나열된 숫자의 최댓값을 나타낸다.
쉽게 생각하면 이전까지의 합산에서 현재값을 더해 나가는데, 그 합이 현재의 값보다 작다면 현재의 값부터 다시 시작해나가는 원리라고 생각할 수 있다.


이 문제의 경우, 연속으로 나열된 숫자의 합이 최대가되는 그룹을 2개 구해야한다. 그래서 내가 생각한 방법은 아래와 같다.

1. 정방향으로 DP를 돌려 연속으로 나열된 숫자합의 최대값을 구한다.
2. 역방향으로 DP를 돌려 연속으로 나열된 숫자합의 최대값을 구한다.
3. 적당한 지점(cusor)을 기준으로 정방향 DP에서 좌측의 최대값과 역방향 D에서 우측의 최대값을 구하여 두 값을 더한다.

<br/>
<br/>

### 3. 코드
---
`첫번째 시도: 시간초과`

```python:title=시간초과_코드
#입력 
n = int(input())
foods = list(map(int, input().split()))

#정방향DP와 역방향DP
minValue = -1001
leftDp = foods[:]
leftDp[0] = foods[0]
for i in range(1, len(foods)):
    leftDp[i] = max(leftDp[i], leftDp[i-1] + leftDp[i])

rightDp = foods[:]
rightDp[-1] = foods[-1]
for i in range(len(foods)-2, -1, -1):
    rightDp[i] = max(rightDp[i], rightDp[i+1] + rightDp[i])

# 커서 왼편 그룹에서의 최대값과 커서 오른편 그룹에서의 최대값을 더하고, 그 중에서 가장 큰 합산의 값을 출력
result = []
for cusor in range(1, len(foods)-1):
    result.append(max(leftDp[:cusor]) + max(rightDp[cusor+1:]))
    
print(max(result))
```
정방향DP(leftDp)  : [4, 4, 4, 4, 4, 4]  
.　　　　　　　　　⇨  
역방향DP(rightDp) : [4, 4, 4, 3, 3, 3]  
.　　　　　　　　　　　　　 　　　⇦    
위의 2개의 DP에서 커서가 1 ~ n-1사이를 움직이면서 형성된 좌측 그룹과 우측 그룹을 문제의 2개의 묶음으로 볼 수 있게된다. 좌측은 정뱡향 DP중 최대값을 우측은 역방향 DP중 최대값을 고르게 된다.

그러나,  
이 문제의 시간제한은 python 1초이다. 즉, 약 2000만 연산 횟수를 넘어서면 안된다.  
n은 최대 10만까지 가능하독 조건이 제시되어있다...
코드의 19~20번째줄에서 커서를 이동시켜며 양옆 그룹내에서 최대값을 구하기 위해 각각의 그룹에 MAX 함수를 이용하며 구하고 있다.  
시간복잡도를 생각해보면 루프에서 O(n-2) max메서드에서 O(n/2)+O(n/2)임으로 총 O(n^2) 시간이 소요된다.
즉 10만 x 10만 = 100억이 소요되어서 바로 시간초과 에러가 발생했다.

`두번쨰 시도: 시간초과 해결/정답` 
```py:title=풀이_코드
#입력 
n = int(input())
foods = list(map(int, input().split()))

minValue = -1001
leftDp = foods[:]
leftDp[0] = foods[0]
for i in range(1, len(foods)):
    leftDp[i] = max(leftDp[i], leftDp[i-1] + leftDp[i])

rightDp = foods[:]
rightDp[-1] = foods[-1]
for i in range(len(foods)-2, -1, -1):
    rightDp[i] = max(rightDp[i], rightDp[i+1] + rightDp[i])

maxValue = leftDp[0] # highlight-line
for cusor in range(1, len(foods)-1): # highlight-line
    if leftDp[cusor] >= maxValue: # highlight-line
        maxValue = leftDp[cusor] # highlight-line
    leftDp[cusor] = maxValue # highlight-line

maxValue = rightDp[-1] # highlight-line
for cusor in range(len(foods)-2, 0, -1): # highlight-line
    if rightDp[cusor] >= maxValue: # highlight-line
        maxValue = rightDp[cusor] # highlight-line
    rightDp[cusor] = maxValue # highlight-line

result = []
for cusor in range(1, len(foods)-1):
    result.append(leftDp[cusor-1] + rightDp[cusor+1])

print(max(result))
```
위의 코드에서 하이라이트된 부분을 추가해서 시간 초과 문제를 해결했다.  
기준 index로 나눠진 2개의 그룹에서 매번 최대값을 찾는데, 그것을 FOR문을 돌면서 계속 탐색할 수 없으니
좌측 그룹에서 오른쪽으로 한칸 나아갈 때마다 최대값을 갱신해주고, 우측 그룹에서는 왼쪽으로 나아갈때마다 최대값을 갱신해줬다.  
위 처럼 세팅을 해두면 기준을 중심으로 바로 왼쪽값과 바로 오른쪽 값만 살펴보면 그 값들이 이미 각각의 그룹에서 최대값을 가지게된다.

<br/>
<br/>

### 4. 알게된 점
---
다이나믹프로그래밍을 이용할때는 DP[i]로 정의한 저 함수가 정확히 어떤의미를 가지는지를 잘 정의하고 생각을 하면, 조금 더 알고리즘 설계 및 사고가 편해지는 것 같다.