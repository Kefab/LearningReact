const URL = "http://localhost:3500";

function getProducByCategory(idCategory) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ idCategory }),
  };

  return new Promise((resolve, reject) => {
    fetch(`${URL}/productByCategory`, requestOptions)
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
  getProducByCategory,
};
