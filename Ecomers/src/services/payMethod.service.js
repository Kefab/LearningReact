const URL = "http://localhost:3500";

function readMethods() {
  const requestOptions = {
    method: "GET",
  };

  return new Promise((resolve, reject) => {
    fetch(`${URL}/readPayForm`, requestOptions)
      .then((res) => res.json())
      .then(
        (response) => {
          resolve(response);
        },
        (error) => reject(error)
      );
  });
}

function deleteMethod(id) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  };
  return new Promise((resolve, reject) => {
    fetch(`${URL}/deletePayForm`, requestOptions)
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
  readMethods,
  deleteMethod,
};
