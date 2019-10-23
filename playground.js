// write a function to retrieve a blob of json
// made an ajax request!  Use the 'fetch' function
//paste the below code into the console to see it work
// http://rallycoding.herokuapp.com/api/music_albums

// function fetchAlbums() {
//   fetch('http://rallycoding.herokuapp.com/api/music_albums')
//     .then(res => res.json())
//     .then(json => console.log(json));
// }

const fetchAlbums = async () => {
  const res = await fetch('http://rallycoding.herokuapp.com/api/music_albums');
  const json = await res.json();

  console.log(json);
};

fetchAlbums();
