export function getImages(userValue) {
  const BASE_URL = 'https://pixabay.com/';
  const END_POINT = 'api/';
  const params = new URLSearchParams({
    key: '42820907-70ae148b9f4c1259f26bcae54',
    q: userValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  const url = `${BASE_URL}${END_POINT}?${params}`;

  return fetch(url).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}
