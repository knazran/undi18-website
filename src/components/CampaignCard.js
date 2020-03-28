import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";

const CampaignCardList = ({ campaignItems }) => (
  <div className="flex justify-start ">
    {campaignItems.map(item => (
      <div className="w-1/3">
        <div className="mx-6 border rounded-lg shadow-md">
          <div className="">
            <Img fluid={item.image.childImageSharp.fluid} />
          </div>
          <h3 className="text-lg font-semibold text-black tracking-wider mt-4 px-4">
            {item.title_text}
          </h3>
          <p className="text-md mt-2 leading-relaxed font-light text-gray-600 px-4 mb-4">
            {item.subtitle_text}
          </p>
          <div className="flex justify-end p-4">
            <a
              class="align-right font-bold text-md text-red-700 hover:text-red-800"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
);

CampaignCardList.propTypes = {
  featureItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      title_text: PropTypes.string,
      subtitle_text: PropTypes.string
    })
  )
};

export default CampaignCardList;
