import axios from 'axios';

const KEY = 'AIzaSyB4NeyXmSSBnT_1taGoTpLpjqym0cqfDwI';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
})