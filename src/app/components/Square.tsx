import React from 'react';

type squareProps = {
  onClick: () => void;
  value: string;
};

function Square(props: squareProps): JSX.Element {
  return (
    <button
      className="square"
      onClick={() => {
        props.onClick();
      }}
    >
      {props.value}
    </button>
  );
}

export default Square;
