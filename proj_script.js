import axios from "axios";

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json.id));

axios
  .get("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => {
    console.log(response.data.title);
  })
  .catch((error) => {
    console.error(error);
  });

// Async/Await version

async function fetchData() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    console.log(response.data.userId);
  } catch (error) {
    console.error(error);
  }
}

fetchData();
