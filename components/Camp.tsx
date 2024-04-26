import Image from "next/image";
import React from "react";
import foldedMapImg from "@/public/folded-map.svg";
import quoteImg from "@/public/quote.svg";
import { PEOPLE_URL } from "@/constants";

interface CampProps {
  bgImg: string;
  title: string;
  subTitle: string;
  peopleJoined: string;
}

const CampSite = ({ bgImg, title, subTitle, peopleJoined }: CampProps) => {
  return (
    <div
      className={`h-full w-full min-w-[1100px] ${bgImg} bg-cover bg-no-repeat lg:rounded-5xl 2xl:rounded-5xl`}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-green-50 p-4">
            <Image src={foldedMapImg} alt="map" width={28} height={28} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subTitle}</p>
          </div>
        </div>
        <div className="flexCenter gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image
                src={url}
                key={url}
                alt="person"
                width={52}
                height={52}
                className="inline-block h-10 w-10 rounded-full"
              />
            ))}
          </span>
          <p className="bold-16 md:bold-20 text-white ">{peopleJoined}</p>
        </div>
      </div>
    </div>
  );
};
const Camp = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampSite
          bgImg="bg-bg-img-1"
          title="Poso City"
          subTitle="Matako, Tojo Barat"
          peopleJoined="300+ Join ed"
        />
        <CampSite
          bgImg="bg-bg-img-2"
          title="Poso City"
          subTitle="Matako, Tojo Barat"
          peopleJoined="300+ Join ed"
        />
      </div>
      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>Feeling Lost</strong> And Not Knowing The Way?
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
            nobis sed dolor debitis incidunt. Et sapiente ex harum excepturi
            dicta! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Commodi, voluptate!
          </p>
          <Image src={quoteImg} alt="quote" width={186} height={219} className="camp-quote"/>
        </div>
      </div>
    </section>
  );
};

export default Camp;
