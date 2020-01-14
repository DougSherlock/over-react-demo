import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Tunes(props) {

    const [data, setData] = useState([]);  

    const execSearch = async (event) => {
      event.preventDefault();
      const type = document.getElementById('typeList').value;
      const queryText = document.getElementById('queryText').value;
      if (queryText === '') {
        alert('Search text cannot be empty');
        return;      
      }
  
      const url = `https://thesession.org/${type}/search?format=json&q=${queryText}`;
      console.log('query url:' + url);
      const result = await fetch(url);
      console.log('after fetch');
      const resultJson = await result.json();
      console.log(JSON.stringify(resultJson));
      setData(resultJson);
      //window.location = "/tunes";//this.props.history.push("/tunes");
    }
  
    return (
        <div>
        <form onSubmit={execSearch}>
          <p><input placeholder="Search Text" id="queryText"></input></p>
          <p>Look In: <select id="typeList"  defaultValue="tunes">
            <option value="discussions" >Discussions</option>
            <option value="events" >Events</option>
            <option value="recordings" >Recordings</option>
            <option value="sessions" >Sessions</option>
            <option value="trips" >Trips</option>
            <option value="tunes">Tunes</option>
          </select>
          </p>
          <p>
              <input type="submit" value="Go" />
          </p>
        </form>
        <hr />
        {/* <div className="QueryResult">
          {JSON.stringify(data)};
        </div> */}
            <div>Tunes</div>
            <div className="QueryResult">
            {                
             //JSON.stringify(data)
             
             data === undefined || data.tunes === undefined ? "" :
                data.tunes.map(tune => (
                    <div key={tune.id}>
                    <h1>{tune.name}</h1>
                    </div>
                ))
            }
            </div>
        </div>
        );
}

export default Tunes;