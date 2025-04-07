import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Post from "../components/Post";

function Blogs() {
  return (
    <main>
      <NavBar />
      <div className="container">
        <div className="row">
          <Header />
          <Post />
        </div>
      </div>
    </main>
  );
}

export default Blogs;
