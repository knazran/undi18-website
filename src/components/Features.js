import React from "react";
import PropTypes from "prop-types";
import logoSafe from "../img/undraw_safe_bnk7.svg";

const FeatureList = ({ featureItems }) => (
  <div className="flex flex-col lg:justify-between my-4">
    {featureItems.map(item => (
      <div className="text-gray-700 text-center py-2 my-2">
        <div className="flex flex-col lg:flex-row lg:justify-between items-center ">
          <div className="w-56 pb-4 lg:w-48 lg:w-1/5 xl:1/6 lg:mr-8">
            <img className="rounded-full" src={logoSafe} />
          </div>

          <div className="w-full lg: w-4/5 xl:5/6 py-1">
            <p className="text-lg lg:text-sm xl:text-xl text-black text-center font-semibold lg:text-left  lg:text-xl leading-none mb-2">
              {item.title_text}
            </p>
            <p className="text-md lg:text-sm xl:text-md text-grey-dark text-center lg:text-left">{item.subtitle_text}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
);

FeatureList.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string
    })
  ),
  featureItems: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      title_text: PropTypes.string,
      subtitle_text: PropTypes.string
    })
  )
};

export default FeatureList;
