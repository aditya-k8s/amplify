export const fetchSpeakers = () => {
  return fetch('/api/data/speakers.json')
    .then(res => res.json());
}
