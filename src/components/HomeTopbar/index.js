import './style.components.home-top.css';

export default function HomeTopbar() {
    return (
        <div className="home-topbar p-top-2 p-bottom-2">
            <div className="side-section__search-input-wrapper">
                <input type="button" value="Find or start a conversation" className="home-search-input primary-btn" />
            </div>
            <div className="middle-section">
                <div className="friends-status-tabs-wrapper">
                    <span style={{ 
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: '0.6em'
                     }}
                     >
                        {/* <i className="fas fa-user text-color-white"></i> */}
                        <svg x="0" y="0" class="icon-22AiRD" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path fill="gray" fill-rule="nonzero" d="M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z" transform="translate(2 4)"></path><path d="M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z"></path></g></svg>
                        <h4 className="text-color-white">Friends</h4>
                    </span>
                    <hr style={{ borderColor: '#727272', border: '0.6px solid' }} />
                </div>
            </div>
        </div>
    )
}