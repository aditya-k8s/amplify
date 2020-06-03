const base = 'https://api.devtalks.in/';

const endpoints = {
  base,
  speakers: 'speakers',
  get(val) {
    return `${this.base}${val}`;
  },
};

export const api = {
  endpoints,
  async get(type) {
    return fetch(endpoints.get(type)).then(res => res.json()).then(res => res?.data || {});
  },
};

export const fetchSpeakers = async () => api.get('speakers').then(res => res?.speakers || []);
