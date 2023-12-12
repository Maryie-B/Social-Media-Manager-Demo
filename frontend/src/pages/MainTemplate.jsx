
import Header from '../components/global/Header.jsx';
import CreateIcon from '../components/global/CreateIcon.jsx';
import {Outlet} from 'react-router-dom';


const MainTemplate = () => {

    return (
        <div className="main-template">
            <Header/>
            <Outlet />
            <CreateIcon/>
        </div>
    );
};

export default MainTemplate;
