import React from 'react'


const post = {
    "id": 1,
    "description": "Ozzie the cat. ",
    "likes": 20,
    "author": null,
    "published_at": "2020-12-22T11:04:07.703Z",
    "created_at": "2020-12-22T10:56:03.355Z",
    "updated_at": "2020-12-22T11:04:07.733Z",
    "image": {
        "id": 1,
        "name": "cat.jpg",
        "alternativeText": "",
        "caption": "",
        "width": 1079,
        "height": 2127,
        "formats": {
            "thumbnail": {
                "name": "thumbnail_cat.jpg",
                "hash": "thumbnail_cat_c143888867",
                "ext": ".jpg",
                "mime": "image/jpeg",
                "width": 79,
                "height": 156,
                "size": 3.62,
                "path": null,
                "url": "/uploads/thumbnail_cat_c143888867.jpg"
            },
            "large": {
                "name": "large_cat.jpg",
                "hash": "large_cat_c143888867",
                "ext": ".jpg",
                "mime": "image/jpeg",
                "width": 507,
                "height": 1000,
                "size": 96.66,
                "path": null,
                "url": "/uploads/large_cat_c143888867.jpg"
            },
            "medium": {
                "name": "medium_cat.jpg",
                "hash": "medium_cat_c143888867",
                "ext": ".jpg",
                "mime": "image/jpeg",
                "width": 380,
                "height": 750,
                "size": 60.34,
                "path": null,
                "url": "/uploads/medium_cat_c143888867.jpg"
            },
            "small": {
                "name": "small_cat.jpg",
                "hash": "small_cat_c143888867",
                "ext": ".jpg",
                "mime": "image/jpeg",
                "width": 254,
                "height": 500,
                "size": 28.69,
                "path": null,
                "url": "/uploads/small_cat_c143888867.jpg"
            }
        },
        "hash": "cat_c143888867",
        "ext": ".jpg",
        "mime": "image/jpeg",
        "size": 328.18,
        "url": "/uploads/cat_c143888867.jpg",
        "previewUrl": null,
        "provider": "local",
        "provider_metadata": null,
        "created_at": "2020-12-22T10:55:34.361Z",
        "updated_at": "2020-12-22T10:55:34.381Z"
    }
}

const API_URL = 'http://localhost:1337'
const formatImageUrl = (url) => `${API_URL}${url}`

export default ({description, likes, url}) => {

    return (
    <div className="post">
        <img className="post__image" src={formatImageUrl(url)}/>
        <h4>{description}</h4>
        <div>
            <span>Likes: {likes}</span>
        </div>
    </div>
    )
}

