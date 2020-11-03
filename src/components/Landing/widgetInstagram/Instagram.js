import React, { useEffect } from 'react';
import withInstagramFeed from 'origen-react-instagram-feed';
import './instagram.scss';
import LastPost from './LastPost';




const Instagram = (props) => {
    
    useEffect(() => {
        console.log(props);
    }, [])
    console.log(props);

    return (
        <>
            <section className='widgetInstagram'>
                <h2>Instagram</h2>
                <h3>{`@${props.accountName}`}</h3>
                <img src={props.profilePic}/>
                <h4>Followed</h4>
                <p>{props.accountFollowedBy}</p>
                <LastPost dataMedia={props.media}/>
            </section>
        </>
    );
};



export default withInstagramFeed(Instagram);