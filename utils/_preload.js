export function preloadImage (url, progressCallback) {
  return new Promise ((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.onprogress = function onProgress ({ lengthComputable, loaded, total }) {
      if (!lengthComputable) {
        return;
      }
      const progress = (100*loaded/total).toFixed(0);
      progressCallback(progress)
    };
    request.onload = function onload () {
      const img = new Image
      img.src = url
      img.onload = resolve
    };
    request.onerror = reject

    request.open('GET', url, true);
    request.overrideMimeType('text/plain; charset=x-user-defined');
    request.send(null);
  })
}

export function preloadAudio (url) {
  const audio = new Audio
  audio.src = url
  return new Promise ((resolve, reject) => {
    audio.addEventListener('canplaythrough', resolve);
    audio.load()
    if (audio.readyState > 3) {
      resolve()
    }
  })
}