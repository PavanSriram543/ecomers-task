import React from "react";
import Carousel from "../../components/carousel/carousel";
import KidDress from "../../components/kidDress/kiddress";
import MenDress from "../../components/mandress/mendress";
import PopularItemCollection from "../../components/popularItems/popularItemCollection";
import WeddingCouple from "../../components/weddingCouple/weddingCouple";
import WomenDress from "../../components/womendress/womendress";

const HomePage = () => {
  return (
    <div>
      <Carousel />
      <PopularItemCollection />
      <WeddingCouple />
      <MenDress />
      <WomenDress />
      <KidDress />
    </div>
  );
};

export default HomePage;
