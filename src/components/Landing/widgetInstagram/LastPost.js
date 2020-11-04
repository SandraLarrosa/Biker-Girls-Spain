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
            <a href='https://www.instagram.com/bikergirls_spain/?hl=es' target='_blank' rel="noopener noreferrer">
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
            </a>
            <h3 className='titleLastPost'>Últimas Publicaciones</h3>
            <ul className='listLastPost'>
                {printLastPost}
            </ul>
        </>
    )
};



export default LastPost;