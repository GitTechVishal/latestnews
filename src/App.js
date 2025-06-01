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
      <div >
     
      <Router>
       <LoadingBar color='#f11946' progress={progress} height={3}  />
      
      <NavBar language={language} setLanguage={setLanguage}  />
      <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} apikey={apikey} key="top" pageSize={pageSize} country="us" category="top" language={language} />} />
          <Route exact path="/business" element={<News setProgress={setProgress} apikey={apikey} key="business" pageSize={pageSize} country="us" category="business" language={language}/>} />
          <Route exact path="/domestic" element={<News setProgress={setProgress} apikey={apikey} key="domestic" pageSize={pageSize} country="us" category="domestic" language={language}/>} />
         <Route exact path="/education" element={<News setProgress={setProgress} apikey={apikey} key="education" pageSize={pageSize} country="us" category="education" language={language}/>} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apikey={apikey} key="entertainment" pageSize={pageSize} country="us" category="entertainment" language={language} />} />
         <Route exact path="/environment" element={<News setProgress={setProgress} apikey={apikey} key="environment" pageSize={pageSize} country="us" category="environment" language={language}/>} />
         <Route exact path="/food" element={<News setProgress={setProgress} apikey={apikey} key="food" pageSize={pageSize} country="us" category="food" language={language}/>} />
         <Route exact path="/health" element={<News  setProgress={setProgress} apikey={apikey} key="health" pageSize={pageSize} country="us" category="health" language={language}/>} />
          <Route exact path="/lifestyle" element={<News  setProgress={setProgress} apikey={apikey} key="lifestyle" pageSize={pageSize} country="us" category="lifestyle" language={language}/>} />
         <Route exact path="/politics" element={<News  setProgress={setProgress} apikey={apikey} key="politics" pageSize={pageSize} country="us" category="politics" language={language}/>} />
         <Route exact path="/science" element={<News setProgress={setProgress} apikey={apikey} key="science" pageSize={pageSize} country="us" category="science" language={language} />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} apikey={apikey} key="sports" pageSize={pageSize} country="us" category="sports" language={language}/>} />
          <Route exact path="/technology" element={<News setProgress={setProgress} apikey={apikey} key="technology" pageSize={pageSize} country="us" category="technology" language={language}/>} />
          <Route exact path="/tourism" element={<News setProgress={setProgress} apikey={apikey} key="tourism" pageSize={pageSize} country="us" category="tourism" language={language}/>} />
          <Route exact path="/world" element={<News setProgress={setProgress} apikey={apikey} key="world" pageSize={pageSize} country="us" category="world" language={language}/>} />
          <Route exact path="/other" element={<News setProgress={setProgress} apikey={apikey} key="other" pageSize={pageSize} country="us" category="other" language={language}/>} />
        
        </Routes>
      </Router>
      </div>
    );
  // }
};

export default App;