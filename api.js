import renderProfile from "./ui.js";

const getData = async (userName) => {
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const user = await res.json();
    renderProfile(user);
}

export default getData;