import React, { useState } from "react";

const Accordion = ({ items }) => {
  //State SetState React hook Declaration
  const [activeIndex, setActiveIndex] = useState(null);

  const renderedItems = items.map((item, index) => {
    const onTitleClick = (index) => {
      setActiveIndex(index);
    };
//just return
    return (
      <React.Fragment key={index}>
        <div className="title active" onClick={() => onTitleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className="content active">
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return (
    <div className="ui styled accordion">
      {renderedItems}
      <h1>{activeIndex}</h1>
    </div>
  );
};
export default Accordion;
