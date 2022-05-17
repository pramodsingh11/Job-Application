import React from "react";
import Header from "./Header";
import photosnap from "./images/photosnap.svg";
import manage from "./images/manage.svg";
import account from "./images/account.svg";
import myhome from "./images/myhome.svg";
import loopstudios from "./images/loop-studios.svg";
import faceit from "./images/faceit.svg";
import shortly from "./images/shortly.svg";
import insure from "./images/insure.svg";
import eyecam from "./images/eyecam-co.svg";
import filtercompany from "./images/the-air-filter-company.svg";

import data from "./data.json";
const Home = () => {
  const images = [
    photosnap,
    manage,
    account,
    myhome,
    loopstudios,
    faceit,
    shortly,
    insure,
    eyecam,
    filtercompany,
  ];
  console.log("daata :", data);
  return (
    <>
      <Header />
      {data.map((data, key) => (
        <div className="homepage">
          <div className="sectionleft">
            <div>
              <img className="image_css" src={images[key]} />
            </div>

            <div className="content">
              <div className="heading">
                <div
                  className="company"
                  style={{
                    color: "rgb(33, 204, 204)",
                    marginTop: "4px",
                    cursor: "pointer",
                  }}
                >
                  {data.company}
                </div>
                {data.new ? <div className="new">New</div> : null}
                {data.featured ? (
                  <div className="featured">Featured</div>
                ) : null}
              </div>
              <div className="role">{data.position}</div>
              <div className="status">
                <p>{data.postedAt} </p>

                <span>&#183;</span>
                <p>{data.contract}</p>
                <span>&#183;</span>
                <p>{data.location}</p>
              </div>
              <hr className="only_mobile"/>
            </div>
            <div></div>
       
          
          </div>
 
          <div className="sectionright">
            <div>
              <button style={{ border: "none" }}>{data.role}</button>{" "}
            </div>
            <div>
              <button>{data.level}</button>{" "}
            </div>

            {data.languages.map((language) => (
              <div>
                <button>{language}</button>{" "}
              </div>
            ))}
            {data.tools.map((tool) => (
              <div>
                <button>{tool}</button>{" "}
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Home;
