import React, { PropTypes } from 'react';



const Card = (props) => {
  const { style, item } = props;

  return (
    <div style={style} className="item" id={style ? item.id : null} >
      <div className="item-name">{item.title}</div>
      <div className="item-container">
        <div className="item-avatar-wrap">
          <img src={`https://randomuser.me/api/portraits/med/men/${item.id}.jpg`} alt="" />
        </div>
        <div className="item-content">
          <div className="item-author">{`${item.first_name} ${item.last_name}`}</div>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <div className="item-perfomers">
        <div className="add-perfomers">
          <a href="#"><img  /></a>
          <div className="perfomer">
            <img
              src={`https://randomuser.me/api/portraits/thumb/men/${item.id + 1}.jpg`}
              alt="Perfomer"
            />
          </div>
          <div className="perfomer">
            <img
              src={`https://randomuser.me/api/portraits/thumb/men/${item.id + 2}.jpg`}
              alt="Perfomer"
            />
          </div>
          <div className="perfomer">
            <img
              src={`https://randomuser.me/api/portraits/thumb/men/${item.id + 3}.jpg`}
              alt="Perfomer"
            />
          </div>
        </div>
        <div className="delete-perfomers">
          <a href="#"><img  /></a>
          <div className="perfomer">
            <img
              src={`https://randomuser.me/api/portraits/thumb/men/${item.id + 4}.jpg`}
              alt="Perfomer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  item: PropTypes.object.isRequired,
  style: PropTypes.object
};

export default Card;
