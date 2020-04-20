registrationService = {
  endpoint: "https://api.remotebootcamp.dev/api",
  //signInEp: "https://api.remotebootcamp.dev/api/users/login",
  //signOutEp: "https://api.remotebootcamp.dev/api/users/logout",
  //signUpEp: "https://api.remotebootcamp.dev/api/users/register",
};

registrationService.signUp = (payload) => {
  const config = {
    method: "POST",
    data: payload,
    url: registrationService.endpoint + "/users/register",
    withCredentials: true,
    crossdomain: true,
    headers: { "content-type": "application/json" },
  };
  return axios(config).then(handleSuccess).catch(handleError);
};
