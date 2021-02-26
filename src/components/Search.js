import React, { useState, useEffect } from "react";
import axios from "axios";
import { renderIntoDocument } from "react-dom/test-utils";

const Search = () => {
  const [term, setTerm] = useState("React Framework");
  const [results, setResults] = useState([]);

// useEffect(()=>{
//   console.log('initial render or term was change');
//   return ()=>{
//     console.log('Clean up');
//   };
// },[term]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });

      setResults(data.query.search);
    };

    const timeoutId = setTimeout(function () {
      if (term) {
        search();
      }
    }, 500);

    return()=>{
      clearTimeout(timeoutId);
    }
  }, [term]);
 

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui vk button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            <i class="vk icon"></i>
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
