import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { add } from './blogsState';

const CreatePost = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleAdd = (e) => {
        e.preventDefault();
        const newBlog = {
            title: e.target.elements.title.value,
            category: e.target.elements.category.value,
            content: e.target.elements.content.value,
        };
        dispatch(add(newBlog));
        alert('Added successfully!');
        navigate('/', { replace: true });
    };

    return (
        <>
            <nav class='navbar navbar-expand-lg bg-body-tertiary'>
                <div class='container-fluid p-1 mx-3'>
                    <a class='navbar-brand' href='/'>
                        Aashi's Blog
                    </a>
                    <ul class='navbar-nav'>
                        <li class='nav-item'>
                            <Link
                                to='/'
                                style={{
                                    color: 'white',
                                    textDecoration: 'none',
                                }}
                                class='btn btn-danger'
                            >
                                Back
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className='container blog-container'>
                <form onSubmit={handleAdd}>
                    <div class='mb-3'>
                        <label for='title' class='form-label'>
                            Title
                        </label>
                        <input type='text' class='form-control' id='title' name='title' placeholder='Enter title' required />
                    </div>
                    <div class='mb-3'>
                        <label for='Category' class='form-label'>
                            Category
                        </label>
                        <input type='text' class='form-control' id='category' name='category' placeholder='Enter Category' required />
                    </div>
                    <div class='mb-3'>
                        <label for='content' class='form-label'>
                            Content
                        </label>
                        <textarea class='form-control' id='content' name='content' rows='3' required></textarea>
                    </div>
                    <button class='btn btn-primary'>Submit</button>
                </form>
            </div>
        </>
    );
};

export default CreatePost;
