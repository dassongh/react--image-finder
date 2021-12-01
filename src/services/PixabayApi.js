const apiKey = '23951184-b06d9454dd7ae17cb77deccea';

export default async function api(searchValue, page) {
  const response = await fetch(
    `https://pixabay.com/api/?q=${searchValue}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`,
  );
  return await response.json();
}
