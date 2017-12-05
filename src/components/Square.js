import React from 'react';
import ReactDOM from 'react-dom';

export default class Square extends React.Component {
    render() {
      return (
        <button className="square" onClick={this.props.onClick()}>
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