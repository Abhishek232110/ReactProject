import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Summary() {
  const [myData, setmyData] = useState([]);
  useEffect(() => {
    axios.get("https://api.tvmaze.com/search/shows?q=all").then((response) => {
      console.log(response);
      setmyData(response.data);
    });
  }, []);
  return (
    <div>
      <div>
        {myData.map((post) => {
          return (
            <div>
              <p>{post.show.summary}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
