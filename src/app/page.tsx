import Navbar from "./components/Navbar"

const Home = () => {
  return (
    <div className="header">
      <Navbar />
      <div className="h-[100vh] flex justify-center items-center flex-col text-center p-10">
        <h2 className="text-[28px] font-bold mb-[25px]">
          Soto Betawi Aselole
        </h2>
        <p className="text-[gray] mb-[15px]">
          Inimah deskripsi singkat buat soto betawi aje yekan
          nanti di belakang text ini ada foto foto nya yakan
        </p>
        <button className="bg-white w-[150px] h-[45px] rounded-[5px] text-[black]">
          Learn More 
        </button>
      </div>

      <div className="bg-[white] text-[black] p-10 h-screen">
        <h1>Pokoknya mah ini buat catalog soto betawi njay</h1>
      </div>
    </div>
  );
};

export default Home;
