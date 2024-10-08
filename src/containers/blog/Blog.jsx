import React from "react";
import Article from "../../components/article/Article";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import "./blog.css";

const Blog = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, <br /> We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article
            imgURL={blog01}
            date={formattedDate}
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article
            imgURL={blog02}
            date={formattedDate}
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            imgURL={blog03}
            date={formattedDate}
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            imgURL={blog04}
            date={formattedDate}
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            imgURL={blog05}
            date={formattedDate}
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
