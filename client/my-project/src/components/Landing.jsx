import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const data = [
  {
    id: "1",
    imageUrl:
      "https://c1.wallpaperflare.com/preview/652/904/898/tunisia-the-roman-empire-the-ruins-of-the-ruins-of-rome.jpg"
  },
  {
    id: "2",
    imageUrl:
      "https://c1.wallpaperflare.com/preview/237/648/918/blue-city-old-town-chefchaune-morocco.jpg"
  },
  {
    id: "3",
    imageUrl:
      "https://c0.wallpaperflare.com/preview/398/956/17/tunis-medina-mosque-tunisia.jpg"
  },
  {
    id: "4",
    imageUrl:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/30/39/b8/cartoline-da-sousse-tunisia.jpg?w=500&h=-1&s=1"
  },
  {
    id: "5",
    imageUrl:
      "https://c1.wallpaperflare.com/preview/902/749/177/castle-tunisia-djerba-palm-trees.jpg"
  }
];

const HorizontalCarousel = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const goToChoose = () => {
    // Navigate to Choose page
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="text-center font-bold text-4xl italic underline text-white bg-blue-500 py-2">
        Welcome to
      </div>
      <div className="text-center font-bold text-5xl italic text-blue-500">
        Volunteer
      </div>
      <div className="text-center font-semibold text-3xl text-blue-500">
        Connect with Purpose
      </div>
      <div className="mx-10 mt-10 text-lg leading-6 text-gray-700">
        Volunteer is more than just a mobile app; it's a platform where seekers
        and providers come together with a shared purpose. Seekers, who dream
        of exploring new places but face financial constraints, meet providers
        willing to offer accommodations, meals, or financial support in exchange
        for work opportunities{" "}
        <span className="text-blue-500" onClick={goToChoose}>
          Come join now !!!
        </span>
      </div>

      <div>
        <div className="font-semibold text-2xl text-blue-600 ml-2 mt-4">
          Discover more about our country
        </div>
        <div className="flex mt-2 ml-5">
          {data.map((item) => (
            <div key={item.id} className="mx-2">
              <img
                src={item.imageUrl}
                alt={item.id}
                style={{ width: windowWidth * 0.8, height: 600 }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="font-bold text-4xl text-blue-500 ml-2 mt-10">
        What are we up to !
      </div>
      <div className="mx-10 mt-4 text-xl leading-6 text-gray-700">
        Facilitating Meaningful Exchanges
      </div>
      <div className="mx-10 mt-4 text-xl leading-6 text-gray-700">
        At Volunteer, we believe in fostering genuine connections and meaningful
        exchanges between seekers and providers.
      </div>
      <div className="font-semibold text-2xl text-gray-700 ml-10 mt-4">
        Join the Movement:
      </div>
      <div className="mx-10 mt-4 text-xl leading-6 text-gray-700">
        Join the Volunteer movement today and be part of a global community
        dedicated to making travel more accessible, meaningful, and sustainable.
        Whether you're a seeker ready to explore new horizons or a provider
        looking to make a positive impact.
      </div>
      <div className="font-semibold text-2xl text-gray-700 ml-10 mt-4">
        Building Communities:
      </div>
      <div className="mx-10 mt-4 text-xl leading-6 text-gray-700">
        Beyond transactions, Volunteer is about building communities based on
        trust, collaboration, and shared values. Our platform facilitates not
        only practical exchanges but also the formation of lasting friendships and
        networks that transcend geographical boundaries.
      </div>
      <button
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={goToChoose}
      >
        Get started
      </button>
      <div className="mx-10 mt-4 text-xl leading-6 text-gray-700 text-center">
        Don't miss the chance
      </div>
    </div>
  );
};

export default HorizontalCarousel;
