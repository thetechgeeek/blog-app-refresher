import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
// import { data } from './data';
import { useSelector, useDispatch } from 'react-redux';
import { edit } from './blogsState';

const EditPost = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();
    // const blog = data.filter((item) => item.id == id)[0];
    const blog = useSelector((state) => state.blogsState.value)[id - 1];
    const dispatch = useDispatch();
    const handleEdit = (e) => {
        e.preventDefault();
        const updatedBlog = {
            id,
            title: e.target.elements.title.value,
            category: e.target.elements.category.value,
            content: e.target.elements.content.value,
        };
        dispatch(edit(updatedBlog));
        alert('Saved successfully!');
        navigate(`/blog/${id}`, { replace: true });
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
                                to={`/blog/${id}`}
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
                <form onSubmit={handleEdit}>
                    <div class='mb-3'>
                        <label for='title' class='form-label'>
                            Title
                        </label>
                        <input type='text' class='form-control' id='title' name='title' placeholder='Enter title' defaultValue={blog.title} required />
                    </div>
                    <div class='mb-3'>
                        <label for='Category' class='form-label'>
                            Category
                        </label>
                        <input type='text' class='form-control' id='category' name='category' placeholder='Enter Category' defaultValue={blog.category} required />
                    </div>
                    <div class='mb-3'>
                        <label for='content' class='form-label'>
                            Content
                        </label>
                        <textarea class='form-control' id='content' name='content' rows='3' defaultValue={blog.content} required></textarea>
                    </div>
                    <button type='submit' class='btn btn-primary'>
                        Save
                    </button>
                </form>
            </div>
        </>
    );
};

export default EditPost;
