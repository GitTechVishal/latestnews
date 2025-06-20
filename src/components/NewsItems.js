//import React from 'react'

// export default class NewsItems extends Component {
//   render() {
const NewsItems = (props) => {
let { title, description, imageUrl, newsUrl , author, date, source } = props;
    return (
      <div className="my-3">
        <div className="card" >
          
          <div style={{display:"flex", justifyContent:"flex-end", position:"absolute", right:"0"}
        }>
          
          {/* <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex:"1", left:"90%"}}>{source}</span> */}
          <span className="badge rounded-pill bg-danger" >{source}</span>
          </div>
          <img
            src={!imageUrl ? "/logo192.png" : imageUrl}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read More{" "}
            </a>
          </div>
        </div>
      </div>
      
    );
  }
//}
export default NewsItems
