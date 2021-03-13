
import { Link } from "react-router-dom";
import "../style/css/style.css";
import setTitle from "../services/set-title";

const Home = (props) => {
  setTitle("이용약관");
  return (
    <div className="body">
      <p className="tos">
        <strong>이용악관</strong>
      </p>
      <p className="tos">
        <strong>제1조 (목적)</strong>
      </p>
      <p className="text-sm tos">
        약나와(
          <Link
          to="http://www.yaknawa.com"
          className="link-gray link-nonunderline"
        >
          www.yaknawa.com
          </Link>
          ) 서비스 약관(이하 "본 약관"이라 합니다.)은 약국 관련 제반 서비스(이하
          "서비스"라 합니다.)의 이용과 관련하여 약나와(
          <Link
          to="http://www.yaknawa.com"
          className="link-gray link-nonunderline"
        >
          www.yaknawa.com
          </Link>
          ) 화원과의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을
          목적으로 합니다.
        </p>
      <br />
      <p className="tos">
        <strong>제2조 (회원의 정의)</strong>
      </p>
      <p className="text-sm tos">
        ① 회원이란 "약나와" 제공하는 서비스에 접속하여 본 약관에 따라
        "약나와"의 이용절차에 동의하고 "약나와"에서 제공하는 서비스를 이용하는
        이용자를 말합니다.
        </p>
      <br />
      <p className="tos">
        <strong>제3조 (회원 가입)</strong>
      </p>
      <p className="text-sm tos">
        ① 회원이 되고자 하는 자는 "약나와"에서 정한 가입 양식에 따라
        회원정보를 기입하고 동의하는 버튼을 누르는 방법으로 회원 가임을
        신청합니다.
        </p>
      <p className="text-sm tos">
        ② "약나와"는 제 1항과 같이 회원으로 가입할 것을 신청한 자가 다음 각
        호에 해당하지 않는 한 신청한 자를 회원으로 동록합니다.
        </p>
      <p className="text-sm tos">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. 등록 내용에 허위, 기재누락, 오기가
        있는경우
        </p>
      <p className="text-sm tos">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. 제6조 제3항에 해당하는 회원 자격 제한
        및 정지, 상실을 한 경험이 있었던 경우
        </p>
      <p className="text-sm tos">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. 기타 회원으로 등록하는 것이 회사의
        서비스 운영 및 기술상 현저히 지장이 있다고 판단되는 경우
        </p>
      <p className="text-sm tos">
        ③ 회원가입계약의 성립시기는 "약나와"의 가입신청을 완료한 시점으로
        합니다.
        </p>
      <p className="text-sm tos">
        ④ 회원은 제1항의 회원정보 기재 내용에 변경이 발생한 경우, 즉시
        변경사항을 정정하여 기재하여야합니다.
        </p>
      <br />
      <p className="tos">
        <strong>제4조 (서비스의 제공 및 변경)</strong>
      </p>
      <p className="text-sm tos">
        ① "약나와"는 회원에게 아래와 같은 서비스를 제공합니다.
        </p>
      <p className="text-sm tos">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. 커뮤니티 서비스 (게시판, 포럼, 리뷰,
        정보 등)
        </p>
      <p className="text-sm tos">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. 검색 서비스
        </p>
      <p className="text-sm tos">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. 기타 회사가 자체 개발하거나 다른
        회사와의 협력계약 등을 통해 회원들에게 제공할 일체의 서비스
        </p>
    </div>

  );
};

export default Home;
