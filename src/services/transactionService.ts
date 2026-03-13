import api from './api';
import type {
  Transaction,
  Transfer,
  NewPaymentRequest,
  TransferRequest,
  TransactionFilters,
  VerificationRequest,
} from '../types/celina2';
import type { PaginatedResponse } from '../types';

// FIXME: Potvrditi endpoint-e sa backend timom kad budu gotovi

export const transactionService = {
  // --- Placanja ---

  createPayment: async (data: NewPaymentRequest): Promise<Transaction> => {
    // FIXME: Proveriti endpoint sa backendom
    const response = await api.post<Transaction>('/transactions/payment', data);
    return response.data;
  },

  verifyPayment: async (data: VerificationRequest): Promise<Transaction> => {
    // FIXME: Proveriti endpoint sa backendom
    const response = await api.post<Transaction>('/transactions/payment/verify', data);
    return response.data;
  },

  getAll: async (filters?: TransactionFilters): Promise<PaginatedResponse<Transaction>> => {
    const params = new URLSearchParams();
    if (filters?.accountNumber) params.append('accountNumber', filters.accountNumber);
    if (filters?.status) params.append('status', filters.status);
    if (filters?.dateFrom) params.append('dateFrom', filters.dateFrom);
    if (filters?.dateTo) params.append('dateTo', filters.dateTo);
    if (filters?.amountMin !== undefined) params.append('amountMin', String(filters.amountMin));
    if (filters?.amountMax !== undefined) params.append('amountMax', String(filters.amountMax));
    if (filters?.page !== undefined) params.append('page', String(filters.page));
    if (filters?.limit !== undefined) params.append('limit', String(filters.limit));

    // FIXME: Proveriti endpoint sa backendom
    const response = await api.get<PaginatedResponse<Transaction>>('/transactions', { params });
    return response.data;
  },

  getById: async (id: number): Promise<Transaction> => {
    // FIXME: Proveriti endpoint sa backendom
    const response = await api.get<Transaction>(`/transactions/${id}`);
    return response.data;
  },

  // --- Prenosi ---

  createTransfer: async (data: TransferRequest): Promise<Transfer> => {
    // FIXME: Proveriti endpoint sa backendom
    const response = await api.post<Transfer>('/transactions/transfer', data);
    return response.data;
  },

  getTransfers: async (filters?: TransactionFilters): Promise<PaginatedResponse<Transfer>> => {
    const params = new URLSearchParams();
    if (filters?.accountNumber) params.append('accountNumber', filters.accountNumber);
    if (filters?.dateFrom) params.append('dateFrom', filters.dateFrom);
    if (filters?.dateTo) params.append('dateTo', filters.dateTo);
    if (filters?.page !== undefined) params.append('page', String(filters.page));
    if (filters?.limit !== undefined) params.append('limit', String(filters.limit));

    // FIXME: Proveriti endpoint sa backendom
    const response = await api.get<PaginatedResponse<Transfer>>('/transactions/transfers', { params });
    return response.data;
  },
};


