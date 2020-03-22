import React from "react";
// import PropTypes from "prop-types";
// import Img from "gatsby-image";

const Programmes = () => (
  <div className="">
    <div className="flex flex-col lg:flex-row lg:justify-between items-center ">
      <div className="w-56 lg:w-1/5 xl:1/6 lg:mr-8">
        <img className="" src="https://picsum.photos/800/600" />
      </div>

      <div className="w-full lg: w-4/5 xl:5/6 py-2 self-start ">
        <p className="text-md text-black text-center font-normal lg:text-left  leading-none mb-2 ">
          Voter Education Workshop
        </p>
        <p className="text-md lg:text-sm font-light text-gray-600 text-center lg:text-left">
          We hold our coffee to the highest standards from the shrub to the cup.
          That’s why we’re meticulous and transparent about each step of the
          coffee’s journey.
        </p>
      </div>
    </div>
    <div className="flex flex-col lg:flex-row lg:justify-between items-center ">
      <div className="w-56 lg:w-1/5 xl:1/6 lg:mr-8">
        <img className="" src="https://picsum.photos/800/600" />
      </div>

      <div className="w-full lg: w-4/5 xl:5/6 py-2 self-start ">
        <p className="text-md text-black text-center font-normal lg:text-left  leading-none mb-2 ">
          Dialogues
        </p>
        <p className="text-md lg:text-sm font-light text-gray-600 text-center lg:text-left">
          We hold our coffee to the highest standards from the shrub to the cup.
          That’s why we’re meticulous and transparent about each step of the
          coffee’s journey.
        </p>
      </div>
    </div>
    <div className="flex flex-col lg:flex-row lg:justify-between items-center ">
      <div className="w-56 lg:w-1/5 xl:1/6 lg:mr-8">
        <img className="" src="https://picsum.photos/800/600" />
      </div>

      <div className="w-full lg: w-4/5 xl:5/6 py-2 self-start ">
        <p className="text-md text-black text-center font-normal lg:text-left  leading-none mb-2 ">
          Forums
        </p>
        <p className="text-md lg:text-sm font-light text-gray-600 text-center lg:text-left">
          We hold our coffee to the highest standards from the shrub to the cup.
          That’s why we’re meticulous and transparent about each step of the
          coffee’s journey.
        </p>
      </div>
    </div>
  </div>
);

// CampaignCardList.propTypes = {
//   featureItems: PropTypes.arrayOf(
//     PropTypes.shape({
//       image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
//       title_text: PropTypes.string,
//       subtitle_text: PropTypes.string
//     })
//   )
// };

export default Programmes;
