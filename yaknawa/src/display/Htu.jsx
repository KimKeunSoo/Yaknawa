import React from "react";
import "../style/css/style.css";
import setTitle from "../services/set-title";

const Home = (props) => {
  setTitle("커뮤니티 이용안내");
  return (

    <div className="body">
      <p className="text-sm htu">안녕하세요? 약나와입니다.</p>
      <p className="text-sm  htu">
        아래와 같이 커뮤니티 이용에 관한 안내를 해드리니 참고하시기 바랍니다.
        </p>
      <p className="htu">
        <strong>1. 게시물의 저작권과 책임</strong>
      </p>
      <p className="text-sm htu">
        - 게시판에 게시한 게시물의 저작권은 게시자 본인에게 있습니다.
        </p>
      <p className="text-sm htu">
        - 작성한 게시물로 인해 발생되는 문제에 대해서는 해당 게시물을 게시한
        게시자에게 책임이 있습니다.
        </p>
      <p className="text-sm htu">
        - 게시판에 작성된 게시물이 타인의 저작권, 프로그램 저작권 등을 침해할
        경우 이에 대한 민, 형사상의 책임은 글 게시자에게 있습니다. 만일 이를
        이유로 회사가 타인으로부터 손해배상청구 등의 이의 제기를 받은 경우
        해당 게시자는 그로 인해 발생되는 모든 손해를 부담해야 합니다.
        </p>
      <p className="htu">
        <strong>2. 게시물 삭제 기준</strong>
      </p>
      <p className="text-sm htu">
        - 타인에게 수치심, 혐오감, 불쾌감을 일으키는 게시물
        </p>
      <p className="text-sm htu">
        - 타인의 사생활 침해, 명예훼손, 개인정보(이름, 주민번호, 연락처,
        사진)등을 게시한 경우
        </p>
      <p className="text-sm htu">- 타인을 협박, 위협하는 게시물</p>
      <p className="text-sm htu">
        - 해당 게시판의 주제와 동떨어진 내용으로 지속적으로 분란을 야기하는
        게시물
        </p>
      <p className="text-sm htu">
        - 타인의 게시물을 무단 캡처 후, 본인의 게시물에 첨부하여 지속적으로
        분란을 야기하는 게시물
        </p>
      <p className="text-sm htu">
        - 홍보성 타 사이트 링크 포함 및 광고 게시물
        </p>
      <p className="text-sm htu">- 음란성 게시물</p>
      <p className="text-sm htu">- 아동·청소년 대상 음란성 게시물</p>
      <p className="text-sm htu">- 의미없는 내용, 도배성 게시물</p>
      <p className="text-sm htu">- 욕설, 비방 등 불량 게시물과 도배글</p>
      <p className="text-sm htu">- 저작권 상 문제가 될 수 있는 게시물</p>
      <p className="text-sm htu">- 아이디어와 사진을 도용하는 게시물</p>
    </div>

  );
};

export default Home;
