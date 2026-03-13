import api from './api';
import type {
  PaymentRecipient,
  CreateRecipientRequest,
  UpdateRecipientRequest,
} from '../types/celina2';

// FIXME: Potvrditi endpoint-e sa backend timom kad budu gotovi

export const paymentRecipientService = {
  getAll: async (): Promise<PaymentRecipient[]> => {
    // FIXME: Proveriti endpoint sa backendom
    const response = await api.get<PaymentRecipient[]>('/recipients');
    return response.data;
  },

  getById: async (id: number): Promise<PaymentRecipient> => {
    // FIXME: Proveriti endpoint sa backendom
    const response = await api.get<PaymentRecipient>(`/recipients/${id}`);
    return response.data;
  },

  create: async (data: CreateRecipientRequest): Promise<PaymentRecipient> => {
    // FIXME: Proveriti endpoint sa backendom
    const response = await api.post<PaymentRecipient>('/recipients', data);
    return response.data;
  },

  update: async (id: number, data: UpdateRecipientRequest): Promise<PaymentRecipient> => {
    // FIXME: Proveriti endpoint sa backendom
    const response = await api.put<PaymentRecipient>(`/recipients/${id}`, data);
    return response.data;
  },

  delete: async (id: number): Promise<void> => {
    // FIXME: Proveriti endpoint sa backendom
    await api.delete(`/recipients/${id}`);
  },
};


