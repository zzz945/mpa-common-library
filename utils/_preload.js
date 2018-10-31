export function preloadImage (url) {
  const img = new Image
  img.src = url
  return new Promise ((resolve, reject) => {
    img.onload = resolve
  })
}

export function preloadAudio (urls) {
  const audio = new Audio
  audio.src = url
  return new Promise ((resolve, reject) => {
    audio.addEventListener('canplaythrough', resolve);
  })
}