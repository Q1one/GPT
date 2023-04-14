import { useState, useEffect } from "react"

import "./Post.scss"

function Post({data}) {
    return (
        <div className="Post">
            {
                data.map(item => (
                    <div className="single" key={item.id}>
                        <img src={item.thumbnailUrl}/>
                        <h4>{item.title}</h4>
                    </div>
                ))
            }
        </div>
    )
}

export default Post