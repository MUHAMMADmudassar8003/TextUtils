import React from 'react';

export default function Alert(props) {
  const capitalized = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    <div>
      {props.alert && ( // Corrected the typo here
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
          <strong>{capitalized(props.alert.type)}</strong>: {props.alert.msg}
         
        </div>
      )}
    </div>
  );
}
