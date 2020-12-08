export default function fetchData(endpoint) {
  return fetch(`https://oliver-starckjohann.de/panda/${endpoint}`).then((res) =>
    res.json()
  );
}
