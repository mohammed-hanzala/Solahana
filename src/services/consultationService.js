import apiClient from './apiClient';

const consultationService = {
  /**
   * Book a new consultation (Authenticated User)
   */
  async bookConsultation(bookingData) {
    const response = await apiClient.post('/api/consultations', bookingData);
    return response.data;
  },

  /**
   * Get logged in user's consultations
   */
  async getMyConsultations(params = {}) {
    const response = await apiClient.get('/api/consultations/my', { params });
    console.log("Consultation API Response:", response.data);
    return response.data;
  },

  /**
   * Cancel pending consultation
   */
  async cancelConsultation(id) {
    const response = await apiClient.patch(`/api/consultations/${id}/cancel`);
    return response.data;
  },

  /**
   * Get all consultations with search/filters (Admin / Advisor Only)
   */
  async getAllConsultations(params = {}) {
    const response = await apiClient.get('/api/admin/consultations', { params });
    return response.data;
  },

  /**
   * Update consultation status (Admin / Advisor Only)
   */
  async updateConsultationStatus(id, updateData) {
    const response = await apiClient.patch(`/api/admin/consultations/${id}/status`, updateData);
    return response.data;
  },

  /**
   * Delete consultation (Admin Only)
   */
  async deleteConsultation(id) {
    const response = await apiClient.delete(`/api/admin/consultations/${id}`);
    return response.data;
  },
};

export default consultationService;
