
export default function Form() {
    return (
        <div className="container">
            <nav className="navbar">
                <div className="logo">CipherMD</div>
                <div className="nav-dots">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical">
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="12" cy="5" r="1"></circle>
                    <circle cx="12" cy="19" r="1"></circle>
                    </svg>
                </div>
            </nav>

            <div className="form-header">
                <h1 className="section-title">1. Patient Information</h1>
            </div>

            <div className="form-row">
                <div className="input-element">
                    <h2 className="input-title">First Name:</h2>
                    <input className="input-field" />
                </div>
                <div className="input-element">
                    <h2 className="input-title">Last Name:</h2>
                    <input className="input-field" />
                </div>
            </div>

        </div>
    ); 
};