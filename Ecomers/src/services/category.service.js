const URL = "http://localhost:3500";

function getAllCategories() {
  const requestOptions = {
    method: "GET",
  };

  return new Promise((resolve, reject) => {
    fetch(`${URL}/categories`, requestOptions)
      .then((res) => res.json())
      .then(
        (response) => {
          resolve(response);
        },
        (error) => reject(error)
      );
  });
}

function deleteCategory(id) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  };
  console.log(requestOptions);
  return new Promise((resolve, reject) => {
    fetch(`${URL}/deleteCategory`, requestOptions)
      .then((res) => res.json())
      .then(
        (response) => {
          resolve(response);
        },
        (error) => reject(error)
      );
  });
}

export default {
  getAllCategories,
  deleteCategory,
};
