export async function getAll() {
    try {
        const res = await fetch("http://localhost:3000/animals");
        const data = await res.json();
        return data;
    } catch (err) {
        alert(err.message);
    }
}
