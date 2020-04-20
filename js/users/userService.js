userService = {
  endpoint: "https://api.remotebootcamp.dev",
  usersEp: "/api/users",
  signOutEp: "/logout",
  signUpEp: "/register",
  currentUser: "/current",
};

userService.signIn = (payload) => {
  const config = {
    method: "POST",
    data: payload,
    url: userService.endpoint + userService.usersEp + "/login",
    crossdomain: true,
    withCredentials: true,
    headers: { "content-type": "application/json" },
  };
  return axios(config);
};

userService.getCurrentUser = () => {
  const config = {
    method: "GET",
    url: userService.endpoint + userService.usersEp + userService.currentUser,
    crossdomain: true,
    withCredentials: true,
    headers: { "content-type": "application/json" },
  };
  return axios(config).then(handleSuccess).catch(handleError);
};

userService.getCurrentUserById = (id) => {
  const config = {
    method: "GET",
    url: userService.endpoint + userService.usersEp + `/${id}`,
    crossdomain: true,
    withCredentials: true,
    headers: { "content-type": "application/json" },
  };
  return axios(config).then(handleSuccess).catch(handleError);
};

userService.logOutSession = () => {
  const config = {
    method: "GET",
    url: userService.endpoint + userService.usersEp + "/logout",
    crossdomain: true,
    withCredentials: true,
    headers: { "content-type": "application/json" },
  };
  return axios(config).then(handleSuccess).catch(handleError);
};
