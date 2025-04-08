import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Post from "../components/Post";
import Pagination from "../components/Pagination";

function Blogs() {
  // const storedToken = JSON.parse(localStorage.getItem("token"));
  const storedUser = JSON.parse(localStorage.getItem("user"));
  // console.log(storedToken);
  console.log(storedUser);

  return (
    <main>
      <NavBar user={storedUser.nombre} />
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <Post />
            <Pagination />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Blogs;
