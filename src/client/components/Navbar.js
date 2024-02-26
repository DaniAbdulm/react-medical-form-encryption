
export default function NavBar({headerTitle}) {

    //hanldes clicking on dots event
    const handleDots = (e) => {
        alert('You clicked on Dots');
    }

    return (
        <>
            <nav className="navbar">
                <div className="logo">CipherMD</div>
                <a className="nav-dots" onClick={handleDots}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical">
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="12" cy="5" r="1"></circle>
                    <circle cx="12" cy="19" r="1"></circle>
                    </svg>
                </a>
            </nav>

            <div className="form-header">
                <h1 className="section-title">{headerTitle}</h1>
            </div>
        </>
    )
}