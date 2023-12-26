import ProductCard from "@/components/card/ProductCard";
import Hero from "@/components/Hero";

const Home = () => {
  return (
    <div>
    <Hero/>

    <div className="h-screen p-10">
      <ProductCard/>
    </div>
    </div>
  );
};

export default Home;
