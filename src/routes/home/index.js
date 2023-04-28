import './home.css';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    const handleClick = () => navigate('login');
    return (
        <div>
            <h1 id="hd">Welcome to the Assignment Review Center </h1>
            <button id="bt" onClick= { handleClick }>Log in</button>
        </div>
    );
}

export default Home;