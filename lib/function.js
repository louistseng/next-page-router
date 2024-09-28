
const localhost = "http://localhost:3000";

const postMethod = {
  method: "POST",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  }
};
const getMethod = {
  method: "GET",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
};
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
  }).then(data => {
    notificationCtx.showNotification({
      title: "Success!",
      message: "Successfully",
      status: "success"
    })
  }).catch(error => {
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

export async function signUp(username, email, password, remember, notificationCtx, setRegister) {
  notificationCtx.showNotification({
    title: "pedding..",
    message: "pedding",
    status: "pedding"
  })
  await fetch(`${localhost}/api/userPost`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({
      Username: username,
      Email: email,
      Password: password,
      Remember: remember,
    }),
  }).then((res) => {
    if (res.ok) {
      setRegister(false)
      return res.json();
    }
    return res.json().then((data) => {
      throw Error(data.message);
    });
  }).then(data => {
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

export async function logIn(username, password, remember, notificationCtx, router) {
  notificationCtx.showNotification({
    title: "pedding..",
    message: "pedding",
    status: "pedding"
  })
  await fetch(`${localhost}/api/userPost`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    // body: JSON.stringify({
    //   Username: username,
    //   Password: password,
    //   Remember: remember,
    // }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return res.json().then((data) => {
      throw Error(data.message);
    });
  }).then(data => {
    router.push("/");
    const resData = data.data;
    notificationCtx.getUserData({ data: resData })
    sessionStorage.setItem('_id', resData._id)
    notificationCtx.showNotification({
      title: "Success!",
      message: "Successfully",
      status: "success"
    })
  }).catch(error => {
    notificationCtx.showNotification({
      title: "error!!!",
      message: error.message || "error",
      status: "error"
    })
  })
}

export async function postCommentData(username, comFormData, queryId) {
  await fetch(`${localhost}/api/commentPost`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({
      username: username,
      comContent: comFormData,
      queryId: queryId
    }),
  }).then(res => res.json()).then(data => console.log(data))
}

export async function getCommentData(setComData) {
  const res = await fetch(`${localhost}/api/commentPost`)
  const data = await res.json()
  return data;
}