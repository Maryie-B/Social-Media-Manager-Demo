import Table from "./Table.jsx";
import FullLogIn from './FullLogIn.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Manager from "./Manager.jsx";
import PrivateRoutes from "./PrivateRoutes.jsx";
import AddEditPost from "./AddEditPost.jsx"


function Home() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<PrivateRoutes />}>
                    <Route index element={<Table />} />
                    <Route path='manager/:id' element={<Manager />} />
                    <Route path='edit-post/:id' element={<AddEditPost />}/>
                    <Route path='create' element={<AddEditPost />} />
                </Route>
                <Route path='login' element={<FullLogIn/>}/>
            </Routes>
        </Router>
    );
}

export default Home;
