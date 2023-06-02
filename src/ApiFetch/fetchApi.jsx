import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FetchApi = ({}) => {
  const movieDetail = () => {};
  const [myData, setmyData] = useState([]);
  useEffect(() => {
    axios.get("https://api.tvmaze.com/search/shows?q=all").then((response) => {
      // console.log(response);
      setmyData(response.data);
    });
  }, []);

  return (
    <div>
      <div className="text-center p-3 text-xl text-indigo-600"></div>

      <div>
        {myData.map((post) => {
          return (
            <span className=" inline-table p-2 ml-9 cursor-pointer ">
              {post.image}
              <img src={post.show.image.medium} />
              <span>{post.show.name}</span>
              <br />
              <span className="">{post.show.language}</span>
              <br></br>
              <Link to="/Summary">
                <button
                  className="bg-indigo-400 text-center w-full rounded-sm "
                  onClick={movieDetail}
                >
                  Book Ticket
                </button>
              </Link>
            </span>
          );
        })}
      </div>
    </div>
  );
};
export default FetchApi;
