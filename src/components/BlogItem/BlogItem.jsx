import React from 'react';
import './BlogItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

const BlogItem = (props) => {
    const {id, authorName, blogTitle, blogCoverImage, authorImage, readTime, publishDate} = props.blog;
    const addToBookmarked = props.addToBookmarked;
    const markAsRead = props.markAsRead;
    
    return (
        <div className='blog'>
            <div className='blog-top'>
                <img src={blogCoverImage} alt="" />
            </div>
            <div className='blog-middle'>
                <div className="blog-middle-left">
                    <div className='author-image'>
                        <img src={authorImage} alt="" />
                    </div>
                    <div>
                        <h3 className='author-image'>{authorName}</h3>
                        <span className='publish-date'>{publishDate}</span>
                    </div>
                </div>
                <div className="blog-middle-right">
                    {readTime} min read 
                    <span onClick={() => addToBookmarked(props.blog)}>
                        <FontAwesomeIcon icon={faBookmark} size="xl" />
                    </span>
                </div>
            </div>
            <div className="blog-bottom">
                <h1 className='blog-title'>{blogTitle}</h1>
                <div className='blog-tag'>#beginners #programming</div>
                <button className='btn-mark-as-read' onClick={()=> markAsRead(props.blog)}>Mark as read</button>
            </div>
        </div>
    );
};

export default BlogItem;