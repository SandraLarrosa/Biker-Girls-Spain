import React from 'react';
import withInstagramFeed from 'origen-react-instagram-feed';
import './instagram.scss';
import LastPost from './LastPost';




const Instagram = (props) => {
    return (
        <>
            <section className='sectionInstagram'>
                <h2 className='sectionInstagram__title'>Instagram</h2>
                <LastPost dataAccount={props} dataMedia={props.media}/>
            </section>
        </>
    );
};



export default withInstagramFeed(Instagram);