import react from "react";
import Text from "./Components/Text";
import { Routes, Route} from "react-router-dom";
import Details from "./Components/Details";
import TextAdd from "./Components/TextAdd";
import TextEdit from './Components/TextEdit'
import CommentEdit from "./Components/CommentEdit";
function App() {
  return (
    
      <div className="main-wrapper">
        <header></header>
        <div className="ui raised very padded text container segment">
        <Routes>
          <Route path="/" element={<Text />} />{" "}
          <Route path="/posts/:id" element={<Details />} />
          <Route path="/textadd" element={<TextAdd />} />
          <Route path="/posts/:id/textedit" element={<TextEdit />} />
          <Route path="/posts/:postId/comments/:id" element={<CommentEdit />} />
          </Routes>
          
          
        </div>
      </div>
    
  );
}

export default App;
