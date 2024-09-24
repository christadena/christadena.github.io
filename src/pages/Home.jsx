import "./Home.css";
import waveImage from "../assets/wave.png";
const Home = () => {
  return (
    <div className=" mt-8 h-[960px]">
      <div className="flex items-center justify-between w-full h-[400px] ">
        <div className="flex flex-col items-start ml-[100px] fade-in-left">
          <h1 className="text-4xl font-bold items-center ">HI THERE!</h1>
          <h1 className="text-4xl font-bold ">
            MY NAME IS CHRIS GERALD TADENA
          </h1>
          <p className="mt-2 text-lg w-[1000px]">
            I've developed a deep passion for programming, and every project I
            take on helps me grow and refine my skills. Along the way, I've
            embraced modern web technologies, particularly Node.js and
            JavaScript libraries like React.js.
            Whether it's building Front-end applications or experimenting with
            new features, I always strive to create impactful, high-quality
            products.
          </p>
        </div>
        <img src={waveImage} alt="Wave" className="w-[300px] h-[300px]" />
      </div>

    </div>
  );
};

export default Home;
