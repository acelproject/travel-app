"use client";
import Image from "next/image";
import React from "react";
import campImg from "@/public/camp.svg";
import starImg from "@/public/star.svg";
import playImg from "@/public/play.svg";
import closeImg from "@/public/close.svg";

import { MdStarOutline } from "react-icons/md";
import Button from "./Button";

const Hero = () => {
  return (
    <section className=" max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-24 xl:flex-row ">
      <div className="hero-map"></div>
      {/* left */}
      <div className="md:flex gap-x-1">
        <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
          <Image
            src={campImg}
            alt="camp"
            width={50}
            height={50}
            className="absolute left-[-5px] top-[-33px] w-10 lg:w-[50px]"
          />
          <h1 className="bold-40 lg:bold-88 capitalize ">explore & Enjoy your world</h1>
          <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
            We want to be each of your journeys seeking the satisfaction of
            seeing the incorruptible beauty of nature. We can help you on an
            adventure around the world in just one app{" "}
          </p>
          <div className="mt-11 flex  gap-5 ">
            <div className="flex items-center gap-2 w-max">
              {Array(5)
                .fill(1)
                .map((_, i) => (
                  <Image src={starImg} height={21} width={21} alt="star" />
                  // <MdStarOutline  className="h-7 w-7 text-yellow-500"/>
                ))}
            </div>
            <p className="b0ld-16 lg:bold-20 text-blue-70">
              198k{" "}
              <span className="regular-16 lg:regular-20 ml-1 underline">
                Excellent Reviews
              </span>
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:flex-row mt-10">
            <Button type="button" variant="btn_green" title="DownLoad App" />
            <Button
              type="button"
              variant="btn_white_text"
              title="How We Work?"
              icon={playImg}
            />
          </div>
        </div>
        <div className="relative flex flex-1 items-start mt-14">
          <div className="relative z-20 w-[268px] md:left-[180px] md:top-[-100px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
            <div className="flex flex-col gap-y-7">
              <div>
                <div className="flexBetween">
                  <p className="regular-16 text-gray-20">Location</p>
                  <Image src={closeImg} alt="close" width={24} height={24} />
                </div>
                <p className="bold-20 text-white">Palu City</p>
              </div>
              <div className="flexBetween">
                <div className="flex flex-col">
                  <p className="regular-16 block text-gray-20">Distance</p>
                  <p className="bold-20 text-white">173.28 mil</p>
                </div>
                <div className="flex flex-col">
                  <p className="regular-16 block text-gray-20">Elevetion</p>
                  <p className="bold-20 text-white">3.040 km</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
