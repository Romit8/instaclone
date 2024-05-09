import React, { useState } from "react";
import { GoHomeFill } from "react-icons/go";
import { FaSearch } from "react-icons/fa";
import { MdExplore } from "react-icons/md";
import { BsCameraReels } from "react-icons/bs";
import { FaRegEnvelope } from "react-icons/fa6";
import { IoIosNotificationsOutline } from "react-icons/io";
import { LuPlusSquare } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";

import {
  AiOutlineComment,
  AiOutlineShareAlt,
  AiOutlineEllipsis,
} from "react-icons/ai";
import "./home.css";
const Home = () => {
  const [postes, setPostes] = useState([
    {
      id: 1,
      uname: "Rose",
      caption: "Beautiful ",
      follow: "follow",
      imgUrl:
        "https://img.freepik.com/free-photo/close-up-rose-isolated_23-2150905068.jpg?t=st=1715238307~exp=1715241907~hmac=5f8833eb98415a3dc4a7fba84e7506c4de4b47fd3d17f392bfb05148a162d755&w=740",
    },
    {
      id: 2,
      uname: "romit",
      caption: "Fantastic",
      follow: "follow",
      imgUrl:
        "https://img.freepik.com/free-photo/ai-generated-sunflowers_23-2150681834.jpg?t=st=1715238362~exp=1715241962~hmac=33a1593976cde636ba3e2b711d464a7bce2d0195d2d8c601166b0e6351e7d14b&w=360",
    },
    {
      id: 3,
      uname: "karan",
      caption: "Caption text",
      follow: "follow",
      imgUrl:
        "https://img.freepik.com/free-photo/business-man-mobile-phone_23-2148018677.jpg?t=st=1715238089~exp=1715241689~hmac=7a8b2ed387ca037375611627d7668bedb51a7fd80a70eea7777442c51bab6886&w=740",
    },
    {
      id: 4,
      uname: "rohit",
      caption: "Caption text",
      follow: "follow",
      imgUrl:
        "https://img.freepik.com/premium-photo/portrait-young-school-teacher-holding-digital-tablet-created-with-generative-ai_762026-43661.jpg?w=360",
    },
    {
      id: 5,
      uname: "sachin",
      caption: "Caption text",
      follow: "follow",
      imgUrl:
        "https://img.freepik.com/free-photo/customer-service-cute-guy-grey-suit-with-computer-headset-writing-down-notes_140725-164295.jpg?t=st=1715237535~exp=1715241135~hmac=c87e74d95aa71f2c3b9440393644c381ee940851bbf0ace85ec3dccdbbe6dfd3&w=826",
    },
    {
      id: 6,
      uname: "neha",
      caption: "Caption text",
      follow: "follow",
      imgUrl:
        "https://img.freepik.com/free-photo/portrait-smiling-young-businesswoman-holding-eyeglasses-hand-looking-camera_23-2147943723.jpg?t=st=1715237571~exp=1715241171~hmac=df11e2b9acd23397d1389090c5ae5abf4cf1ebe60d315233d7cb38f966d6caf2&w=740",
    },
    {
      id: 7,
      uname: "anjali",
      caption: "Caption text",
      follow: "follow",
      imgUrl:
        "https://img.freepik.com/premium-photo/businesswoman-video-conferencing_23-2148738260.jpg?w=740",
    },
  ]);

  const [activeLink, setActiveLink] = useState("home");
  const handleSetActiveLink = (link) => {
    setActiveLink(link);
  };

  // Slice the postes array to display only 4 to 5 posts
  const displayedPosts = postes.slice(0, 8);

  return (
    <div className="main-conatiner">
      <div className="row">
        <div className="col-lg-3 col-sm-12 ">
          <div className="left-sidebar">
            <div className="logo ">
              <a href="">Instagram</a>
            </div>
            <ul className="ul_list">
              <li className={activeLink === "home" ? "active" : ""}>
                <a href="/home" onClick={() => handleSetActiveLink("home")}>
                  <GoHomeFill />
                  <span className="nav-name">Home</span>
                </a>
              </li>
              <li className="nav-name">
                <a href="/search" onClick={() => handleSetActiveLink("search")}>
                  <FaSearch className="nav-name " />
                  <span className="nav-name ">Search</span>
                </a>
              </li>
              <li>
                <a href="">
                  <MdExplore />
                  <span className="nav-name">Explore</span>
                </a>
              </li>
              <li className={activeLink === "reel" ? "active" : ""}>
                <a href="/reel" onClick={() => handleSetActiveLink("reel")}>
                  <BsCameraReels />
                  <span className="nav-name">Reels</span>
                </a>
              </li>
              <li>
                <a href="">
                  <FaRegEnvelope />
                  <span className="nav-name">Message</span>
                </a>
              </li>
              <li className="nav-name ">
                <a href="">
                  <IoIosNotificationsOutline className="nav-name " />
                  <span className="nav-name">Notification</span>
                </a>
              </li>
              <li>
                <a href="">
                  <LuPlusSquare />
                  <span className="nav-name">Create</span>
                </a>
              </li>
              <li>
                <a href="">
                  <CgProfile />
                  <span className="nav-name">Profile</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-lg-9 col-sm-12">
          <div className="row">
            <div className="right-sidebar">
              {displayedPosts.map((post) => (
                <div className="card mb-3" key={post.id}>
                  <div className="row g-0">
                    <div className="col-sm-10">
                      <div className="card-body">
                        <img src={post.imgUrl} alt="" />
                        <div className="row title">
                          <h4 className="card-title">{post.uname}</h4>
                          <p className="card-text">{post.follow}</p>
                        </div>
                      </div>
                    </div>
                    {/* Icons and other actions */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
