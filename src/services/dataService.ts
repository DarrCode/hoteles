import http from "@/http-common";

class DataService {
  getHoteles(): Promise<any> {
    return http.get("/hotels")
          .then(res => res.data)

  }

  getHotel(id: any): Promise<any> {
    return http.get(`/hotels/${id}`);
  }
}

export default new DataService();