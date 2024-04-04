// import Image from "next/image";

import aboutImage from "@/assest/aboutImg.png";
import aboutImage2 from "@/assest/aboutImg2.png";
import aboutBg from "@/assest/aboutBg.png";
import scroll from "@/assest/scroll.svg.png";
import Image from "next/image";

const About = () => {
  return (
    <div className="about">
      <div className="con p-8 text-black grid grid-cols-2 gap-4">
        <div className="img-div-con">
          <div
            className="img p-4 flex flex-col items-center justify-center relative"
            style={{ backgroundImage: `url(${aboutBg.src})` }}
          >
            <Image src={aboutImage} alt="img" width={350} height={100} />
            <Image
              src={aboutImage2}
              alt="img"
              width={200}
              height={60}
              className=" absolute right-[8rem] bottom-[-2rem]"
            />
          </div>
        </div>

        <div className="texts ">
          <h2 className=" text-2xl font-bold mb-2 w-[50%]">
            {" "}
            We Create journeys Worth Taking For The Traveler
          </h2>

          <p className=" mb-4">
            Connect, Discuss, and Engage Join book clubs, participate in
            forums, and engage in meaningful discussions with like-minded
            readers. Connect with authors, share book recommendations, and build
            lasting friendships within our supportive and welcoming community!
          </p>
          <p className=" mb-4">
            Our dedication to providing professional services to our clients,
            combined with our expertise and innovative approach, makes us a
            prominent, independent, and forward-thinking travel agency. Our goal
            is to leave a positive impact on everything we do.
          </p>

          <div className="vision mb-4 text-icon flex">
            <div className="icon">
              <Image src={scroll} alt="img" width={70} height={30} />
            </div>
            <div className="text p-2 ">
              <h3 className=" text-lg font-bold">Our Vision</h3>
              <p className="text-sm w-[80%]">
                Our goal is to become a dependable and trustworthy travel
                partner for our customers, consistently offering exclusive
                travel deals, packages, and services that are unmatched by
                others.
              </p>
            </div>
          </div>

          {/* mission */}

          <div className="mision mt-2 text-icon flex">
            <div className="icon">
              <Image src={scroll} alt="img" width={40} height={30} />
            </div>
            <div className="text p-2 ">
              <h3 className=" text-lg font-bold">Our Mission</h3>
              <p className="text-sm w-[80%]">
                Delivering technology that is user-friendly, enabling everyone
                to easily and safely access all their travel needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
