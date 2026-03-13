import api from './api';
import type { Card, NewCardRequest, AuthorizedPerson } from '../types/celina2';

// FIXME: Potvrditi endpoint-e sa backend timom kad budu gotovi

export const cardService = {
  getByAccount: async (accountNumber: string): Promise<Card[]> => {
    // FIXME: Proveriti endpoint sa backendom
    const response = await api.get<Card[]>(`/cards/account/${accountNumber}`);
    return response.data;
  },

  getById: async (id: number): Promise<Card> => {
    // FIXME: Proveriti endpoint sa backendom
    const response = await api.get<Card>(`/cards/${id}`);
    return response.data;
  },

  getMyCards: async (): Promise<Card[]> => {
    // FIXME: Proveriti endpoint sa backendom
    const response = await api.get<Card[]>('/cards/my');
    return response.data;
  },

  create: async (data: NewCardRequest): Promise<Card> => {
    // FIXME: Proveriti endpoint sa backendom
    const response = await api.post<Card>('/cards', data);
    return response.data;
  },

  block: async (cardId: number): Promise<void> => {
    // FIXME: Proveriti endpoint sa backendom
    await api.patch(`/cards/${cardId}/block`);
  },

  unblock: async (cardId: number): Promise<void> => {
    // FIXME: Proveriti endpoint sa backendom
    await api.patch(`/cards/${cardId}/unblock`);
  },

  deactivate: async (cardId: number): Promise<void> => {
    // FIXME: Proveriti endpoint sa backendom
    await api.patch(`/cards/${cardId}/deactivate`);
  },

  changeLimit: async (cardId: number, limit: number): Promise<void> => {
    // FIXME: Proveriti endpoint sa backendom
    await api.patch(`/cards/${cardId}/limit`, { limit });
  },

  // Za poslovne racune - ovlascena lica
  getAuthorizedPersons: async (accountNumber: string): Promise<AuthorizedPerson[]> => {
    // FIXME: Proveriti endpoint sa backendom
    const response = await api.get<AuthorizedPerson[]>(`/cards/account/${accountNumber}/authorized-persons`);
    return response.data;
  },

  requestCardVerification: async (cardId: number): Promise<void> => {
    // FIXME: Proveriti endpoint sa backendom - email verifikacija za kreiranje kartice
    await api.post(`/cards/${cardId}/request-verification`);
  },
};


