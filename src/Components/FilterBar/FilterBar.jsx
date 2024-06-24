import React from "react";
import "./FilterBar.css";
import TagsH from "./../TagsH/Tags";

export default function FilterBar() {
  const Category = [
    { id: 1, catName: "Commercial", catNum: 15 },
    { id: 2, catName: "Office", catNum: 15 },
    { id: 3, catName: "Shop", catNum: 15 },
    { id: 4, catName: "Educate", catNum: 15 },
    { id: 5, catName: "Academy", catNum: 15 },
    { id: 6, catName: "Single family home", catNum: 15 },
  ];

  const RecentPosts = [
    {
      id: 1,
      imageUrl: "./../../assetsProject/imges/blogListing-Recent posts(3).png",
      recentPostText: "Best LearnPress WordPress Theme Collection for 2023",
    },
    {
      id: 2,
      imageUrl: "./../../assetsProject/imges/blogListing-Recent posts(1).png",
      recentPostText: "Best LearnPress WordPress Theme Collection for 2023",
    },
    {
      id: 3,
      imageUrl: "./../../assetsProject/imges/blogListing-Recent posts(2).png",
      recentPostText: "Best LearnPress WordPress Theme Collection for 2023",
    },
  ];
  return (
    <>
      <div className="SHaaban-category-area">
        <h4 className="SHaaban-adding-margin-bottom SHaaban-category-area-title">
          Category
        </h4>
        {Category.map((cat) => {
          return (
            <div className="SHaaban-category-body" key={cat.id}>
              <p className="SHaaban-remove-margin">{cat.catName}</p>
              <p className="SHaaban-remove-margin">{cat.catNum}</p>
            </div>
          );
        })}
      </div>
      <div className="SHaaban-recent-posts-area">
        <h4 className="SHaaban-adding-margin-bottom SHaaban-recent-posts-area-title">
          Recent Posts
        </h4>
        {RecentPosts.map((post) => {
          return (
            <div className="SHaaban-recent-post-body" key={post.id}>
              <img
                className="SHaaban-adding-style-for-recent-posts-img"
                src={post.imageUrl}
                alt=""
              />
              <p className="SHaaban-adding-style-for-recent-posts-paragraph">
                {post.recentPostText}
              </p>
            </div>
          );
        })}
      </div>
      <div className="SHaaban-adding-style-for-tags-area">
        <TagsH />
      </div>
    </>
  );
}
