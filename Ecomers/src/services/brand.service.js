const URL = "http://localhost:3500";

function readBrands() {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  return new Promise((resolve, reject) => {
    fetch(`${URL}/readBrand`, requestOptions)
      .then((res) => res.json())
      .then(
        (response) => {
          resolve(response);
        },
        (error) => reject(error)
      );
  });
}

function deleteBrand(id) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  };
  return new Promise((resolve, reject) => {
    fetch(`${URL}/deleteBrand`, requestOptions)
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
  readBrands,
  deleteBrand,
};
