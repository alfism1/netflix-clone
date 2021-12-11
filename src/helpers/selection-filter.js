export default function selectionFilter(datas) {
  const ucwords = (str) => {
    return (str + '').replace(/^([a-z])|\s+([a-z])/g, function ($1) {
      return $1.toUpperCase();
    });
  }

  const getGenre = (genre) => {
    genre = genre.replace("-", " ");
    genre = ucwords(genre);
    return genre;
  }

  let genres = [];
  let result = [];
  for (const s of datas) {
    // datasResult
    let genre = s.genre;
    if (genres.filter((e) => {
      return e.genre === genre
    }).length > 0) {
      continue;
    }

    genres.push({ genre, title: getGenre(genre) });

    // render result
    result.push({
      title: getGenre(genre),
      data: datas?.filter((item) => item.genre === genre)
    })

  }
  return result;
}