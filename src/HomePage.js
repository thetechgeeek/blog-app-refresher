import './App.css';
import { data } from './data';
import { Link } from 'react-router-dom';

const linkStyle = {
    color: 'black', // Set the color to black or any color you prefer
    textDecoration: 'none', // Remove underlines
};

function HomePage() {
    return (
        <>
            <nav class='navbar navbar-expand-lg bg-body-tertiary'>
                <div class='container-fluid justify-content-end p-1 mx-3'>
                    <ul class='navbar-nav '>
                        <li class='nav-item'>
                            <a class='btn btn-primary' href='#'>
                                Create Post
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className='container fluid blog-container'>
                {data.map((item) => (
                    <Link to={`/blog/${item.title}`} style={linkStyle}>
                        <div className='blog-card'>{item.title}</div>
                    </Link>
                ))}
            </div>
        </>
    );
}

export default HomePage;
