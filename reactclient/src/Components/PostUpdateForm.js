import React, { useState } from 'react'
import Development from '../utilities/Constants'

export default function PostUpdateForm(props) {
    const initialFormData = Object.freeze({
        title: props.post.title,
        content: props.post.content
    });

    const [formData, setFormatData] = useState(initialFormData);

    const handleChange = (e) => {
        setFormatData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const PostToUpdate = {
            postId: props.post.postId,
            title: formData.title,
            content: formData.content
        };
        const url = Development.API_URL_UPDATE_POST;

        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(PostToUpdate)
        })
            .then(response => response.json())
            .then(responseFromServer => {
                console.log(responseFromServer);
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });
        props.onPostUpdated(PostToUpdate);
    };

    return (
        <form className="w-100 ps-5">
            <h1 className='mt-5'>Updating the post titled "{props.post.title}".</h1>

            <div className='mt-5'>
                <label className='h3 form-label'>Post title</label>
                <input value={formData.title} name='title' type='text' className='form-control' onChange={handleChange} />
            </div>

            <div className='mt-4'>
                <label className='h3 form-label'>Post contant</label>
                <input value={formData.content} name='content' type='text' className='form-control' onChange={handleChange} />
            </div>

            <button onClick={handleSubmit} className='btn btn-dark btn-lg w-100 mt-5'>Submit</button>
            <button onClick={() => props.onPostUpdated(null)} className='btn btn-secondary btn-lg w-100 mt-3'>Cancel</button>
        </form>
    );
}
