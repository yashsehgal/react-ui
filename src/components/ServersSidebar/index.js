
import { BrowserRouter, Link } from 'react-router-dom';
import './style.components.server-sidebar.css';

export default function ServersSidebar() {
    return (
        <div className="servers-sidebar">
            <div className="servers-list-wrapper p-top-2 m-right-2 m-left-2">
                <button className="home-discord-button-wrapper p-2 primary-btn">
                    <i class="fab fa-discord"></i>
                </button>
                <button className="server-cta-button p-2 primary-btn">
                    <i class="fab fa-add"></i>
                </button>
                <button className="server-cta-button p-2 primary-btn">
                    <i class="fas fa-compass"></i>
                </button>
                <hr style={{ borderColor: '#626262' }} />
                <button className="server-cta-button p-2 primary-btn">
                    <i class="fas fa-download"></i>
                </button>
                <Link to="/">
                    <button className="primary-btn home-discord-button-wrapper">H</button>
                </Link>
                <Link to="/profile">
                    <button className="primary-btn home-discord-button-wrapper">P</button>
                </Link>
            </div>
        </div>
    )
}