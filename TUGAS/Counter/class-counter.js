// class ClassCounter extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0,
//         };
//     }

//     increaseCount = () => {
//         this.setState({ count: this.state.count + 1 });
//     };

//     decreaseCount = () => {
//         this.setState({ count: this.state.count - 1 });
//     };

//     render() {
//         return (
//             <div>
//                 <h2><strong>{this.state.count}</strong></h2>
//                 <div>
//                     <button onClick={this.decreaseCount}>-1</button>
//                     <button onClick={this.increaseCount}>+1</button>
//                 </div>
//             </div>
//             );
//         }
//     }

//     ReactDOM.render(<ClassCounter />, document.getElementById('class-counter'));