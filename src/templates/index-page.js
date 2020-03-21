import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import myHutan from "../img/myhutan.jpeg";
import initiative111 from "../img/111initiative.jpeg";
import undiSaksama from "../img/saksama.png";

import Layout from "../components/Layout";
import FeatureList from "../components/Features";
import Button from "../components/Button";

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  testimonial,
  intro,
  features
}) => (
  <div>
    <section
      className="py-20 md:py-16"
      style={{ background: "linear-gradient(90deg, #660000 0% ,#b30000 100%)" }}
    >
      <div className="container mx-auto px-4 py-4 lg:px-16 lg:flex">
        <div className="flex flex-col justify-between text-center lg:text-left lg:w-3/5 mr-2">
          <h1 className="text-4xl font-bold tracking-wider text-white">
            {title}
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

    {/* Features / Services */}
    <section id="features">
      <div className="container mx-auto px-4 py-4 lg:px-16 lg:flex">
        <div className="my-6 w-2/3">
          <h3 className="text-2xl font-semibold tracking-wider py-2">
            {mainpitch.title}
          </h3>
          <p className="text-md mt-2 leading-relaxed font-light">
            {mainpitch.description}
          </p>
        </div>

        <div className="my-6 w-1/3 flex-grow-0">
          <img
            className="m-0 ml-6  lg:mr-4 rounded-lg object-center lg:object-fill h-0 lg:h-full"
            src="https://picsum.photos/800/300"
          />
        </div>
      </div>
    </section>

    <section id="campaigns">
      <div className="container mx-auto px-4 py-4 lg:px-8 lg:flex">
        <div className="my-4 w-full">
          <h3 className="text-2xl font-semibold tracking-wider my-6">
            See Our Campaigns
          </h3>
          <div className="flex justify-start ">
            <div className="w-1/3">
              <div className="mr-6 border rounded-lg shadow-md">
                <div className="">
                  <img
                    className="m-0 rounded-t object-center lg:object-fill lg:w-full"
                    src={undiSaksama}
                  />
                </div>
                <h3 className="text-lg font-normal text-black tracking-wider my-4 px-4">
                  Undi Saksama
                </h3>
                <p className="text-sm mt-2 leading-relaxed font-light text-gray-600 px-4 mb-4">
                  Don't worry, we’re here to help. You can schedule a custom
                  1-on-1 consultation with our baristas to learn anything you
                  want to know about coffee roasting and brewing. Email us or
                  call the store for details.
                </p>
                <div className="flex justify-end p-4">
                  <a
                    class="align-right font-bold text-md text-blue-500 hover:text-blue-800"
                    href="#"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="w-1/3">
              <div className="mr-6 border rounded-lg shadow-md">
                <div className="">
                  <img
                    className="m-0 rounded-t object-center lg:object-fill lg:w-full"
                    src={initiative111}
                  />
                </div>
                <h3 className="text-lg font-normal text-black tracking-wider my-4 px-4">
                  The 111 Initiative
                </h3>
                <p className="text-sm mt-2 leading-relaxed font-light text-gray-600 px-4 mb-4">
                  Don't worry, we’re here to help. You can schedule a custom
                  1-on-1 consultation with our baristas to learn anything you
                  want to know about coffee roasting and brewing. Email us or
                  call the store for details.
                </p>
                <div className="flex justify-end p-4">
                  <a
                    class="align-right font-bold text-md text-blue-500 hover:text-blue-800"
                    href="#"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="w-1/3">
              <div className="mr-6 border rounded-lg shadow-md">
                <div className="">
                  <img
                    className="m-0 rounded-t object-center lg:object-fill lg:w-full"
                    src={myHutan}
                  />
                </div>
                <h3 className="text-lg font-normal text-black tracking-wider my-4 px-4">
                  MyHutan
                </h3>
                <p className="text-sm mt-2 leading-relaxed font-light text-gray-600 px-4 mb-4">
                  Don't worry, we’re here to help. You can schedule a custom
                  1-on-1 consultation with our baristas to learn anything you
                  want to know about coffee roasting and brewing. Email us or
                  call the store for details.
                </p>
                <div className="flex justify-end p-4">
                  <a
                    class="align-right font-bold text-md text-blue-500 hover:text-blue-800"
                    href="#"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  testimonials: PropTypes.array,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  }),
  features: PropTypes.array
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        testimonials={frontmatter.testimonials}
        intro={frontmatter.intro}
        features={frontmatter.features}
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
        title
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
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
        testimonials {
          author
          quote
        }
        features {
          title_text
          subtitle_text
        }
      }
    }
  }
`;
