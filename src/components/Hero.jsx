import React from "react";
import img from "../assets/banner-img.png"; // Corrected import statement

const Hero = () => {
  return (
    <div className="section mt-[100px] rounded-3xl bg-gray-900">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-100">
            Known For Making
            <br class="hidden lg:inline-block" />
            High Quality Products
          </h1>
          <p class="mb-8 leading-relaxed text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            molestias provident laudantium molestiae autem eveniet architecto
            eum quas fugiat cupiditate in minus excepturi quo modi, nemo, alias
            iste esse numquam!
          </p>
        </div>

        <div class="lg:max-w-[25rem] lg:w-full md:w-1/2 w-3/4">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            src={img}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
