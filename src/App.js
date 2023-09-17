import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import BlogPage from './BlogPage';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/blog/:title' element={<BlogPage />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
