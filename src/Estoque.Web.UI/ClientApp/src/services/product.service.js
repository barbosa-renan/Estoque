import http from "../http-common";

class ProductDataService {
    get(id) {
        return http.get(`/products/${id}`);
    }

    insert(data) {
        return http.post(`/products`, data);
    }

    update(id, data) {
        return http.put(`/products/${id}`, data);
    }

    delete(id) {
        return http.delete(`/products/${id}`);
    }

    getAll() {
        return http.get(`/products`);
    }
}

export default new ProductDataService();