import React from 'react';
import Post from './Post';


const LastPost = (props) => {

    let printLastPost;

    if (props.dataMedia === undefined) {
        return (
            <h4>Cargando...</h4>
        )
    } else {
        printLastPost = props.dataMedia.map((post) => {
            return (
                <li key={post.id}>
                    <Post
                        image={post.displayImage}
                        comments={post.commentsNumber}
                        likes={post.likes}
                        text={post.caption}
                        linkPost={post.postLink}
                    />
                </li>
            )
         }) 
    }
    return (
        <>
            <ul>
                {printLastPost}
            </ul>
        </>
    )
};



export default LastPost;