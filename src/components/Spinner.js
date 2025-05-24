//import React from 'react';
import loading from "./loading.gif";
//! Class based Component
// export class Spinner extends Component {
//   render() {
//? Function based Component
const Spinner = () => {
 
    return (
      <div className="text-center">
        <img className="my-3"  src={loading} alt="loading"  style={{ width: "100px", height: "100px" }}/>
      </div>
    );
  }
//}
export default Spinner;
