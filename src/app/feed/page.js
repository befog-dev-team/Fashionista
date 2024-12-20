"use client";

import React from "react";
// Left Sections
import CreatePostSection from "../../components/Feed/CreatePostSection";
import SortBySection from "../../components/Feed/SortBySection";
import PostTextSection from "../../components/Feed/PostTextSection";
import PostTextPhotoSection from "../../components/Feed/PostTextPhotoSection";
import PostTextContentsDocumentSection from "../../components/Feed/PostTextContentsDocumentSection";
import PostTextContentsSection from "../../components/Feed/PostTextContentsSection";
// Right Sections
import ProfileSection from "../../components/Feed/ProfileSection";
import WriteArticleSection from "../../components/Feed/WriteArticleSection";
import MyGroupsSection from "../../components/Feed/MyGroupsSection";
import FollowedHashtagsSection from "../../components/Feed/FollowedHashtagsSection";
import TrendingArticlesSection from "../../components/Feed/TrendingArticlesSection";

const Feed = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center min-h-screen mt-12 space-y-10 lg:space-y-0 lg:space-x-14">
      {/* Left Section */}
      <div className="flex flex-col mb-8 w-full lg:w-[850px] px-4 sm:px-8 lg:px-0">
        {/* Create Post Section */}
        <CreatePostSection />

        {/* Sort By Section */}
        <SortBySection />

        {/* Post Text Section */}
        <PostTextSection />

        {/* Post Text Section with Photo */}
        <PostTextPhotoSection />

        {/* Post Text Section with Content & Documents */}
        <PostTextContentsDocumentSection />

        {/* Post Text Section with Content */}
        <PostTextContentsSection />
      </div>

      {/* Right Section */}
      <div className="mt-5 w-full lg:w-[290px] px-4 sm:px-8 lg:px-0">
        {/* Profile Section */}
        <ProfileSection />

        {/* Write an Article Section */}
        <WriteArticleSection />

        {/* My Groups Section */}
        <MyGroupsSection />

        {/* Followed Hashtags Section */}
        <FollowedHashtagsSection />

        {/* Trending Articles Section */}
        <TrendingArticlesSection />
      </div>
    </div>
  );
};

export default Feed;
