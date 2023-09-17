import './App.css';
import { data } from './data';

function App() {
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
                    <div className='blog-card'>{item.title}</div>
                ))}
            </div>
        </>
    );
}

export default App;
