import React from "react";
import PropTypes from "prop-types";

// Function to format the pokemon id
const formatId = (id) => {
 return String(id).padStart(3, '0');
};

const PokemonThumb = ({ id, image, name, type, callback }) => {
 // Combine the type and 'thumb-container' class names
 const combinedClassNames = `${type} thumb-container`;

 return (
    <div className={combinedClassNames}>
      <div className="number">
        <small>#{formatId(id)}</small>
      </div>
      <img src={image} alt={name} />
      <div className="detail-wrapper">
        <h3>{name}</h3>
        <small className={combinedClassNames}>Type: {type}</small>
      </div>
    </div>
 );
};

// Define the prop types for the PokemonThumb component
PokemonThumb.propTypes = {
 id: PropTypes.number.isRequired,
 image: PropTypes.string.isRequired,
 name: PropTypes.string.isRequired,
 type: PropTypes.string.isRequired,
 callback: PropTypes.func,
};

export default PokemonThumb;
