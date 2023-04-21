import { MyAxios } from "../services/Helper";


export const Register = (RegisterForm) => {
  return MyAxios.post('/users/SignUp', RegisterForm)
    .then((response) => response.data);
};

export const signup = (SignupForm) => {
  return MyAxios.post('/users/SignUp', SignupForm)
    .then((response) => response.data);
};


// export const addJobPost = (jobPost) => {
//   return MyAxios.post('/jobposts/add-jobs', jobPost)
//     .then((response) => response.data);
// };


export const getJobPosts = () => {
  return MyAxios.get('/jobposts/all')
    .then((response) => response.data);
};

export const addJobPost = async (jobPostData, userId) => {
  try {
    const userResponse = await MyAxios.get(`/users/${userId}`);
    const user = userResponse.data;

    const data = {
      title: jobPostData.title,
      description: jobPostData.description,
      requirements: jobPostData.requirements,
      location: jobPostData.location,
      salary: jobPostData.salary,
      user: user // Add user information to the job post object
    };

    const response = await MyAxios.post('/jobposts/add-jobs', data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to add job post');
  }
};

// export const getJobPosts = async () => {
//   try {
//     const response = await MyAxios.get('/jobposts/all');
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     throw new Error('Failed to fetch job posts');
//   }
// };