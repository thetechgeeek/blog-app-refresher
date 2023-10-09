import './App.css';
// import { data } from './data';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function HomePage() {
    const data = useSelector((state) => state.blogsState.value);

    return (
        <>
            <nav class='navbar navbar-expand-lg bg-body-tertiary'>
                <div class='container-fluid  p-1 mx-3'>
                    <a class='navbar-brand' href='/'>
                        Aashi's Blog
                    </a>
                    <ul class='navbar-nav justify-content-end'>
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
