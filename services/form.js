import axios from 'axios';

async function post(formdata) {
  try {
    const { data } = await axios.post('/api/form', formdata);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export default { post };
