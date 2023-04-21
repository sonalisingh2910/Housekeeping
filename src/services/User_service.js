import { MyAxios } from "../services/Helper";

export const Register = (HousekeeperProfileForm) => {
  return MyAxios.post("/housekeepers/register", HousekeeperProfileForm)
    .then((response) => response.data.token);
};

  
export const signup = (SignupForm) => {
  return MyAxios.post("/users/SignUp",SignupForm)
    .then((response) => response.data.token);
};


export const getHousekeepers = async () => {
  const response = await MyAxios.get("/housekeepers/all");
  return response.data;
};

export const addJobPost = (JobPostForm) => {
  return MyAxios.post('/jobposts/add-jobs', JobPostForm)
    .then((response) => response.data);
};

// export const getJobPosts = () => {
//   return MyAxios.get('/jobposts/all')
//     .then((response) => response.data);
// };

// export const addJobPost = async (jobPostData, userId) => {
//   try {
//     const userResponse = await MyAxios.get(`/users/${userId}`);
//     const user = userResponse.data;

//     const data = {
//       title: jobPostData.title,
//       description: jobPostData.description,
//       requirements: jobPostData.requirements,
//       location: jobPostData.location,
//       salary: jobPostData.salary,
//       user: user // Add user information to the job post object
//     };

//     const response = await MyAxios.post('/jobposts/add-jobs', data);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     throw new Error('Failed to add job post');
//   }
// };

export const getJobPosts = async () => {
  try {
    const response = await MyAxios.get('/jobposts/all');
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch job posts');
  }
};


// export const getdata = async (category, city) => {
//   try {
//     const response = await MyAxios.get(`/housekeepers/all?category=${category}&location=${city}`);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     throw new Error('Failed to fetch housekeepers');
//   }
// };

export const getdata = async (category, city) => {
  try {
    const response = await MyAxios.get(`/housekeepers/search?category=${category}&city=${city}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch housekeepers');
  }
};

export const addApply = (Apply) => {
  return MyAxios.post('/apply/create', Apply)
    .then((response) => response.data);
};