import api from './api';
import type { ExchangeRate, ExchangeRequest } from '../types/celina2';

// TODO [FE2-17b] @Luka — API servisi za Celinu 2
// FIXME: Potvrditi endpoint-e sa backend timom kad budu gotovi

export const currencyService = {
  getExchangeRates: async (): Promise<ExchangeRate[]> => {
    // FIXME: Proveriti endpoint sa backendom
    const response = await api.get<ExchangeRate[]>('/exchange-rates');
    return response.data;
  },

  getRate: async (fromCurrency: string, toCurrency: string): Promise<ExchangeRate> => {
    // FIXME: Proveriti endpoint sa backendom
    const response = await api.get<ExchangeRate>(`/exchange-rates/${fromCurrency}/${toCurrency}`);
    return response.data;
  },

  convert: async (data: ExchangeRequest): Promise<{ convertedAmount: number; rate: number }> => {
    // FIXME: Proveriti endpoint sa backendom
    const response = await api.post('/exchange/convert', data);
    return response.data;
  },
};
