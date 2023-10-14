import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
// import { data } from './data';
import { useSelector, useDispatch } from 'react-redux';
import { like, remove } from './blogsState';

const BlogPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    // const blog = data.filter((item) => item.id == id)[0];
    const blog = useSelector((state) => state.blogsState.value)[id - 1];
    const dispatch = useDispatch();

    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete this?') == true) {
            dispatch(remove(id));
            navigate('/', { replace: true });
        } else {
            console.log('Stay');
        }
    };
    const handleLike = () => {
        dispatch(like(id));
    };

    return (
        <>
            <nav class='navbar navbar-expand-lg bg-body-tertiary'>
                <div class='container-fluid p-1 mx-3'>
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
                    <a class='navbar-brand' href='/'>
                        Aashi's Blog
                    </a>
                </div>
                <div class='container-fluid justify-content-end p-1 mx-3'>
                    <ul class='navbar-nav '>
                        <li class='nav-item mx-2'>
                            <Link
                                to={`/blog/${id}/edit`}
                                style={{
                                    color: 'white',
                                    textDecoration: 'none',
                                }}
                                class='btn btn-primary'
                            >
                                Edit
                            </Link>
                        </li>
                        <li class='nav-item'>
                            <button
                                onClick={handleDelete}
                                style={{
                                    color: 'white',
                                    textDecoration: 'none',
                                }}
                                class='btn btn-danger'
                            >
                                Delete
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className='container blog-container'>
                <div>
                    <span class='badge text-bg-secondary'>{blog.category}</span>
                </div>
                <h2 style={{ marginTop: '10px' }}>{blog.title}</h2>
                <div>
                    <span style={{ color: 'grey', marginRight: '10px' }}>Find this interesting?</span>
                    <button type='button' class={blog.isLiked === true ? 'btn btn-success' : 'btn btn-outline-success'} onClick={handleLike}>
                        {blog.isLiked === true ? 'Dislike 👎' : 'Like 👍'}
                    </button>
                </div>
                <p class='blog-body'>{blog.content}</p>
            </div>
        </>
    );
};

export default BlogPage;
