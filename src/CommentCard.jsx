import { useState, useEffect } from "react"
import { getUser } from "./ApiCalls"

export const CommentCard = ({ comment }) => {
    const { author, body, created_at, votes } = comment
    const date = new Date(created_at)
    const dateFormatted = date.toLocaleString("en-GB", { day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric' });

    const [avatar, setAvatar] = useState("https://static.vecteezy.com/system/resources/previews/000/440/213/original/question-mark-vector-icon.jpg")

    useEffect(() => {
        getUser(author)
            .then(({ avatar_url }) => {
                setAvatar(avatar_url)
            })
    })

    return (
        <div className="comment-card">
            <div className="comment-card-user">
                <img src={avatar} alt={author} />
                <h3>{author}</h3>
                <p class="comment-card-buttons">{votes}👍 <button>vote</button></p>
            </div>

            <div className="comment-card-text">
                <p>{body}</p>
                <br />
                <p class="comment-card-timestamp">{dateFormatted}</p>
            </div>
        </div>
    )

}