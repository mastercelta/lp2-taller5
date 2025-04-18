import {useState} from "react";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Post from "../components/Post";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar.jsx";
import useFetch from "../customhook/useFetch";
import {useNavigate, useParams, useSearchParams} from "react-router";

function Blogs() {
  const NAVIGATE = useNavigate();

  const params = useParams();
  const page = params.page;

  const storedToken = JSON.parse(localStorage.getItem("token"));
  const storedUser = JSON.parse(localStorage.getItem("user"));
  // const [page, setPage] = useState(1);

  const URL = `http://localhost:8000/posts/?page=${page}`;

  const options = {
    headers: {
      Authorization: `Bearer ${storedToken}`,
    },
  };
  const {data, loading, error} = useFetch(URL, options);
  const lastElement = data?.length > 0 ? data[data.length - 1] : null;
  console.log(lastElement)

  return (
    <main>
      <NavBar user={storedUser.nombre} />
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <Post data={data} lastElement={lastElement} />
            <nav aria-label="Pagination">
              <hr className="my-0" />
              <ul className="pagination justify-content-center my-4">
                {[...Array(10)].map((_, index) => (
                  <li key={index} className={"page-item"}>
                    <button
                      className="page-link"
                      onClick={() => NAVIGATE(`/blog/page/${index + 1}`)}
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="col-lg-4">
            <SearchBar />
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
}

export default Blogs;
