/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import NavBar from "../components/NavBar";
import PostContent from "../components/PostContent";
import Coments from "../components/Coments";

const ReadPost = ({props}) => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  console.log(storedUser);
  return (
    <main>
      <NavBar user={storedUser.nombre}/>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-8">
            <PostContent />
            <Coments />
          </div>
        </div>
      </div>
    </main>
  );
};

ReadPost.propTypes = {};

export default ReadPost;
