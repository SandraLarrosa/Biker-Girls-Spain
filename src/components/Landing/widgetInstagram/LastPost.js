import React from 'react';


const LastPost = (props) => {
    console.log(props.dataMedia);


    const printLastPosts = () => {
    if (props === undefined) {
        return (
            <h4>Cargando...</h4>
        )
    } else {
        props.dataMedia.map((lastPost) => {
             console.log(lastPost);
            return (
                <p>{lastPost.caption}</p>
            )
        })
        }
    }

    return (
        <div>
            {printLastPosts}
        </div>
    );
};



export default LastPost;