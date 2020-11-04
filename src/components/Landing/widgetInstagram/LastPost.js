import React from 'react';
import Post from './Post';


const LastPost = ({dataAccount, dataMedia}) => {
    console.log(dataMedia, dataAccount);
    let printLastPost;

    if (dataMedia === undefined) {
        return (
            <h4>Cargando...</h4>
        )
    } else {
        printLastPost = dataMedia.map((post) => {
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
            <div className='headerInstagramAccount'>
                <div className='contentInfoInstagramAccount'>
                    <img className='contentInfoInstagramAccount__image'src={dataAccount.profilePic} alt='Imagen perfil instagram'/>
                    <h3 className='contentInfoInstagramAccount__account'>{`@${dataAccount.accountName}`}</h3>
                </div>
                <div className='contentFollowersInstagramAccount'>
                    <h4 className='contentFollowersInstagramAccount__follows'>Seguidores:</h4>
                    <p className='contentFollowersInstagramAccount__dataFollows'>{dataAccount.accountFollowedBy}</p>
                </div>
            </div>
            <ul>
                {printLastPost}
            </ul>
        </>
    )
};



export default LastPost;