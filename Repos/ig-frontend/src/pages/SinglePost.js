import React, {useState, useEffect, useImperativeHandle} from 'react'
import Post from '../components/Post'

export default ({match, history}) => {

    const {id} = match.params

    const [post, setPost] = useState({})
    const [loading, setLoading] = useState(true)
    const [edit, setEdit] = useState(false)

    //Used for the edit form
    const [description, setDescription] = useState('')

    const fetchPost = async () => {
        const response = await fetch(`http://localhost:1337/posts/${id}`)
        const data = await response.json()

        setPost(data)
        setDescription(data.description)
        setLoading(false)
    }

    const handleDelete = async () =>  {
        const response = await fetch(`http://localhost:1337/posts/${id}`, {
            method: 'DELETE'
        })
        const data = await response.json()
        history.push('/')
    }

    const handleEditSubmit = async (event) => {
        event.preventDefault()

        const response = await fetch(`http://localhost:1337/posts/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            description
        })
        
    })
    const data = await response.json() 
    fetchPost()
    console.log("handleEditSubmit data", data)

  



}

    useEffect(() => {
        fetchPost()

    }, [])


    return (
        <div>
            {loading && 
            <p>Loading</p>
            
            }
            {!loading &&
                <>
                    {post.id &&
                    <>
                    <button onClick={handleDelete}>Delete this Post</button>  
                    <button onClick={() => setEdit(true)}>Edit this Post</button>
                    {edit &&
                        <form onSubmit={handleEditSubmit}>
                            <input
                                value={description}
                                onChange={(event) => setDescription(event.target.value)}
                                placeholder="New description"
                            /> 
                            <button>Confirm</button>
                        </form>
                    }
                        <Post
                            description = {Post.description}
                            url = {post.image && post.image.url}
                            likes = {post.likes}
                        />
 
                     </>
                    }
                </>
            }
                    {!post.id &&
                        <p>404 error page not found</p>
                    }

        </div>
    )
                }