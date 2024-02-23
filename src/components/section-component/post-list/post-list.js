import React, { useState, useEffect } from 'react';
import "./post-list.css";

import { CSSTransition } from 'react-transition-group';

import PostCard from '../../common-component/post-card/post-card';

const PostList = ({ filteredPosts, recentPost }) => {
    const [isUpdated, setIsUpdated] = useState(false);

    //트랜지션 이벤트 트리거
    useEffect(() => {
        setIsUpdated(true);
    }, [filteredPosts]);

    return (
        <div className="post-list-wrapper">
            <CSSTransition classNames="fade" timeout={500} in={isUpdated} onEntered={() => setIsUpdated(false)} >
                <ol>
                    {filteredPosts.map((post, index) => (
                        <PostCard key={index} post={post} lastPost={post === recentPost} />
                    ))}
                </ol>
            </CSSTransition>
        </div>
    );
};

export default PostList;
