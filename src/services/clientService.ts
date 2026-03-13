import api from './api';
import type { ClientFilters } from '../types/celina2';
import type { PaginatedResponse, Client } from '../types';

// TODO [FE2-17b] @Luka — API servisi za Celinu 2
// FIXME: Potvrditi endpoint-e sa backend timom kad budu gotovi

export const clientService = {
  getAll: async (filters?: ClientFilters): Promise<PaginatedResponse<Client>> => {
    const params = new URLSearchParams();
    if (filters?.firstName) params.append('firstName', filters.firstName);
    if (filters?.lastName) params.append('lastName', filters.lastName);
    if (filters?.email) params.append('email', filters.email);
    if (filters?.page !== undefined) params.append('page', String(filters.page));
    if (filters?.limit !== undefined) params.append('limit', String(filters.limit));

    // FIXME: Proveriti endpoint sa backendom
    const response = await api.get<PaginatedResponse<Client>>('/clients', { params });
    return response.data;
  },

  getById: async (id: number): Promise<Client> => {
    // FIXME: Proveriti endpoint sa backendom
    const response = await api.get<Client>(`/clients/${id}`);
    return response.data;
  },

  update: async (id: number, data: Partial<Client>): Promise<Client> => {
    // FIXME: Proveriti endpoint sa backendom
    const response = await api.put<Client>(`/clients/${id}`, data);
    return response.data;
  },

  search: async (query: string): Promise<Client[]> => {
    // FIXME: Proveriti endpoint sa backendom
    const response = await api.get<Client[]>('/clients/search', {
      params: { query },
    });
    return response.data;
  },
};
