import React from "react";

interface ISquareProps {
  onClick: () => void;
  value: string;
}

export default class Square extends React.Component<ISquareProps> {
  render() {
    return (
      <button className="square" onClick={this.props.onClick}>
        {this.props.value}
      </button>
    );
  }
}
// export function Square(props) {
//   return (
//     <button className="square" onClick={props.onClick}>
//       {props.value}
//     </button>
//   );
// }
