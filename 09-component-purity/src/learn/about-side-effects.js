// --------------------------------------------------------------------------
// ✅ 부수 효과란?
// --------------------------------------------------------------------------
// - [x] 부수 효과(Side effects)란? vs. 부작용 (Negative Side sffects)
// - [x] 부수 효과 없는 함수 코드의 장점
// - [x] 부수 효과, 과연 나쁜 것일까? 🧐 (부수 효과란? 사용자와 상호작용: 웹 API 활용, 접근성 준수 등...)
// --------------------------------------------------------------------------

// 리액트 관점
// 순수 = 컴포넌트 렌더링 (동일 입력 -> 동일 출력)
// 부수 효과 = 사용자와 상호작용: 웹 API 활용, 접근성 준수 등 - 이벤트 핸들러, 이펙트 함수

// --------------------------------------------------------------------------

(function () {
  // 사용자의 인원 갯수를 반환하는 함수
  // - 네트워크 요청/응답 기능 (액션)
  // - 응답받은 결과를 출력하는 기능 (계산)
  async function getUsersCount(endpoint) {
    // 계산 영역 + 액션 취하는 영역 구분 짓지 않음
    const response = await fetch(endpoint);
    const jsonData = await response.json();
    return jsonData.length;
  }

  // 동일 입력임에도 결과가 동일한가?
  // 만약 동일하지 않다면? 이 함수는 순수하지 않다.
  let endpoint = 'https://jsonplaceholder.typicode.com/users';
  getUsersCount(endpoint).then((data) => console.log(data));

  // endpoint = 'https://jsonplaceholder.typicode.com/posts';
  getUsersCount(endpoint).then((data) => console.log(data));

  // --------------------------------------------------------------------------

  // 예측 가능한 부분(순수 함수)와 예측이 어려운 부분(사이드 이펙트)으로 구분

  // 1. 예측이 어려운 부분(사이드 이펙트) 처리 기능(함수) 분리
  //    사이드 이펙트 함수
  async function fetchUsers(endpoint) {
    const response = await fetch(endpoint);
    const jsonData = await response.json();
    return jsonData;
  }

  // 2. 예측 가능한 부분(순수 함수) 처리 기능(함수) 분리
  //    순수 함수
  function getUserLength(users) {
    return users.length;
  }

  async function demo() {
    const users = await fetchUsers(
      'https://jsonplaceholder.typicode.com/users'
    );
    const userCount = getUserLength(users);
    console.log({ userCount });
  }

  demo();
});

// 리액트 컴포넌트는 순수 해야 한다.
// - 컴포넌트 내부에 사이드 이펙트 로직을 포함해서는 안된다.

// 그러면? 시간의 흐름에 따라 데이터가 변경되는 것은 어디서 처리되어야 하는가?
// - 이벤트 핸들러
// - 이펙트 함수
// function Component(props) {
//   // 순수한 로직만 작성해야 한다.
//   // 이 내부에 사이드 이펙트 로직이 포함되서는 안된다.

//   return <></>;
// }

function sumPure(x, y, z) {
  return x + y + z;
}

console.log(sumPure(1, 2, 3));
console.log(sumPure(1, 2, 3));

// ----------------------------------------

let a = 9;

function sumInpure(x, y, z) {
  return x + y + z + ++a;
}

console.log(sumInpure(1, 2, 3));
console.log(sumInpure(1, 2, 3));
