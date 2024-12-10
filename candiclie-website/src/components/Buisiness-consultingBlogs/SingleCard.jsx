import React from 'react'
import { useTheme } from '../ThemeContext';
import './BusinessBlog.css';


function SingleCard({ className, src, title, body, time, blogger, style, url }) {
    const { theme } = useTheme();


    return (<>
        <div className={`card blog-card ${theme} ${className ?? ''}`} style={{ marginBottom: '6px', padding: 'none', ...style }}>
            {src &&
                <img src={src}
                    className="card-img-top"
                    alt="no image"
                    style={{ width: '100%' }} />
            }

            <div className="card-body">
                <a className='card-warpper-link' href={url ?? '#'}>
                    {title &&
                        (<h5 className="card-title"
                            style={{ fontSize: '18px', paddingBottom: '5px', fontWeight: '600' }}>
                            {title}</h5>)
                    }
                    {body &&
                        (<p className="card-text" >{(() => body.length > 100 ? body.slice(0, 100) + '...' : body)()}</p>)}

                    <div className='row stick-v-end'>
                        <div className='col-6'
                            style={{ color: 'grey' }}>
                            {time &&
                                <span className="card-text">{time}</span>}
                        </div>

                        <div className='col-6 d-flex justify-content-end'
                            style={{ color: 'grey' }}>
                            {blogger &&
                                <span className="card-text" >{blogger}</span>}
                        </div>
                    </div>
                </a>
            </div>
        </div>

    </>)
}

export default SingleCard