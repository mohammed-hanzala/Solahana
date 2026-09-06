import apiClient from './apiClient';

const consultationService = {
  /**
   * Book a new consultation (Authenticated User)
   */
  async bookConsultation(bookingData) {
    const response = await apiClient.post('/api/consultations', bookingData);
    return response.data?.data;
  },

  /**
   * Get logged in user's consultations
   * Endpoint: GET /api/consultations/my
   * Returns: Array of user consultations directly (response.data.data)
   */
  async getMyConsultations(params = {}) {
    const response = await apiClient.get('/api/consultations/my', { params });
    console.log("Consultation API Response:", response.data);
    return Array.isArray(response.data?.data) ? response.data.data : [];
  },

  /**
   * Cancel pending consultation
   */
  async cancelConsultation(id) {
    const response = await apiClient.patch(`/api/consultations/${id}/cancel`);
    return response.data?.data;
  },

  /**
   * Get all consultations with search/filters (Admin / Advisor Only)
   */
  async getAllConsultations(params = {}) {
    const response = await apiClient.get('/api/admin/consultations', { params });
    const data = response.data?.data;
    if (Array.isArray(data)) {
      return { consultations: data, pagination: { totalBookings: data.length, totalPages: 1, page: 1, limit: 10 } };
    }
    return {
      consultations: Array.isArray(data?.consultations) ? data.consultations : [],
      pagination: data?.pagination || { totalBookings: 0, totalPages: 1, page: 1, limit: 10 },
    };
  },

  /**
   * Update consultation status (Admin / Advisor Only)
   */
  async updateConsultationStatus(id, updateData) {
    const response = await apiClient.patch(`/api/admin/consultations/${id}/status`, updateData);
    return response.data?.data;
  },

  /**
   * Delete consultation (Admin Only)
   */
  async deleteConsultation(id) {
    const response = await apiClient.delete(`/api/admin/consultations/${id}`);
    return response.data?.data;
  },
};

export default consultationService;
