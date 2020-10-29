export default function beautify(results) {
  results.forEach(hero =>
    hero.episode.forEach((_, i, arr) => {
      arr[i] = +arr[i].substring(arr[i].lastIndexOf("/") + 1, arr[i].length);
    })
  );
  results.forEach(
    hero =>
      (hero["seasons"] = [
        ...new Set(
          hero.episode.reduce(
            (acc, cur) =>
              cur <= 11
                ? (acc.push(1), acc)
                : cur <= 21
                ? (acc.push(2), acc)
                : cur <= 31
                ? (acc.push(3), acc)
                : (acc.push(4), acc),
            []
          )
        ),
      ])
  );
  return results;
}
