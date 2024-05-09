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
import "./reel.css";
import AddCommentModal from "./AddCommentModal";

const Reels = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: "harsh",
      caption: "Beautiful sunset 🌅",
      follow: "follow",
      likes: 0,
      comments: [],
      shares: 0,
      videoUrl:
        "https://media.istockphoto.com/id/145721138/video/cyclone-storm-surge.mp4?s=mp4-640x640-is&k=20&c=zBSLZ1ORtXCtZEDQZS7OHMRFlD9R0sxwyoRWiO8dSdw=",
    },
    {
      id: 2,
      username: "romit",
      caption: "Delicious food 🍲",
      follow: "follow",
      likes: 0,
      comments: [],
      shares: 0,
      videoUrl:
        "https://media.istockphoto.com/id/1479135181/video/firework-with-audio.mp4?s=mp4-640x640-is&k=20&c=m_PN_5lsIh1oVrWz_siAQyMGOcbwRr9Kuv_JsHRw5x0=",
    },
    {
      id: 3,
      username: "romit",
      caption: "Delicious food 🍲",
      follow: "follow",
      likes: 0,
      comments: [],
      shares: 0,
      videoUrl:
        "https://media.istockphoto.com/id/1704134840/video/two-young-women-driving-a-quad-bike-at-natural-parkland-romania.mp4?s=mp4-640x640-is&k=20&c=g87IhoKx3OpG48L5DyepnGr9CkbzlU7Z8RyimdYvS7Y=",
    },
    {
      id: 4,
      username: "romit",
      caption: "Delicious food 🍲",
      follow: "follow",
      likes: 0,
      comments: [],
      shares: 0,
      videoUrl:
        "https://media.istockphoto.com/id/1475471207/video/heavy-traffic-in-front-of-a-busy-streets-in-mumbai-4k.mp4?s=mp4-640x640-is&k=20&c=qlAsSmxoxDckx2OSyx8fu2OA-E0hyoLXjpOVZEUH9BI=",
    },
    {
      id: 5,
      username: "romit",
      caption: "Delicious food 🍲",
      follow: "follow",
      likes: 0,
      comments: [],
      shares: 0,
      videoUrl:
        "https://media.istockphoto.com/id/1875927210/video/aerial-photography-of-the-commercial-area-by-the-lake-in-the-evening.mp4?s=mp4-640x640-is&k=20&c=6mak6tGzMP9fTyflwYfPOTMvVJagl1zwWAai4BMamjk=",
    },
    {
      id: 6,
      username: "romit",
      caption: "Delicious food 🍲",
      follow: "follow",
      likes: 0,
      comments: [],
      shares: 0,
      videoUrl:
        "https://media.istockphoto.com/id/1875927210/video/aerial-photography-of-the-commercial-area-by-the-lake-in-the-evening.mp4?s=mp4-640x640-is&k=20&c=6mak6tGzMP9fTyflwYfPOTMvVJagl1zwWAai4BMamjk=",
    },
    {
      id: 7,
      username: "romit",
      caption: "Delicious food 🍲",
      follow: "follow",
      likes: 0,
      comments: [],
      shares: 0,
      videoUrl:
        "https://media.istockphoto.com/id/1875927210/video/aerial-photography-of-the-commercial-area-by-the-lake-in-the-evening.mp4?s=mp4-640x640-is&k=20&c=6mak6tGzMP9fTyflwYfPOTMvVJagl1zwWAai4BMamjk=",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState(null);

  const handleShare = async (postId) => {
    const post = posts.find((post) => post.id === postId);
    if (post) {
      try {
        if (navigator.share) {
          await navigator.share({
            title: post.caption,
            text: post.caption,
            url: window.location.href,
          });
        } else {
          throw new Error("Web Share API not supported");
        }
      } catch (error) {
        console.error("Error sharing:", error);
      }
    }
  };

  const handleComment = (postId, comment) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        // Handle comment logic here
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  const openCommentModal = (postId) => {
    setSelectedPostId(postId);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedPostId(null);
  };

  const handleLike = (postId) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        return {
          ...post,
          likes: post.likes + (post.isLiked ? -1 : 1),
          isLiked: !post.isLiked,
        };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  const isPostLiked = (postId) => {
    const post = posts.find((post) => post.id === postId);
    return post ? post.isLiked : false;
  };

  return (
    <div className="row">
       <div className="col-lg-3 col-sm-12 ">
          <div className="left-sidebar">
            <div className="logo ">
              <a href="">Instagram</a>
            </div>
            <ul className="ul_list">
              <li>
                <a href="/home" >
                  <GoHomeFill />
                  <span className="nav-name">Home</span>
                </a>
              </li>
              <li className="nav-name">
                <a href="/search" >
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
              <li >
                <a href="/reel" >
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
      <div className="col-lg-9 col-sm-4 ">
        {/* <div className="row"> */}
          <div className="right-sidebar">
            {posts.map((post) => (
                  <div className="card " >
              <div className="row">
                  <div className="col-lg-10 " key={post.id}>
                    <div className="card-body">
                      <video controls className="embed-responsive embed-responsive-16by9">
                        <source src={post.videoUrl} type="video/mp4" />
                      </video>
                      <div className="d-flex title">
                        <h4 className="card-title">{post.username}</h4>
                        <p className="card-text">{post.follow}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 ">
                    <div className="icon-column">
                      <div className="icon" onClick={() => handleLike(post.id)}>
                        <FaRegHeart
                          color={isPostLiked(post.id) ? "red" : "inherit"}
                        />
                      </div>
                      <div
                        className="icon"
                        onClick={() => openCommentModal(post.id)}
                      >
                        <AiOutlineComment />
                      </div>
                      <div
                        className="icon"
                        onClick={() => handleShare(post.id)}
                      >
                        <AiOutlineShareAlt />
                      </div>
                      <div className="icon">
                        <AiOutlineEllipsis />
                      </div>
                    </div>
                  </div>
                </div>
               </div>
            ))}
          </div>
        {/* </div> */}
      </div>

      {/* CommentModal as before */}
      <AddCommentModal
        isOpen={showModal}
        closeModal={closeModal}
        postId={selectedPostId}
        handleComment={handleComment}
      />
    </div>
  );
};

export default Reels;
