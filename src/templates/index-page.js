import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

// Components
import Layout from "../components/Layout";
import CampaignCardList from "../components/CampaignCard";
import Button from "../components/Button";
import Programmes from "../components/Programmes";
import Events from "../components/Events";

export const IndexPageTemplate = ({
  image,
  heading,
  subheading,
  mainpitch,
  campaigns,
  programmes,
  events
}) => (
  <div>
    <section
      className="py-20 md:py-16"
      style={{ background: "linear-gradient(90deg, #660000 0% ,#b30000 100%)" }}
    >
      <div className="container mx-auto px-4 py-4 lg:px-16 lg:flex">
        <div className="flex flex-col justify-between text-center lg:text-left lg:w-3/5 mr-2">
          <h1 className="text-4xl font-bold tracking-wider text-white">
            {heading}
          </h1>
          <p className="text-xl mt-6 font-light text-gray-200">{subheading}</p>
          <div>
            <Button className="mt-6 mb-12 text-gray-200">
              See Our Campaigns
            </Button>
            <Button className="mt-6 ml-6 mb-12 text-gray-200">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>

    {/* Description */}
    <section id="features">
      <div className="container mx-auto px-4 py-4 lg:px-16 lg:flex">
        <div className="my-6 w-1/2">
          <h3 className="text-4xl font-semibold tracking-wider py-2">
            {mainpitch.title}
          </h3>
          <p className="text-md mt-2 leading-relaxed font-light">
            {mainpitch.description}
          </p>
        </div>

        <div className="my-6 w-1/2 flex-grow-0">
          <img
            className="m-0 ml-6  lg:mr-4 rounded-lg object-center lg:object-fill h-0 lg:h-full"
            src="https://picsum.photos/800/300"
          />
        </div>
      </div>
    </section>

    {/* Campaigns */}
    <section id="campaigns">
      <div className="container mx-auto px-4 py-4 lg:px-16 lg:flex">
        <div className="my-4 w-full">
          <div class="w-20 h-1 bg-red-800 rounded-lg self-start mb-2"></div>
          <h3 className="text-2xl font-semibold tracking-wider mb-6">
            See Our Campaigns
          </h3>
          <CampaignCardList campaignItems={campaigns} />
        </div>
      </div>

      <div className="flex justify-center m-2 ">
        <a
          class="align-right font-bold border border-blue-500 p-2 text-md text-blue-500 hover:text-blue-800"
          href="#"
        >
          See All Campaigns →
        </a>
      </div>
    </section>

    {/* Programmes */}
    <section id="programmes">
      <Programmes programmeItem={programmes}></Programmes>
    </section>

    {/* Events */}
    <section id="events">
      <div className="container mx-auto px-4 py-4 lg:px-16 lg:flex">
        <div className="my-6 w-full">
          <div class="w-20 h-1 bg-red-800 rounded-lg self-start mb-2"></div>
          <h3 className="text-3xl font-semibold tracking-wider">Events</h3>

          {/* Event List */}
          <div className="flex justify-start mt-8">
            <Events eventItems={events}/>
          </div>
        </div>
      </div>
    </section>

    {/* Media */}
    <section id="events">
      <div className="container mx-auto px-4 py-4 lg:px-16 lg:flex">
        <div className="my-6 w-full">
          <div class="w-20 h-1 bg-red-800 rounded-lg self-start mb-2"></div>
          <h3 className="text-3xl font-semibold tracking-wider">
            Media Mentions
          </h3>
        </div>
      </div>
    </section>

    {/* Events */}
    <section id="events">
      <div className="container mx-auto px-4 py-4 lg:px-16 lg:flex">
        <div className="my-6 w-full">
          <div class="w-20 h-1 bg-red-800 rounded-lg self-start mb-2"></div>
          <h3 className="text-3xl font-semibold tracking-wider">
            Our Partners & Clients
          </h3>
        </div>
      </div>
    </section>
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  campaigns: PropTypes.array,
  programmes: PropTypes.array,
  events: PropTypes.array
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        campaigns={frontmatter.campaigns}
        programmes={frontmatter.programmes}
        events={frontmatter.events}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        campaigns {
          image {
            childImageSharp {
              fluid(maxWidth: 480, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          title_text
          subtitle_text
        }
        programmes {
          title
          subtitle
          section_intro_text
          programme_list {
            title_text
            subtitle_text
          }
        }
        events {
          event_name
          image
          url
          date
          venue
          time
          day
        }
      }
    }
  }
`;
