import axiosClient from '@/lib/axiosClient';

export const authAPI = {
  signup: async (data: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }) => {
    return axiosClient.post('/auth/signup', data);
  },

  signin: async (data: { email: string; password: string }) => {
    return axiosClient.post('/auth/signin', data);
  },

  getProfile: async () => {
    return axiosClient.get('/admin/profile');
  },

  logout: async () => {
    return axiosClient.post('/admin/logout');
  },
};

export const propertyAPI = {
  getAll: async (page = 1, limit = 10, filters = {}) => {
    return axiosClient.get('/properties', {
      params: { page, limit, ...filters },
    });
  },

  getById: async (id: string) => {
    return axiosClient.get(`/properties/${id}`);
  },

  create: async (data: any) => {
    return axiosClient.post('/properties', data);
  },

  update: async (id: string, data: any) => {
    return axiosClient.put(`/properties/${id}`, data);
  },

  delete: async (id: string) => {
    return axiosClient.delete(`/properties/${id}`);
  },

  uploadImage: async (id: string, file: File) => {
    const formData = new FormData();
    formData.append('image', file);
    return axiosClient.post(`/properties/${id}/upload-image`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },
};

export const leadAPI = {
  getAll: async (page = 1, limit = 10) => {
    return axiosClient.get('/leads', { params: { page, limit } });
  },

  getById: async (id: string) => {
    return axiosClient.get(`/leads/${id}`);
  },

  create: async (data: any) => {
    return axiosClient.post('/leads', data);
  },

  update: async (id: string, data: any) => {
    return axiosClient.put(`/leads/${id}`, data);
  },

  updateStatus: async (id: string, status: string) => {
    return axiosClient.put(`/leads/${id}/status`, { status });
  },

  delete: async (id: string) => {
    return axiosClient.delete(`/leads/${id}`);
  },
};

export const blogAPI = {
  getAll: async (page = 1, limit = 10) => {
    return axiosClient.get('/blogs', { params: { page, limit } });
  },

  getBySlug: async (slug: string) => {
    return axiosClient.get(`/blogs/${slug}`);
  },

  create: async (data: any) => {
    return axiosClient.post('/blogs', data);
  },

  update: async (id: string, data: any) => {
    return axiosClient.put(`/blogs/${id}`, data);
  },

  delete: async (id: string) => {
    return axiosClient.delete(`/blogs/${id}`);
  },
};
