import "./Home.css";
import waveImage from '../assets/wave.png';
const Home = () => {
  return (
    <div className="p-8 mt-8">
      <div className="flex items-start justify-between w-full h-[350px]">
        <div className="flex flex-col items-start ml-[100px] pt-[100px]">
          <h1 className="text-4xl font-bold items-center ">HI THERE!</h1>
          <h1 className="text-4xl font-bold fade-in-left">MY NAME IS CHRIS GERALD</h1>
          <p className="mt-2 text-lg">I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️ <br />Whenever possible, I also apply my passion for developing products with Node.js <br /> and Modern Javascript Library and Frameworks  like React.js and Next.js</p>
          
        </div>
        <img src={waveImage} alt="Wave" className="w-[300px] h-[300px]" />
       
      </div>

      <div>
        {/* Additional content can go here */}
      </div>
    </div>
  );
};

export default Home;
