
const localhost = "http://localhost:3000";

const postMethod = {
  method: "POST",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  }
}
const getMethod = {
  method: "GET",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
}
export async function fetchDataSubmit(notificationCtx) {
  notificationCtx.showNotification({
    title: "pedding..",
    message: "pedding",
    status: "pedding"
  })
  e.preventDefault();
  await fetch(`${localhost}/api/dataPost`, {
    postMethod,
    body: JSON.stringify({}),
  }).then(res => {
    if (res.ok) {
      return res.json()
    }
    return res.json().then(data => {
      throw Error(data.message)
    })
  })
    .then(data => {
      notificationCtx.showNotification({
        title: "Success!",
        message: "Successfully",
        status: "success"
      })
    })
    .catch(error => {
      notificationCtx.showNotification({
        title: "error!!!",
        message: error.message || "error",
        status: "error"
      })
    })
}

export async function getBicycleData() {
  const res = await fetch(`${localhost}/api/dataPost`)
  const data = await res.json()
  return data;
}

export async function signUp(email, password, notificationCtx) {
  notificationCtx.showNotification({
    title: "pedding..",
    message: "pedding",
    status: "pedding"
  })
  await fetch(`${localhost}/api/userPost`, {
    postMethod,
    body: JSON.stringify({
      Email: email,
      Password: password,
    }),
  })
    .then((res) => {
      return res.json();
    })
    .then((result) => {
      console.log(result);
    })
    .then(data => {
      notificationCtx.showNotification({
        title: "Success!",
        message: "Successfully",
        status: "success"
      })
    })
    .catch(error => {
      notificationCtx.showNotification({
        title: "error!!!",
        message: error.message || "error",
        status: "error"
      })
    })
}

