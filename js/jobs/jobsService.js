jobsService = {
  endpoint: "https://api.remotebootcamp.dev",
  jobsEp: "/api/jobs",
  companiesEp: "/api/techcompanies",
};

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

jobsService.getJobs = (index, size) => {
  const config = {
    method: "GET",
    url:
      jobsService.endpoint +
      jobsService.jobsEp +
      `?pageIndex=${index}&pageSize=${size}`,
    withCredentials: true,
    crossdomain: true,
    headers: { "content-type": "application/json" },
  };
  return axios(config).then(handleSuccess).catch(handleError);
};

jobsService.getCompanies = (index, size) => {
  const config = {
    method: "GET",
    url:
      jobsService.endpoint +
      jobsService.companiesEp +
      `?pageIndex=0&pageSize=10`,
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

jobsService.getJobById = (id) => {
  const config = {
    method: "GET",
    url: jobsService.endpoint + jobsService.jobsEp + `/${id}`,
    crossdomain: true,
    withCredentials: true,
    headers: { "content-type": "application/json" },
  };
  return axios(config).then(handleSuccess).catch(handleError);
};

jobsService.updateJob = (payload) => {
  let id = payload.jobId;

  const config = {
    method: "PUT",
    url: jobsService.endpoint + jobsService.jobsEp + `/${id}`,
    data: payload,
    crossdomain: true,
    withCredentials: true,
    headers: { "content-type": "application/json" },
  };
  return axios(config).then(handleSuccess).catch(handleError);
};

jobsService.removeJob = (id) => {
  const config = {
    method: "PUT",
    url: jobsService.endpoint + jobsService.jobsEp + `/${id}`,
    crossdomain: true,
    withCredentials: true,
    headers: { "content-type": "application/json" },
  };
  return axios(config).then(handleSuccess).catch(handleError);
};
