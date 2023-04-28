import './homeAuth.css';
import { useNavigate } from 'react-router-dom';

function HomeAuth() {
    const navigate = useNavigate();
    // if reviewer:
    const handleClick = () => navigate('dashboardR');
    //else:
    // const handleClick = () => navigate('dashboardL');
    return (
        <div>
            <h1 id="hd">Welcome to the Assignment Review Center </h1>
            <button id="bt" onClick= { handleClick }>Dashboard</button>
        </div>
    );
}

export default HomeAuth;