import React from 'react';
import { Link } from 'react-router-dom';
import '../../style/css/style.css';

const BoardCard = (props) => {
  const title = props.title;
  const uptime = props.uptime;
  const content = props.content;
  const click = props.click;
  const thumb = props.thumb;

  return (
    <div className="card padding-bottom-lg">
      <div className="text-md card-title"><strong>{title}</strong></div>
      <br/>
      <div className="text-md ">{content}</div>
      <div className="text-sm position-left">{click}/{thumb}</div>
      <div className="text-sm position-right">{uptime}</div>
    </div>
  );
}

export default BoardCard;