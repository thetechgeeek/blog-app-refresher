import './App.css';
import { data } from './data';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <>
            <nav class='navbar navbar-expand-lg bg-body-tertiary'>
                <div class='container-fluid justify-content-end p-1 mx-3'>
                    <ul class='navbar-nav '>
                        <li class='nav-item'>
                            <Link
                                to='/blog/new'
                                style={{
                                    color: 'white',
                                    textDecoration: 'none',
                                }}
                                class='btn btn-primary'
                            >
                                Create Post
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className='container fluid blog-container'>
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
