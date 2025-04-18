/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import NavBar from "../components/NavBar";
import PostContent from "../components/PostContent";
import Coments from "../components/Coments";
import useFetch from "../customhook/useFetch.js";
import {useParams, useNavigate} from "react-router";

const ReadPost = ({props}) => {
  const storedToken = JSON.parse(localStorage.getItem("token"));
  const params = useParams();
  const NAVIGATE = useNavigate();
  const POST_ID = params.id;

  const OPTIONS = {
    headers: {Authorization: `Bearer ${storedToken}`},
  };

  const URL = `http://localhost:8000/posts/?post_id=${POST_ID}&page=1&limit=10`;

  const {data, loading, error} = useFetch(URL, OPTIONS);
  const storedUser = JSON.parse(localStorage.getItem("user"));
  return (
    <main>
      <NavBar user={storedUser.nombre} />
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-8">
            <PostContent data={data} />
            <Coments />
          </div>
          <div className="col-lg-4">
            <button
              className="btn btn-primary"
              id="button-search"
              type="button"
              onClick={() => NAVIGATE("/new_post")}
            >
              Create post
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

ReadPost.propTypes = {};

export default ReadPost;
