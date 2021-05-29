import http from "../http-common";

class VideoDataService {
  getAll() {
    return http.get("/video");
  }

  create(data) {
    return http.post("/video", data);
  }

  update(id, data) {
    return http.put(`/${id}`, data);
  }

  delete(id) {
    return http.delete(`/${id}`);
  }

//   findByTitle(title) {
//     return http.get(`/tutorials?title=${title}`);
//   }
}

export default new VideoDataService();