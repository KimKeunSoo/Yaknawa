import React from 'react';
import { Link } from 'react-router-dom';
import '../../style/css/style.css';

const BoardCard = (props) => {
  const title = props.title;
  const uptime = props.uptime;
  const content = props.content;
  const click = props.click;
  const thumb = props.thumb;
  const num = "1";
  const theme = props.theme;
  const link = `/noticeread/${theme}/${num}`
  return (
    <div className="card padding-bottom-lg">
      <div className="text-md card-title"><strong><Link to={link} className="link-nonunderline link-black">{title}</Link></strong></div>
      <br/>
      <div className="text-md ">{content}</div>
      <div className="text-sm position-left">{click}/{thumb}</div>
      <div className="text-sm position-right">{uptime}</div>
    </div>
  );
}

export default BoardCard;