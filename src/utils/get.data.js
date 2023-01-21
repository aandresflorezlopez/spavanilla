const API = "https://rickandmortyapi.com/api/character/";

const getData = async (id = null) => {
  const apiUrl = id ? `${API}${id}` : API;
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log("Fetch error", e);
  }
};

export default getData;
