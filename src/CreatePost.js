import React from 'react';
import { Link } from 'react-router-dom';

const linkStyle = {
    color: 'white', // Set the color to black or any color you prefer
    textDecoration: 'none', // Remove underlines
};

const CreatePost = () => {
    return (
        <>
            <nav class='navbar navbar-expand-lg bg-body-tertiary'>
                <div class='container-fluid p-1 mx-3'>
                    <ul class='navbar-nav'>
                        <li class='nav-item'>
                            <Link to='/' style={linkStyle} class='btn btn-danger'>
                                Back
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className='container fluid blog-container'>
                <form>
                    <div class='mb-3'>
                        <label for='title' class='form-label'>
                            Title
                        </label>
                        <input type='text' class='form-control' id='title' placeholder='Enter title' />
                    </div>
                    <div class='mb-3'>
                        <label for='Category' class='form-label'>
                            Category
                        </label>
                        <input type='text' class='form-control' id='category' placeholder='Enter Category' />
                    </div>
                    <div class='mb-3'>
                        <label for='content' class='form-label'>
                            Content
                        </label>
                        <textarea class='form-control' id='exampleFormControlTextarea1' rows='3'></textarea>
                    </div>
                    <button type='submit' class='btn btn-primary'>
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
};

export default CreatePost;
