import { useState, useEffect } from 'react'
import './style.newPostPage.css'

function Post(props) {
    function onMouseEnter(e) {
        e.currentTarget.classList.add('shadow')
    }
    function onMouseLeave(e) {
        e.currentTarget.classList.remove('shadow')
    }
    return (
        <div className="postItem" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <div className="postHolder" >
                <div className="postThumbnailHolder">
                    <a href={`/post/${props.post._id}`} className="postThumbnailWrapper">
                        <img alt="" className="postItemThumbnail" src={props.post.images[0]}>
                        </img>
                    </a>

                </div>
                <div className="postItemCaption">
                    <a href={`/post/${props.post._id}`} target="_blank" rel="noopener noreferrer" className="postCaption">
                        {props.post.title}
                    </a>
                    <span className="postPrice">{props.post.price}</span>
                </div>
                <div className="postItemFooter">
                    <a href="/">
                        <img alt="" className="postUserAvatar" height="16" width="16" src=""></img>
                    </a>
                    <div className="divider"></div>
                    <div className="postItemText">
                        <span className="itemText">{props.post.createDate}</span>
                    </div>
                    <div className="divider"></div>
                    <div className="postItemText">
                        <span className="itemText">{props.post.address}</span>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Post