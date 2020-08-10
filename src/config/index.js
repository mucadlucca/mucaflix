const URL = window.location.hostname.includes('localhost')
  ? 'http://localhost:3333'
  : 'https://mucaflix.herokuapp.com';

export default {
  URL,
};
