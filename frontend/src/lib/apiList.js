export const server = "http://localhost:8000";

const apiList = {
  login: `${server}/auth/login`,
  signup: `${server}/auth/signup`,
//   uploadResume: `${server}/upload/resume`,
//   uploadProfileImage: `${server}/upload/profile`,
//   jobs: `${server}/api/jobs`,
  application: `${server}/api/application`,
//   rating: `${server}/api/rating`,
//   user: `${server}/api/user`,
//   applicants: `${server}/api/applicants`,
};

export default apiList;