import React from "react";

function ApiHandle() {
    const [data, setData] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const VITE_BACKEND_API_PORT = import.meta.env.VITE_BACKEND_API_PORT || 5000;

    const fetchData = async () => {
        setLoading(true);
        const response = await fetch(`http://${window.location.hostname}:${VITE_BACKEND_API_PORT}/api/number`);
        const responseData = await response.json();
        setData(responseData.number);
        setLoading(false);
    };

    const handleClick = () => {
        fetchData();
    };

    return (
        <>
            <button type="button" onClick={handleClick}>Load Data</button>
            <h2>Test Update</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <p>{!data ? "Click the button to load data" : data}</p>
            )}
        </>
    );
}

export default ApiHandle;