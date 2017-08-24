import React, { PropTypes } from 'react';


const styles = {
  display: 'inline-block',
  transform: 'rotate(-7deg)',
  WebkitTransform: 'rotate(-7deg)'
};



const CardDragPreview = (props) => {
  styles.width = `${props.card.clientWidth || 243}px`;
  styles.height = `${props.card.clientHeight || 243}px`;
  const DynamicComponent = props.cardComponent;
  return (
    <div style={styles}>
      <DynamicComponent item={props.card.item} />
    </div>
  );
};

CardDragPreview.propTypes = {
  card: PropTypes.object,
  cardComponent: PropTypes.any.isRequired
};

export default CardDragPreview;
