import React from 'react';
import { Link } from 'react-router-dom';
import '../../style/css/style.css';

const Board = (props) => {
  const title = props.title;
  const board = `/noticeboard/${title}`;
  return (
    <div className="board">
      <div className="board-title text-lg underline">
        <strong>{title}</strong>
        <p className="text-sm position-right "><Link className="link-black link-nonunderline" to={board}>더보기+</Link></p>
      </div>
      <div className="board-body">
        <div className="board-item">
          <Link  className="board-item-title link-black link-nonunderline position-left">게시글 제목</Link>
          <p className="position-right board-item-sub">좋아요/댓글 수</p>
        </div>
        <br />
        <div className="board-item">
          <Link className="board-item-title link-black link-nonunderline position-left">게시글 제목</Link>
          <p className="position-right board-item-sub">좋아요/댓글 수</p>
        </div>
        <br />
        <div className="board-item">
          <Link className="board-item-title link-black link-nonunderline position-left">게시글 제목</Link>
          <p className="position-right board-item-sub">좋아요/댓글 수</p>
        </div>
        <br />
        <div className="board-item">
          <Link className="board-item-title link-black link-nonunderline position-left">게시글 제목</Link>
          <p className="position-right board-item-sub">좋아요/댓글 수</p>
        </div>
        <br />
        <div className="board-item">
          <Link className="board-item-title link-black link-nonunderline position-left">게시글 제목</Link>
          <p className="position-right board-item-sub">좋아요/댓글 수</p>
        </div>
        <br/>
        <br/>
      </div>
    </div>
  );
}

export default Board;