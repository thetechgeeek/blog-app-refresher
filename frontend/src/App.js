import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import BlogPage from './BlogPage';
import CreatePost from './CreatePost';
import EditPage from './EditPage';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path='/' element={<HomePage />} />
                    <Route path='/blog/:id' element={<BlogPage />} />
                    <Route path='/blog/new' element={<CreatePost />} />
                    <Route path='/blog/:id/edit' element={<EditPage />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
