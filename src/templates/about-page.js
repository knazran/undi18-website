import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

import tharma from "../img/tharma.png";
import qyira from "../img/qyira.png";

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <div>
      <section id="about_us">
        <div className="container mx-auto px-4 py-2 lg:px-16 lg:flex">
          <div className="lg:my-6 w-full lg:w-1/2">
            <h3 className="text-3xl lg:text-4xl font-semibold tracking-wider py-2">
              From a Student Movement to a Constitutional Amendment
            </h3>
            <p className="text-md mt-2 mb-3 lg:mb-6 leading-relaxed font-light">
              Undi18 aims to bridge the gap between politicians, policymakers,
              and youth. We help Malaysians read and understand policies beyond
              politics.
            </p>
          </div>
          <div className="my-0 lg:my-6 w-1/2 flex-grow-0">
            <img
              className="m-0 ml-6  lg:mr-4 rounded-lg object-center lg:object-fill h-0 lg:h-full"
              src="https://picsum.photos/800/300"
            />
          </div>
        </div>
      </section>

      <section id="our_story">
        <div className="container mx-auto px-4 py-4 pt-2 lg:px-16 lg:flex">
          <div className="my-4 mt-2 w-full">
            <div class="w-20 h-1 bg-red-800 rounded-lg self-start mb-2"></div>
            <h3 className="text-2xl font-semibold tracking-wider mb-4 lg:mb-6">
              Our Story
            </h3>
            <div className="text-sm lg:text-md" dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </div>
      </section>

      <section id="our_pillars">
        <div className="container mx-auto px-4 py-4 pt-2 lg:px-16 lg:flex">
          <div className="my-4 w-full">
            <div class="w-20 h-1 bg-red-800 rounded-lg self-start mb-2"></div>
            <h3 className="text-2xl font-semibold tracking-wider mb-6">
              Our Pillars
            </h3>

            <h3 className="text-md lg:text-lg font-normal tracking-wider mb-2">
              1. A.E.I.O Youth
            </h3>
            <h3 className="text-md lg:text-lg font-normal tracking-wider mb-2">
              2. Advocacy
            </h3>
            <h3 className="text-md lg:text-lg font-normal tracking-wider mb-2">
              3. Education
            </h3>
            <h3 className="text-md lg:text-lg font-normal tracking-wider mb-2">
              4. Interconnection
            </h3>
            <h3 className="text-md lg:text-lg font-normal tracking-wider mb-2">
              5. Outreach
            </h3>
            <h3 className="text-md lg:text-lg font-normal tracking-wider mb-2">
              6. Youth
            </h3>

            {/* <div className="flex flex-wrap">
              <div className="w-1/3">
                <div class="lg:flex border rounded shadow-md my-4 mr-6">
                  <h3 className="text-md tracking-wide leading-snug font-bold mb-4">
                    Something about Pillar
                  </h3>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      <section id="our_team">
        <div className="container mx-auto px-4 py-4 pt-2 lg:px-16 lg:flex">
          <div className="my-2 w-full">
            <div class="w-20 h-1 bg-red-800 rounded-lg self-start mb-2"></div>
            <h3 className="text-2xl font-semibold tracking-wider mb-2">
              The Team
            </h3>

            <div className="flex flex-wrap mt-8">
              <div className="w-full lg:w-1/3">
                <div className="border rounded shadow-md mb-4 lg:mb-0 lg:mx-6">
                  <div className="flex flex-col">
                    <div>
                      <img
                        className="w-full m-0 rounded rounded-b-none object-center lg:object-fill lg:h-full"
                        src={tharma} alt="Tharma"
                      />
                    </div>
                    <div className="px-4 py-4 text-center">
                      <h3 className="text-xl font-semibold tracking-wider">
                        Tharma Pillai
                      </h3>
                      <p className="text-sm leading-relaxed font-light text-gray-600 mb-4">
                        Co-Founder & Advocacy/Strategy Director
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/3">
                <div className="border rounded shadow-md mb-4 lg:mb-0 lg:mx-6">
                  <div className="flex flex-col">
                    <div>
                      <img
                        className="m-0 w-full rounded rounded-b-none object-center lg:object-fill lg:h-full"
                        src={qyira} alt="Qyira"
                      />
                    </div>
                    <div className="px-4 py-4 text-center">
                      <h3 className="text-xl font-semibold tracking-wider">
                        Nur Qyira Yusri
                      </h3>
                      <p className="text-sm leading-relaxed font-light text-gray-600 mb-4">
                        Co-Founder & Education/Programme Director
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/3">
                <div className="border rounded shadow-md mb-4 lg:mb-0 lg:mx-6">
                  <div className="flex flex-col">
                    <div>
                      <img
                        className="m-0 rounded rounded-b-none object-center lg:object-fill lg:h-full"
                        src="https://picsum.photos/400/300"
                      />
                    </div>
                    <div className="px-4 py-4 text-center">
                      <h3 className="text-xl font-semibold tracking-wider">
                        Mun Hong
                      </h3>
                      <p className="text-sm leading-relaxed font-light text-gray-600 mb-4">
                         Director
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
