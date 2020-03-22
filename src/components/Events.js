import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";

const EventList = ({ eventItems }) => (
  <div className="flex items-stretch justify-start ">
    {eventItems.map(item => (
      <div className="lg:w-1/3 flex">
        <div className="mr-6 border rounded-lg shadow-md self-stretch ">
          <div className="">
            {/* <Img fluid={item.image.childImageSharp.fluid} /> */}
            <img
              className="m-0 rounded-lg rounded-b-none object-center lg:object-fill h-0 lg:h-full"
              src="https://picsum.photos/400/200"
            />
          </div>
          <div className="flex my-4 ">
            <div className="w-1/4  px-4 ">
              <h3 className="text-lg font-normal text-center text-gray-600 tracking-wider">
                {item.date}
              </h3>
            </div>
            <div className="w-3/4 px-4">
              <p className="text-sm leading-tight font-semibold text-gray-700 ">
                {item.day}, {item.time}
              </p>
              <p className="text-sm leading-tight font-light text-gray-600 ">
                {item.venue}
              </p>
              <h3 className="text-lg mt-1 font-normal text-black tracking-wider ">
                {item.event_name}
              </h3>
            </div>
          </div>

          <div className="flex self-end justify-end p-4">
            <a
              class="align-right font-bold text-md text-blue-500 hover:text-blue-800"
              href="#"
            >
              More Details
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
);

EventList.propTypes = {
  featureItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      event_name: PropTypes.string,
      venue: PropTypes.string,
      date: PropTypes.string,
      time: PropTypes.string,
      day: PropTypes.string
    })
  )
};

export default EventList;
