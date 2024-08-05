// --------------------------------------------------------------------------
// ✅ 테스트 시나리오
// --------------------------------------------------------------------------
// - [ ] 사용자 이름이 표시됩니다.
//   - 문서에 사용자 이름을 포함한 요소가 표시되는 지 확인합니다.
// - [ ] 관리자 권한을 가진 사용자라면 수정 버튼을 표시합니다.
//   - 수정 버튼이 문서에 표시되는 지 확인합니다.
// - [ ] 관리자 권한이 없는 사용자라면 수정 버튼이 표시되지 않습니다.
//   - 수정 버튼이 문서에 표시되지 않는 지 확인합니다.
// --------------------------------------------------------------------------

import { UserType } from '@/@types/entries.d';

UserAccount.propTypes = {
  user: UserType,
};

/**@type {({ user }: { user: { id: string, name: string, isAdmin?: boolean } }) => JSX.Element} */
function UserAccount({ user }) {
  return (
    <>
      <h2>사용자 프로필</h2>
      {user.isAdmin && <button type="button">수정</button>}
      <p>
        <b>이름</b>: {user.name}
      </p>
    </>
  );
}

export default UserAccount;
