// ReactDOM.render(
//   <ul>
//     <li>Thing 1</li>
//     <li>Thing 2</li>
//   </ul>,
//   document.getElementById("root")
// );
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         {/* Change code below this line */}

//         <Welcome name="World " />
//         <MainContent />
//         {/* Change code above this line */}
//       </div>
//     );
//   }
// }

// class Welcome extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         {/* Change code below this line */}
//         <p>
//           Hello, <strong>{this.props.name}</strong>!
//         </p>

//         {/* Change code above this line */}
//       </div>
//     );
//   }
// }
// const h1=document.createElement("h1")
// h1.textContent="this is an imperative way to program"
// h1.className='header'
// document.getElementById("root").append(h1)

// function MainContent() {
//   return <h1>Hello</h1>;
// }
// ReactDOM.render(
//   <div>
//     <App />
//     <MainContent />
//   </div>,
//   document.getElementById("root")
// );

// const navbar = (
//   <nav>
//     <h1>Bob's Bistro</h1>
//     <ul>
//       <li>Menu</li>
//       <li>About</li>
//       <li>Contact</li>
//     </ul>
//   </nav>
// );

// ReactDOM.render(navbar, document.getElementById("root"));

import React from "react";
import ReactDOM from "react-dom";

const page = (
  <div>
    <img src="./REACT-JS-KOCHI.png" width="40px" />
    <h1>Fun fact about React</h1>
    <ul>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walker</li>
      <li>Has well over 100K stars on GitHub</li>
      <li>Is maintained by Facebook</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
  </div>
);

console.log(page)

ReactDOM.render(page,  document.getElementById("root"))
