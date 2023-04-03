import React from 'react';

const BookmarkedItem = (props) => {
    const {blogTitle} = props.item;
    return (
        <div className="bookmarked-item">
            {blogTitle}
        </div>
    );
};

export default BookmarkedItem;