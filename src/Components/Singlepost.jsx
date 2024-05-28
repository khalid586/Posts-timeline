import React, { useState } from 'react'
import { FaRegCommentAlt, FaUser, FaUserAltSlash } from 'react-icons/fa';
import { FaUserPen } from 'react-icons/fa6';
import { PiSubtitles } from 'react-icons/pi';
import Comment from './Comment';

function Singlepost({post,users,comments}) {
    const {title,body,userId,id} = post;
    const {name} = users.find(currUser => userId == currUser.id);
    const postComments = comments.filter(comment => comment.postId == id)
    
    console.log(postComments)
    const [showComments,setShowComments] = useState(false);
    
    return (
        <div className="card mx-4 md:w-[70vw] lg:w-[50vw] bg-base-100 shadow border-b-4 border-l-4 border-l-red-500 border-b-red-500 hover:border-l-green-500 hover:border-b-green-500 duration-500">
            <div className="card-body">
                <p className='font-bold text-xs'>#{id}</p>
                <h2 className="font-bold text-3xl flex items-center gap-2 mx-4">{title}</h2>
                <p className='mx-4 flex items-center gap-2'><FaUserPen className='text-blue-500'></FaUserPen> {name}</p>
                <p className='font-semibold rounded-xl bg-yellow-100 min-h-28 mx-4 p-4'>{body}</p>
                { 
                    showComments ?
                    <div>
                    {
                        postComments.map(comment =>
                            <Comment comment = {comment}></Comment>
                        )
                    }
                        <button onClick={() => setShowComments(!showComments)} className="btn border-red-500 bg-white text-red-500 flex items-center gap-2"><FaRegCommentAlt></FaRegCommentAlt>Hide comments</button>
                    </div>
                    :
                    <div className="mx-4 my-4">
                        <button onClick={() => setShowComments(!showComments)} className="btn border-green-500 bg-white text-green-500 flex items-center gap-2"><FaRegCommentAlt></FaRegCommentAlt> Comments</button>
                    </div>
                }
            </div>
        </div>
    )
}

export default Singlepost