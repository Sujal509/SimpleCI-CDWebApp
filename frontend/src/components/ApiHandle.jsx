import React from "react";

function ApiHandle() {
    const [data, setData] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const VITE_API_PORT = import.meta.env.VITE_API_PORT;

    const fetchData = async () => {
        setLoading(true);
        const response = await fetch(`http://${window.location.hostname}:${VITE_API_PORT}/api/number`);
        const responseData = await response.json();
        setData(responseData.number);
        setLoading(false);
    };

    const handleClick = () => {
        fetchData();
    };

    return (
        <>
            <h3 id="h3id">This is a test </h3>
            <button type="button" onClick={handleClick}>Load Data</button>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <p>{!data ? "Click the button to load data" : data}</p>
            )}
        </>
    );
}

export default ApiHandle;