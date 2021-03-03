import React from 'react';
import { Link } from 'react-router-dom';
import '../../style/css/style.css';

const Board = (props) => {
  const pills = props.pills;
  const low = props.low;
  const high = props.high;
  return (
    <div className="card">
      <div className="text-lg card-title"><strong>{pills}</strong></div>
      <br/>
      <div className="text-md ">low ~ high</div>
    </div>
  );
}

export default Board;