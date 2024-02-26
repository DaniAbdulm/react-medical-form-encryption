import NavBar from "./components/Navbar";

export default function Submission() {
    return (
        <div className="container">
            <NavBar headerTitle={'3. Submission Confirmation'} />

            <h2 className="submit-title">Please confirm all data is correct</h2>
            <div className="submit-data-container">
                <p className="submit-data-header">Patient Information</p>
                <div className="submit-column">
                    <div className="output-element">
                        <h2 className="output-title">First Name:</h2>
                        <p className="data-output">Test output</p>
                    </div>
                    <div className="output-element">
                        <h2 className="output-title">Last Name:</h2>
                        <p className="data-output">Test output</p>
                    </div>
                    <div className="output-element">
                        <h2 className="output-title">Healthcard #:</h2>
                        <p className="data-output">Test output</p>
                    </div>
                    <div className="output-element">
                        <h2 className="output-title">Date of Birth:</h2>
                        <p className="data-output">Test output</p>
                    </div>
                    <div className="output-element">
                        <h2 className="output-title">Email:</h2>
                        <p className="data-output">Test output</p>
                    </div>
                    <div className="output-element">
                        <h2 className="output-title">Phone Number:</h2>
                        <p className="data-output">Test output</p>
                    </div>
                    <div className="output-element">
                        <h2 className="output-title">Home Address:</h2>
                        <p className="data-output">Test output</p>
                    </div>
                </div>
            </div>

            <div className="submit-data-container">
                <p className="submit-data-header">Medical Data</p>
                <div className="submit-column">
                    <div className="output-element">
                        <h2 className="output-title">Medical History:</h2>
                        <p className="data-output">Test output</p>
                    </div>
                    <div className="output-element">
                        <h2 className="output-title">Current Medication:</h2>
                        <p className="data-output">Test output</p>
                    </div>
                    <div className="output-element">
                        <h2 className="output-title">Allergies:</h2>
                        <p className="data-output">Test output</p>
                    </div>
                    <div className="output-element">
                        <h2 className="output-title">Symptoms:</h2>
                        <p className="data-output">Test output</p>
                    </div>
                    <div className="output-element">
                        <h2 className="output-title">Previous Treatments:</h2>
                        <p className="data-output">Test output</p>
                    </div>
                </div>
            </div>

            

            <div className="submit-container">
                <button className="submit-btn">Submit</button>
            </div>
        </div>
    );
}