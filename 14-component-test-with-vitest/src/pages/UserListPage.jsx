// --------------------------------------------------------------------------
// ✅ 테스트 시나리오
// --------------------------------------------------------------------------
// - [ ] users 속성(prop)이 빈 배열인 경우, 표시할 사용자 정보가 없습니다.
//   - 문서에 "표시할 사용자 정보가 없습니다. 😳" 단락이 표시되는 지 확인합니다.
// - [ ] users 속성으로 전달된 사용자 목록을 화면에 표시합니다.
//   - 문서에 표시된 목록의 항목 갯수와 사용자 목록 항목 갯수가 일치하는 지 확인합니다.
//   - 사용자 목록을 순환해 각 링크의 href 속성 값에 사용자 id 정보를 표함하는 지 확인합니다.
// --------------------------------------------------------------------------

import { UserType } from '@/@types/entries.d';
import { arrayOf } from 'prop-types';

UserList.propTypes = {
  users: arrayOf(UserType).isRequired,
};

function UserList({ users }) {
  if (users.length === 0) {
    return <p>표시할 사용자 정보가 없습니다. 😳</p>;
  }

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <a href={`/users/${user.id}`}>{user.name}</a>
        </li>
      ))}
    </ul>
  );
}

export default UserList;
