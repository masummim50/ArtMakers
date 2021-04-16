import React from 'react';

const FooterColumn = (props) => {
  return (
    <div className="col-md-3">
      {
        props.menuTitle ? <h2 style={{color:'aqua'}}>{props.menuTitle}</h2>: <h2>""</h2>
      }
      <ul className="list-unstyled">
        {
          props.menuItems.map(item => <li><a className="text-decoration-none text-white" href={item.link}>{item.name}</a></li>)
        }
      </ul>
    </div>
  );
};

export default FooterColumn;