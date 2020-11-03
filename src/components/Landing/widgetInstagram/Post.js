import React from 'react';
import './post.scss';


const Post = ({image, comments, likes, text, linkPost}) => {
    return (
        <article className='cardPost'>
            <div className='content'>
                <a href={linkPost} target='_blank' rel="noopener noreferrer">
                    <img className='cardPost__image' src={image} alt='imagen post instagram Biker girls spain' />
                    <p className='cardPost__text'>{text}</p>
                </a>
            </div>
            <div className='cardPost__contentSocial'>
                <div>
                    <i class="far fa-comment"></i>
                    <p>{comments}</p>
                </div>
                <div>
                    <i class="far fa-heart"></i>
                    <p>{likes}</p>
                </div>
            </div>
            
        </article>
    );
};



export default Post;