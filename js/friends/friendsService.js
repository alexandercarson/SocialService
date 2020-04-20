friendsService = {
  endpoint: "https://api.remotebootcamp.dev",
  friendsEp: "/api/friends",

  signOutEp: "/logout",
};

// refactor below to friends service \\
friendsService.addFriends = (payload) => {
  const config = {
    method: "POST",
    url: friendsService.endpoint + friendsService.friendsEp,
    data: payload,
    crossdomain: true,
    withCredentials: true,
    headers: { "content-type": "application/json" },
  };
  return axios(config).then(handleSuccess).catch(handleError);
};

friendsService.getAllFriends = (index, pageSize) => {
  const config = {
    method: "GET",
    url:
      friendsService.endpoint +
      friendsService.friendsEp +
      `?pageIndex=${index}&pageSize=${pageSize}`,
    crossdomain: true,
    withCredentials: true,
    headers: { "content-type": "application/json" },
  };
  return axios(config).then(handleSuccess).catch(handleError);
};

friendsService.deleteFriend = (id) => {
  const config = {
    method: "DELETE",
    url: friendsService.endpoint + friendsService.friendsEp + `/${id}`,
    crossdomain: true,
    withCredentials: true,
    headers: { "content-type": "application/json" },
  };
  return axios(config)
    .then(() => id)
    .catch(handleError);
};

friendsService.findByName = (query) => {
  const config = {
    method: "GET",
    url:
      friendsService.endpoint +
      friendsService.friendsEp +
      `/search?pageIndex=0&pageSize=10&q=${query}`,
    crossdomain: true,
    withCredentials: true,
    headers: { "content-type": "application/json" },
  };
  return axios(config).then(handleSuccess).catch(handleError);
};

friendsService.editFriend = (id) => {
  const config = {
    method: "GET",
    url: friendsService.endpoint + friendsService.friendsEp + `/${id}`,
    crossdomain: true,
    withCredentials: true,
    headers: { "content-type": "application/json" },
  };
  return axios(config).then(handleSuccess).catch(handleError);
};

friendsService.updateFriend = (payload) => {
  let id = payload.id;
  const config = {
    method: "PUT",
    url: friendsService.endpoint + friendsService.friendsEp + `/${id}`,
    data: payload,
    crossdomain: true,
    withCredentials: true,
    headers: { "content-type": "application/json" },
  };
  return axios(config).then(handleSuccess).catch(handleError);
};
