import './App.css';
// import { data } from './data';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';

function HomePage() {
    const data = useSelector((state) => state.blogsState.value);
    const [isNew, setIsNew] = useState(false);
    const handleLogin = async (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;

        try {
            const response = await fetch('http://localhost:5001/api/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.status === 201) {
                alert('Login successful');
            } else if (response.status === 400) {
                alert('Authentication failed');
            } else if (response.status === 404) {
                alert('User not found');
            }
        } catch (error) {
            alert('Error during registration:', error);
        }
    };
    const handleRegister = async (e) => {
        e.preventDefault();
        console.log(e);
        const name = e.target.name.value;
        const username = e.target.username.value;
        const password = e.target.password.value;

        try {
            const response = await fetch('http://localhost:5001/api/user/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, username, password }),
            });

            if (response.status === 201) {
                alert('Registration successful');
            } else if (response.status === 400) {
                alert('User already exists');
            } else {
                alert('Registration failed');
            }
        } catch (error) {
            alert('Error during registration:', error);
        }
    };
    return (
        <>
            <nav className='navbar navbar-expand-lg bg-body-tertiary'>
                <div className='container-fluid  p-1 mx-3'>
                    <a className='navbar-brand' href='/'>
                        Aashi's Blog
                    </a>
                    <ul className='navbar-nav justify-content-end'>
                        <li className='nav-item'>
                            <Link
                                to='/blog/new'
                                style={{
                                    color: 'white',
                                    textDecoration: 'none',
                                }}
                                className='btn btn-primary'
                            >
                                Create Post
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <button className='btn btn-primary' data-toggle='modal' data-target='#loginRegisterModal'>
                                Login/Register
                            </button>
                            <div className='modal fade' id='loginRegisterModal' tabIndex='-1'>
                                <div className='modal-dialog modal-dialog-centered'>
                                    <div className='modal-content'>
                                        <div className='modal-header'>
                                            <h5 class='modal-title m-auto'>{isNew ? 'Register' : 'Login'}</h5>
                                        </div>
                                        <div className='modal-body p-4'>
                                            {!isNew ? (
                                                <form onSubmit={handleLogin}>
                                                    <div>
                                                        <label htmlFor='username'>Username: </label>
                                                        <input type='text' id='username' name='username' placeholder='Enter your Username' required></input>
                                                    </div>
                                                    <div>
                                                        <label htmlFor='name'>Password: </label>
                                                        <input type='password' id='password' name='password' placeholder='Enter your Password' required></input>
                                                    </div>
                                                    <button className='btn btn-primary' type='submit'>
                                                        Login
                                                    </button>

                                                    <br />
                                                    <br />
                                                    <p style={{ textAlign: 'center' }}>New User? Create an account below 👇</p>
                                                    <div style={{ textAlign: 'center' }}>
                                                        <button className='btn btn-success' onClick={() => setIsNew(true)}>
                                                            Register
                                                        </button>
                                                    </div>
                                                </form>
                                            ) : (
                                                <form onSubmit={handleRegister}>
                                                    <div>
                                                        <label htmlFor='name'>Name: </label>
                                                        <input type='text' id='name' name='name' placeholder='Enter your Name' required></input>
                                                    </div>
                                                    <div>
                                                        <label htmlFor='name'>Username: </label>
                                                        <input type='text' id='username' name='username' placeholder='Enter your Username' required></input>
                                                    </div>
                                                    <div>
                                                        <label htmlFor='name'>Password: </label>
                                                        <input type='password' id='password' name='password' placeholder='Enter your Password' required></input>
                                                    </div>
                                                    <button className='btn btn-primary' type='submit'>
                                                        Register
                                                    </button>

                                                    <br />
                                                    <br />
                                                    <p style={{ textAlign: 'center' }}>Already registered? Login below 👇</p>
                                                    <div style={{ textAlign: 'center' }}>
                                                        <button className='btn btn-success' onClick={() => setIsNew(false)}>
                                                            Login
                                                        </button>
                                                    </div>
                                                </form>
                                            )}
                                        </div>
                                        <div className='modal-footer'>
                                            <button type='button' className='btn btn-danger' data-dismiss='modal'>
                                                Back
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className='container blog-container'>
                {data.map((item) => (
                    <Link
                        to={`/blog/${item.id}`}
                        style={{
                            color: 'black',
                            textDecoration: 'none',
                        }}
                    >
                        <div className='blog-card'>{item.title}</div>
                    </Link>
                ))}
            </div>
        </>
    );
}

export default HomePage;
