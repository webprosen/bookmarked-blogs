import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import BlogItem from '../BlogItem/BlogItem';
import BookmarkedTitle from '../BookmarkedItem/BookmarkedTitle';
import './Blogs.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);
    const [reads, setReads] = useState([]);
    const [bookmarked, setBookmarked] = useState([]);
    
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);

    let totalReadTime = 0;
    for(const item of reads){
        totalReadTime = totalReadTime + item.readTime * item.readCount;
    }

    const markAsRead = (blog) => {
        let newReads = [];
        const exists = reads.find(pd => pd.id === blog.id);
        if (!exists) {
            blog.readCount = 1;
            newReads = [...reads, blog];
        } else {
            exists.readCount = exists.readCount + 1;
            const remaining = reads.filter(pd => pd.id !== blog.id);
            newReads = [...remaining, exists];
        }
        setReads(newReads);
    }

    const notify = () => toast.warn('Already exists this blog in bookmarked list', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
    
    const addToBookmarked = (blog) => {
        let newBookmarked = [];
        const exists = bookmarked.find(item => item.id === blog.id);
        if (!exists) {
            newBookmarked = [...bookmarked, blog];
            setBookmarked(newBookmarked);
        } else {
            notify();
        }
    }

    return (
        <>
            <div className='blogs-container'>
                <div className='blogs'>
                    <div className="blogs-wrap">
                        {
                            blogs.map(blog => <BlogItem key={blog.id} blog={blog} addToBookmarked={addToBookmarked} markAsRead={markAsRead}></BlogItem>)
                        }
                    </div>
                </div>
                <div className='result-container'>
                    <div className='spent-time'>
                        Spent time on read : {totalReadTime} min
                    </div>
                    <div className="bookmarked-blogs">
                        <div className='bookmarked-count'>Bookmarked Blogs: {bookmarked.length}</div>
                        {
                            bookmarked.map(item => <BookmarkedTitle key={item.id} item={item}></BookmarkedTitle>)
                        }
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default Blogs;