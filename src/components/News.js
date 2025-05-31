import React, { useEffect , useState } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

  //! Function based Component
  const News = (props) => {
  const [results, setresults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextpage, setnextPage] = useState(0);
  const [totalResults, setTotalResults] = useState(0);
  const hasMore = results.length !== totalResults;
   const {language } = props.language;
  //document.title = `${props.category.charAt(0).toUpperCase() + props.category.slice(1)}-QuickNews`;  
  

//? updateNews function is used to fetch data from API 
// ? and using in code multiple times.
  const  updateNews = async() => {
         const url = `https://newsdata.io/api/1/latest?apikey=pub_ab33f0089fee4d8a8c68764167d6b83c&country=in&language=${props.language}&category=${props.category}`;
    
    //     const url = `https://newsdata.io/api/1/latest?apikey=pub_8617669fd393f34562fd148386643bb7f607f&country=in&language=en,hi`;
    //    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=b48addce37f14417b243845d226982e6&page=${page}&pageSize=${props.pageSize}`;
setLoading(true);  

let data = await fetch(url);
props.setProgress(30);
let parsedData = await data.json();
 props.setProgress(70);
setresults(parsedData.results);
setTotalResults(parsedData.totalResults);
setnextPage(parsedData.nextPage);
setLoading(false);
 props.setProgress(100);   
  }

//useEffect is used to call updateNews function when page is reloaded([on which field changed])
  useEffect(() => {
    updateNews();
  } , [props.language]);//? This code is used to call updateNews function when page is reloaded.and page relaod when language is changed.

  const fetchMoreData = async () => {
   
    //setPage(page + 1);

     const url = `https://newsdata.io/api/1/latest?apikey=pub_ab33f0089fee4d8a8c68764167d6b83c&country=in&language=${props.language}&category=${props.category}&page=${nextpage}`;
  //  const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=b48addce37f14417b243845d226982e6&page=${page+1}&pageSize=${props.pageSize}`;
   //setPage(page + 1);
  // setnextPage(nextpage + 1); 
   let data = await fetch(url);
    let parsedData = await data.json();
    setresults(results.concat(parsedData.results));
    setTotalResults(parsedData.totalResults);
    setnextPage(parsedData.nextPage);
    setLoading(false);

 
  };

    return (
      <>
        <h1 className="text-center" style={{ margin: "60px 0px" }}>LatestNews-Top Head Lines on {props.category.charAt(0).toUpperCase() + props.category.slice(1)}</h1>
        {/* //!Following is the spinner show only when loading is true */}
        {loading && <Spinner />}
       
          {/* //? following code is use for infinite scroll */}
          <InfiniteScroll
          dataLength={results.length}
          next={fetchMoreData}
           hasMore={results.length !== totalResults}
          
          //loader={<Spinner />}
          // loader={results.length !== totalResults ? <Spinner /> : null}
          loader={hasMore ? <Spinner /> : null}
          > 
          
        <div className="container">
        <div className="row">
          {/* //? Commented this to add infinite scroll */}
          {/* {!state.loading && */}
         {/* //!to just avoid undefined error array.isArray(results) used. */}
          {Array.isArray(results) &&
            results.map((element) => {
              return ( 
                <div className="col-md-4" key={element.link}>
                  <NewsItems
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imageUrl={element.image_url}
                    newsUrl={element.link}
                    author={element.source_name}
                    date={element.pubDate}
                    source={element.source_name}
                  />
                </div>
                
              );

              //console.log(element);
            })}
            </div>
        </div>
        </InfiniteScroll>
        </>
    );
  }

    News.defaultProps = {
    country: "us",
    size: 6,
    category: "general",
  };
  News.propTypes = {
    country: PropTypes.string,
    size: PropTypes.number,
    category: PropTypes.string,
  };

export default News;
