import Homepages from "./Homepages";
import logo from "./imgfiles/1000.png";

function App() {
  return (
    <div>
      <div className=" grid md:grid-cols-2 grid-cols-1 bg ">
        <div>
          <img src={logo} alt="" className=" w-60 -mx-2" />
        </div>
        <div className="  my-10 flex lg:gap-36 md:gap-10 gap-5 ">
          <h1>Home</h1>
          <h1>Course</h1>
          <h1>About Us</h1>
          <h1>Blog</h1>
          <button className=" text-white font-semibold w-36 h-12 bg-[#000080] rounded-xl">Log in</button>
        </div>
      </div>
      <Homepages/>
    </div>
  );
}

export default App;
