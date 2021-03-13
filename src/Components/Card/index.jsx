import React from 'react';
import './index.css';

function Card(props) {
  console.log(props);
  // destructure 
  const { title, style, bordred = false, action, children, cover } = props;
  return (
    <div className={`card ${bordred ? 'bordred' : null}`} style={style}>
      {title && (
        <div className="card-title"> {title} </div>
      )}
      <div> {cover} </div>
      <div className="card-body">{children}</div>
      {action && (
        <div className="card-action" >{action}</div>
      )}
    </div>
  );
}
  

export default Card;
