import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import '../../style/css/style.css';

const Board = (props) => {
  const title = props.title;
  const board = `/noticeboard/${title}`;
  return (
    <div className="board">
      <Grid container className="board-title text-lg underline ">
        <Grid item lg={6}>
          <strong>{title}</strong>
        </Grid>
        <Grid item lg={4}></Grid>
        <Grid item lg={2} className="padding-left-sm">
          <p className="text-sm "><Link className="link-black link-nonunderline" to={board}>더보기+</Link></p>
        </Grid>
      </Grid>
      <div className="board-body ">
        <Grid container className="board-item bottom-space-sm" >
          <Grid item lg={6}>
            <Link className="board-item-title link-black link-nonunderline ">게시글 제목</Link>
          </Grid>         
          <Grid item lg={6}>
            <p className="position-right board-item-sub">좋아요/댓글 수</p>
          </Grid>
        </Grid>
        <Grid container className="board-item bottom-space-sm" >
          <Grid item lg={6}>
            <Link className="board-item-title link-black link-nonunderline ">게시글 제목</Link>
          </Grid>         
          <Grid item lg={6}>
            <p className="position-right board-item-sub">좋아요/댓글 수</p>
          </Grid>
        </Grid>
        <Grid container className="board-item bottom-space-sm" >
          <Grid item lg={6}>
            <Link className="board-item-title link-black link-nonunderline ">게시글 제목</Link>
          </Grid>         
          <Grid item lg={6}>
            <p className="position-right board-item-sub">좋아요/댓글 수</p>
          </Grid>
        </Grid>
        <Grid container className="board-item bottom-space-sm" >
          <Grid item lg={6}>
            <Link className="board-item-title link-black link-nonunderline ">게시글 제목</Link>
          </Grid>         
          <Grid item lg={6}>
            <p className="position-right board-item-sub">좋아요/댓글 수</p>
          </Grid>
        </Grid>
        <Grid container className="board-item bottom-space-sm" >
          <Grid item lg={6}>
            <Link className="board-item-title link-black link-nonunderline ">게시글 제목</Link>
          </Grid>         
          <Grid item lg={6}>
            <p className="position-right board-item-sub">좋아요/댓글 수</p>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Board;