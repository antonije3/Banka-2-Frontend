import api from './api';
import type {
  Account,
  BusinessAccount,
  AccountFilters,
  CreateAccountRequest,
  ChangeLimitRequest,
} from '../types/celina2';
import type { PaginatedResponse } from '../types';

// FIXME: Potvrditi endpoint-e sa backend timom kad budu gotovi

export const accountService = {
  getAll: async (filters?: AccountFilters): Promise<PaginatedResponse<Account>> => {
    const params = new URLSearchParams();
    if (filters?.ownerEmail) params.append('ownerEmail', filters.ownerEmail);
    if (filters?.ownerName) params.append('ownerName', filters.ownerName);
    if (filters?.accountType) params.append('accountType', filters.accountType);
    if (filters?.status) params.append('status', filters.status);
    if (filters?.page !== undefined) params.append('page', String(filters.page));
    if (filters?.limit !== undefined) params.append('limit', String(filters.limit));

    // FIXME: Proveriti endpoint sa backendom
    const response = await api.get<PaginatedResponse<Account>>('/accounts', { params });
    return response.data;
  },

  getById: async (id: number): Promise<Account> => {
    // FIXME: Proveriti endpoint sa backendom
    const response = await api.get<Account>(`/accounts/${id}`);
    return response.data;
  },

  getByAccountNumber: async (accountNumber: string): Promise<Account> => {
    // FIXME: Proveriti endpoint sa backendom
    const response = await api.get<Account>(`/accounts/number/${accountNumber}`);
    return response.data;
  },

  getMyAccounts: async (): Promise<Account[]> => {
    // FIXME: Proveriti endpoint sa backendom
    const response = await api.get<Account[]>('/accounts/my');
    return response.data;
  },

  getBusinessDetails: async (accountId: number): Promise<BusinessAccount> => {
    // FIXME: Proveriti endpoint sa backendom
    const response = await api.get<BusinessAccount>(`/accounts/${accountId}/business`);
    return response.data;
  },

  create: async (data: CreateAccountRequest): Promise<Account> => {
    // FIXME: Proveriti endpoint sa backendom
    const response = await api.post<Account>('/accounts', data);
    return response.data;
  },

  updateName: async (accountId: number, name: string): Promise<Account> => {
    // FIXME: Proveriti endpoint sa backendom
    const response = await api.patch<Account>(`/accounts/${accountId}/name`, { name });
    return response.data;
  },

  changeStatus: async (accountId: number, status: string): Promise<void> => {
    // FIXME: Proveriti endpoint sa backendom
    await api.patch(`/accounts/${accountId}/status`, { status });
  },

  changeLimit: async (accountId: number, data: ChangeLimitRequest): Promise<void> => {
    // FIXME: Proveriti endpoint sa backendom
    await api.patch(`/accounts/${accountId}/limit`, data);
  },
};


