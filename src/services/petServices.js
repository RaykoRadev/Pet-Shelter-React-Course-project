export async function getAll() {
    try {
        const res = await fetch("http://localhost:3000/animals");
        const data = await res.json();
        return data;
    } catch (err) {
        alert(err.message);
    }
}

export async function GetOne(id) {
    try {
        const res = await fetch(`http://localhost:3000/animals/details/${id}`);
        const data = await res.json();
        return data;
    } catch (err) {
        alert(err.message);
    }
}
