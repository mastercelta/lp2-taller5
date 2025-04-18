import React, {useEffect, useState} from "react";
import ComentForm from "./ComentForm";
import useFetch from "../customhook/useFetch";
import usePost from "../customhook/usePost";
import {useParams} from "react-router";

const Comments = () => {
  const params = useParams();

  const POST_ID = params.id;

  const storedToken = JSON.parse(localStorage.getItem("token"));

  const [refetch, setRefetch] = useState(false);
  
  const URL = "http://localhost:8000/comments/";

    const [comentario, setComentario] = useState("");

    const {data: resp,error,loading,post,} = usePost("http://localhost:8000/comments/");

  const OPTIONS = {
    headers: {Authorization: `Bearer ${storedToken}`},
    params: {post_id: POST_ID},
  };

  const {data} = useFetch(URL, OPTIONS);

  const [users, setUsers] = useState({});

  useEffect(() => {
    const fetchUsers = async () => {
      const userPromises = data.map(async (u) => {
        const USER_URL = `http://localhost:8000/users/?user_id=${u.id_usuario}`;
        const response = await fetch(USER_URL, {
          headers: {Authorization: `Bearer ${storedToken}`},
        });
        const userData = await response.json();
        return {id: u.id_usuario, usuario: userData.usuario};
      });
      const usersData = await Promise.all(userPromises);
      const usersMap = usersData.reduce((acc, user) => {
        acc[user.id] = user.usuario;
        return acc;
      }, {});
      setUsers(usersMap);
    };

    if (data.length) {
      fetchUsers();
    }
  }, [data, storedToken, refetch]);


  const handleSubmit = () => {
    post(
      {comentario, id_publicacion: POST_ID},
      {headers: {Authorization: `Bearer ${storedToken}`}},
    );
    setComentario("");
    setRefetch(!refetch);
  };

  return (
    <section className="mb-5">
      <div className="card bg-light">
        <div className="card-body">
          <form
            className="mb-4"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <ComentForm setComentario={setComentario} comentario={comentario} />
            <button
              type="submit"
              style={{
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                padding: "2px 20px",
                borderRadius: "5px",
                cursor: "pointer",
                marginTop: "2%",
                marginLeft: "85%",
                height: "30px",
              }}
              disabled={loading}
            >
              {loading ? "Posting..." : "Post"}
            </button>
          </form>
          {error && <p style={{color: "red"}}>Error: {error.message}</p>}
          {resp && <p style={{color: "green"}}>Comment posted successfully!</p>}

          {data.length ? (
            data.map((comment) => (
              <div key={comment.id} className="d-flex">
                <div className="ms-3">
                  <div className="fw-bold">
                    {users[comment.id_usuario] || "Cargando..."}
                  </div>
                  {comment.comentario}
                </div>
              </div>
            ))
          ) : (
            <div className="d-flex">
              <div className="ms-3">0 comentarios</div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Comments;
