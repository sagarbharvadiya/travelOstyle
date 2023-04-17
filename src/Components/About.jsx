import React, { useState, useEffect } from "react";
import thailandImg from "../images/backpacker.jpg";
import landmark from "../images/full-shot-travel.jpg";
import client from "../Client";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const About = () => {
  const [entry, setEntry] = useState([]);

  useEffect(() => {
    const fetchPage = async () => {
      try {
        const response = await client.getEntries({
          content_type: "basicPage",
        });
        console.log();
        console.log(response);
        if (response.items.length) {
          setEntry(response.items);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchPage();
  }, []);
  return (
    <>
      {entry.map((item) => {
        const { title, description, positionOfImage, subTitle } = item.fields;
        {/* const imageUrl = item.fields.image.fields.file.url; */}
        const richTextContent = documentToReactComponents(description)
        const id = item.sys.id
        return (
          <React.Fragment key={id}>
            <section className="about_us same_width">
              <div className="about_us_wrapper">
                <div className="about_us_left">
                  <div className="about_us_title">
                    <h2>{title}</h2>
                    <span>{subTitle}</span>
                  </div>
                  <div className="about_us_content">
                    <p>{richTextContent}</p>
                  </div>
                </div>
                {/* <div className="about_us_right">
                  <div className="about_us_image">
                    <img src={imageUrl} alt="4873" />
                    <img className="image" src={landmark} alt="travel" />
                  </div>
                </div> */}
              </div>
            </section>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default About;
