import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"
const Hero = () => {
  return (
   <div className="flex flex-col items-center mt-6 lg:mt-20">
    <h1 className="text-4xl sm sm:text-6xl lg:text-7xl text-center tracking-wide">
        AB Build Tool
        <span className=" bg-gradient-to-r from-orange-800 to-orange-400 text-transparent bg-clip-text">
         {"  "}for 
         <br /> Developers
        </span>
    </h1>
    <p className="mt-10 text-lg text-center text-neutral-400 max-w-4xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eius recusandae beatae accusamus.uos eligendi eveniet culpa.</p>
    <div className="flex justify-center my-10">
        <a href="#" className=" bg-gradient-to-r from-orange-800 to-orange-400 py-4 px-4 mx-4 rounded-md mb-5 ">Start  Free</a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border mb-6 "> Documentation</a>
    </div>
    <div className=" flex mt-10 justify-center">
        <video autoPlay loop muted className="rounded-lg w-1/2 border border-orange-600 shadow-orange-300 mx-2 my-4">
        <source src={video1} type="video/mp4"/>
        your browser does not support the video tag 
        </video>
        <video autoPlay loop muted className="rounded-lg w-1/2 border border-orange-600 shadow-orange-300 mx-2 my-4">
        <source src={video2} type="video/mp4"/>
        your browser does not support the video tag 
        </video>
        
    </div>
   </div>
  )
}

export default Hero