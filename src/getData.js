import axios from 'axios';

const getData =  async (type) => {
   
  // We declare a constant to check if another API call needs to be made, if not
  // will have a default value;
  const type_get = type?type:'posts';
  
  // we return the promise to later use it in the component;
  return await axios.get(`https://jsonplaceholder.typicode.com/${type_get}`)
}

export default getData