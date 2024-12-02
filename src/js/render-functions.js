export function createMarkup(items) {
  return items
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
  <div class="photo__card">
    <a class="gallery__link" 
    href="${largeImageURL}"
  >
  <img
    src="${webformatURL}"
    alt="${tags}"
    loading="lazy"
    class="webformat__img"
  />
  </a>
        <ul class="info">
          ${createInfoItem('Likes', likes)}
          ${createInfoItem('Views', views)}
          ${createInfoItem('Comments', comments)}
          ${createInfoItem('Downloads', downloads)}
        </ul>
</div> 
`
    )
    .join('');
}

function createInfoItem(label, value) {
  return `
    <li class="list__info">
      <h3>${label}</h3>
      <p>${value}</p>
    </li>
  `;
}
