import http from "./../utils/http";

export function getUser() {
  return http.get(`https://www.omdbapi.com/?s=man&apikey=4a3b711b`).then(res => {
    return {
      name: 'imondo.cn'
    }
  })
}

export function getImages() {
  return http.get(`https://www.omdbapi.com/?s=man&apikey=4a3b711b`).then(res => {
    return res.Search
  })
}