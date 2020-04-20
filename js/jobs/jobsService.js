jobsService = {
  endpoint: "https://api.remotebootcamp.dev/api/jobs",
};

///// SAMPLE CONFIG DATA  \\\\\
// const config = {
//     method: "POST",
//     data: payload,
//     url: registrationService.endpoint + "/users/register",
//     withCredentials: true,
//     crossdomain: true,
//     headers: { "content-type": "application/json" },
//   };
//   return axios(config).then(handleSuccess).catch(handleError);

jobsService.findByJobName = (query) => {
  const config = {
    method: "GET",
    url:
      jobsService.endpoint +
      `https://api.remotebootcamp.dev/api/jobs?pageIndex=0&pageSize=10&searchTerm=${query}`,
    withCredentials: true,
    crossdomain: true,
    headers: { "content-type": "application/json" },
  };
  return axios(config).then(handleSuccess).catch(handleError);
};

jobsService.getCompanies = (index, size) => {
  const config = {
    method: "GET",
    url: `https://api.remotebootcamp.dev/api/techcompanies?pageIndex=${index}&pageSize=${size}`,
    withCredentials: true,
    crossdomain: true,
    headers: { "content-type": "application/json" },
  };
  return axios(config).then(handleSuccess).catch(handleError);
};

jobsService.addJobs = (payload) => {
  const config = {
    method: "POST",
    url: jobsService.endpoint,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "content-type": "application/json" },
  };
  return axios(config).then(handleSuccess).catch(handleError);
};
