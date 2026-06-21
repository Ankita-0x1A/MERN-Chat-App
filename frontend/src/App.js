// import './App.css';
// // import { Route } from "react-router-dom/cjs/react-router-dom.min";
// import {Route} from "react-router-dom";
// import HomePage from "./pages/HomePage";
// import ChatPage from "./pages/ChatPage";

// function App() {
//   return (
//     <div className="App">
//       <Route path="/" component={HomePage} exact />
//       <Route path="/chats" component={ChatPage} />
//     </div>
//   );
// }

// export default App;

import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";

function App() {
  return (
    <Router> {/* 🔥 THIS WAS MISSING */}
      <div className="App">
        <Route path="/" component={HomePage} exact />
        <Route path="/chats" component={ChatPage} />
      </div>
    </Router>
  );
}

export default App;
