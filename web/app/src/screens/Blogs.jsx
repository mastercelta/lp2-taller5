import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Post from "../components/Post";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar.jsx";
import useFetch from "../customhook/useFetch";

function Blogs() {
  const storedToken = JSON.parse(localStorage.getItem("token"));
  const storedUser = JSON.parse(localStorage.getItem("user"));

  const URL = "http://localhost:8000/posts/";

  const options = {
    headers: {
      Authorization: `Bearer ${storedToken}`,
    },
  };
  const {data, loading, error} = useFetch(URL, options);
  return (
    <main>
      <NavBar user={storedUser.nombre} />
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <Post data={data} />
            <Pagination />
          </div>
          <div className="col-lg-4">
            <SearchBar />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Blogs;
