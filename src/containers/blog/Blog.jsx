import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './import';
import './blog.css';

const Blog = () => (
  <div className="BnB__blog section__padding" id="blog">
    <div className="BnB__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="BnB__blog-container">
      <div className="BnB__blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 26, 2022" text="The Future of Mobile App Development: Trends and Technologies" />
      </div>
      <div className="BnB__blog-container_groupB">
        <Article imgUrl={blog02} date="Jan 26, 2023" text="User Experience (UX) Design: Enhancing Engagement in Mobile Apps" />
        <Article imgUrl={blog03} date="Jan 31, 2023" text="Web Application Development: Key Considerations for Success"/>
        <Article imgUrl={blog04} date="Aoril 11, 2023" text="Choosing the Right Technology Stack for Your Mobile App"/>
        <Article imgUrl={blog05} date="April 21, 2023" text="Mobile App Security: Safeguarding User Data and Building Trust" />
      </div>
    </div>
  </div>
);

export default Blog;
