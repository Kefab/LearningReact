const URL = "http://localhost:3500";

function isUser(mail, password) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ mail, password }),
  };
  console.log(requestOptions);
  return new Promise((resolve, reject) => {
    fetch(`${URL}/login`, requestOptions)
      .then((res) => res.json())
      .then(
        (response) => {
          resolve(response);
        },
        (error) => reject(error)
      );
  });
}

function readUsers() {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  return new Promise((resolve, reject) => {
    fetch(`${URL}/users`, requestOptions)
      .then((res) => res.json())
      .then(
        (response) => {
          resolve(response);
        },
        (error) => reject(error)
      );
  });
}

function deleteUser(id) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  };
  console.log(requestOptions);
  return new Promise((resolve, reject) => {
    fetch(`${URL}/deleteUser`, requestOptions)
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
  isUser,
  readUsers,
  deleteUser,
};
