export const getSuper = () => {
    const url = 'http://localhost:3000/api/superheros';
    return  fetch(url).then((response) => response.json())
}