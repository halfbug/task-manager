import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);
const users = [
    {
      id: 1,
      username: 'admin1',
      password: 'admin123',
      group: 'admin',
    },
    {
      id: 2,
      username: 'admin2',
      password: 'admin456',
      group: 'admin',
    },
    {
      id: 3,
      username: 'editor1',
      password: 'editor123',
      group: 'editor',
    },
    {
      id: 4,
      username: 'editor2',
      password: 'editor456',
      group: 'editor',
    },
    {
      id: 5,
      username: 'author1',
      password: 'author123',
      group: 'author',
    },
    {
      id: 6,
      username: 'author2',
      password: 'author456',
      group: 'author',
    },
    // Add more users here...
  ];
  mock.onPost('/login').reply((config) => {
    const { username, password } = JSON.parse(config.data);
    const user = users.find((user) => user.username === username && user.password === password);
  
    if (user) {
      return [200, user];
    } else {
      return [401, { message: 'Invalid username or password' }];
    }
  });

export const userAPI = axios.create();
