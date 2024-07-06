import { useState } from "react";
import GiftBanner from "../components/GiftBanner";
import HeroText from "../components/HeroText";
import ListOfCoupons from "../components/ListOfCoupons";
import ExclusiveRibbon from "../components/ExclusiveRibbon";

function Rewards() {
  const [isGiftView, setIsGiftView] = useState(false);
  const genericValues = [
    {
      buyValue: 30,
      bonusValue: 10,
    },
    {
      buyValue: 50,
      bonusValue: 5,
    },
    {
      buyValue: 100,
      bonusValue: 15,
    },
    {
      buyValue: 250,
      bonusValue: 50,
    },
    {
      buyValue: 500,
      bonusValue: 125,
    },
  ];

  const giftValues = [
    {
      buyValue: 50,
      bonusValue: 5,
    },
    {
      buyValue: 100,
      bonusValue: 15,
    },
    {
      buyValue: 250,
      bonusValue: 50,
    },
    {
      buyValue: 500,
      bonusValue: 125,
    },
  ];
  return (
    <>
      <div className="flex flex-col gap-6 items-center mb-6">
        <HeroText />
        <GiftBanner
          checked={isGiftView}
          onChange={() => setIsGiftView(!isGiftView)}
        />
        {!isGiftView && (giftValues || genericValues) && (
          <div className="hidden md:block">
            <ExclusiveRibbon />
          </div>
        )}
      </div>
      <div className="relative md:hidden z-10">
        {!isGiftView && (giftValues || genericValues) && (
          <div className="absolute block md:hidden left-1/2 transform -translate-x-1/2 -top-15px">
            <ExclusiveRibbon />
          </div>
        )}
      </div>
      <div className=" flex-1 overflow-y-auto no-scrollbar">
        <ListOfCoupons
          isGiftView={isGiftView}
          values={isGiftView ? giftValues : genericValues}
        />
      </div>
    </>
  );
}

export default Rewards;
