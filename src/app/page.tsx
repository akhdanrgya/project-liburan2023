import Navbar from "./components/Navbar"

const Home = () => {
  return (
    <div className="header">
      <Navbar />
      <div className="h-[100vh] flex justify-center items-center flex-col text-center">
        <h2 className="text-[28px] font-bold mb-[25px]">
          testing banget inimah asli
        </h2>
        <p className="text-[gray] mb-[15px]">
          Paragraph aselole asoy geboy anjay juga
        </p>
        <button className="bg-white w-[150px] h-[45px] rounded-[5px] text-[black]">
          Learn More
        </button>
      </div>

      <div className="bg-[white] text-[black] p-10 h-screen">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
};

export default Home;
