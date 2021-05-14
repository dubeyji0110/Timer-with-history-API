
// function to create a get request to the api and return history data in json format
export async function getHistory() {
    try {
        const res = await fetch("http://localhost:8080/api/history");
        return await res.json();
    } catch (e) {
        console.log(e);
        return [];
    }
}

// function to create a post request to the api for adding new buttonPress event data
export async function handlePressEvent(data) {
    const res = await fetch('http://localhost:8080/api/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ event: data })
    });
    return await res.json();
}