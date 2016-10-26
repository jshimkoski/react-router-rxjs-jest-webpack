import React, {Component, PropTypes} from 'react';

const JsonResult = ({results}) => {

  const jsonData = results || [];

  const loopResults = () =>
    jsonData.map(({ id, title, body }) => (
      <li className="list-group-item" key={id + 2}>
        <h4 className="list-group-item-heading" key={id}>{title}</h4>
        <p className="list-group-item-text" key={title}>{body}</p>
      </li>
    ));

  const heading = () => (jsonData.length > 0) ? (<h3>Results:</h3>) : null;

  return (
    <div>
      {heading()}
      <ul className="list-group">
        {loopResults()}
      </ul>
    </div>
  );

};

export default JsonResult;