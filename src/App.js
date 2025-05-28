import "./App.css";
//? Following is the Class based Component.
import React, {useState} from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import {BrowserRouter as Router,Route,Routes,} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
// export default class App extends Component {
const App =  () => {

  const [language, setLanguage] = useState("en"); // Lifted state
  const pageSize = 10;
  const apikey = process.env.REACT_APP_NEWS_API;
  const [progress , setProgress] = useState(0);
    // setProgress = (progress) => {
      
    //   this.setState({progress: progress});
    // }
  // render() {
    return (
      <div>
     
      <Router>
       <LoadingBar color='#f11946' progress={progress} height={3}  />
      
      <NavBar language={language} setLanguage={setLanguage}  />
      <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} apikey={apikey} key="general" pageSize={pageSize} country="us" category="general" language={language} />} />
          <Route exact path="/business" element={<News setProgress={setProgress} apikey={apikey} key="business" pageSize={pageSize} country="us" category="business" language={language}/>} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apikey={apikey} key="entertainment" pageSize={pageSize} country="us" category="entertainment" language={language} />} />
          <Route exact path="/health" element={<News  setProgress={setProgress} apikey={apikey} key="health" pageSize={pageSize} country="us" category="health" language={language}/>} />
          <Route exact path="/science" element={<News setProgress={setProgress} apikey={apikey} key="science" pageSize={pageSize} country="us" category="science" language={language} />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} apikey={apikey} key="sports" pageSize={pageSize} country="us" category="sports" language={language}/>} />
          <Route exact path="/technology" element={<News setProgress={setProgress} apikey={apikey} key="technology" pageSize={pageSize} country="us" category="technology" language={language}/>} />
        </Routes>
      </Router>
      </div>
    );
  // }
};

export default App;