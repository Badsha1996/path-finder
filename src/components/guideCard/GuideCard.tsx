import React, { Fragment } from "react";

// this will later change to type of card
const GuideCard = ({ cardContent }: { cardContent: any }) => {
  return (
    <div className="max-w-lg w-full lg:flex rounded-lg border-8 border-white ">
      {
        cardContent?.demo ?
          (<div
            className="h-40 w-full lg:w-56 flex-none bg-cover text-center overflow-hidden lg:flex relative">
            <img src={cardContent.demo.src} alt="" className="absolute w-full h-full object-contain" />
          </div>) : null
      }
      <div className=" border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between">
        <div className="mb-2">
          <div className="text-gray-900 font-bold text-xl mb-2">
            {cardContent.Heading}
          </div>
          <p className="text-gray-700 max-h-64 overflow-y-auto no-scrollbar" >
            {
              (typeof cardContent.content === "object" && cardContent.content !== null) ?
                Object.keys(cardContent.content).map((key, index) => {
                  return (
                    <Fragment key={index}>
                      <span className="text-gray-900 font-bold text-md mb-1 block">
                        {key}
                      </span>
                      <span>{cardContent.content[key]}</span>
                    </Fragment>)
                }) : cardContent.content
            }</p>
        </div>
      </div>
    </div>
  );
};

export default GuideCard;
