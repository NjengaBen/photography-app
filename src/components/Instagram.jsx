"use client";
import React from "react";
import InstagramImg from "./InstagramImg";
import IgImg1 from "../Assets/ig-img-1.jpeg";
import IgImg2 from "../Assets/ig-img-2.jpeg";
import IgImg3 from "../Assets/ig-img-3.jpeg";
import IgImg4 from "../Assets/ig-img-4.jpeg";
import IgImg5 from "../Assets/ig-img-5.jpeg";
import IgImg6 from "../Assets/ig-img-6.jpeg";

const Instagram = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-24 text-center">
      <h1 className="text-2xl font-bold">Find Me On Instagram</h1>
      <p className="pb-4">@Captur</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4">
        <InstagramImg socialImage={IgImg1} />
        <InstagramImg socialImage={IgImg2} />
        <InstagramImg socialImage={IgImg3} />
        <InstagramImg socialImage={IgImg4} />
        <InstagramImg socialImage={IgImg5} />
        <InstagramImg socialImage={IgImg6} />
      </div>
    </div>
  );
};

export default Instagram;
