import React from 'react';
import { useTheme } from '../ThemeContext';
import './BusinessBlog.css';

function Post({ src, heading, description, time }) {
    const { theme } = useTheme();

    return (
        <div className={`post-content row mb-2 ${theme}`}>
            <div className='col-3 post-image-div ' style={{ lineHeight: '100%', height: '100%' }}  >
                {src && <img src={src} className='post-image img-fluid' alt='no image' />}
            </div>
            <div className='col-9 post-body-div' >
                {heading && <span className='post-body'>{heading}</span>
                }
                {description && <span className="post-desc">{description}</span>}
                {time && <span className='post-time'>{time}</span>}

            </div>
        </div >
    );
}

export default Post;
