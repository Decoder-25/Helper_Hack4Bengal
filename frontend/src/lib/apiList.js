export const server = "http://localhost:8000";

const apiList = {
  login: `${server}/api/v1/auth/login`,
  signup: `${server}/api/v1/auth/register`,
  //   uploadResume: `${server}/upload/resume`,
  //   uploadProfileImage: `${server}/upload/profile`,
  //   jobs: `${server}/api/jobs`,
  application: `${server}/api/application`,
  //   rating: `${server}/api/rating`,
  //   user: `${server}/api/user`,
  //   applicants: `${server}/api/applicants`,
};

export default apiList;