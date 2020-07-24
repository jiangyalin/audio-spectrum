window.onload = function () {
  const oAudioSounds = document.querySelector('.j-audio-sounds')

  const oCtx = new AudioContext()

  const audioSrc = oCtx.createMediaElementSource(oAudioSounds)
  const analyser = oCtx.createAnalyser()

  audioSrc.connect(analyser)
  analyser.connect(oCtx.destination)

  const voiceHeight = new Uint8Array(analyser.frequencyBinCount)

  console.log('voiceHeight', voiceHeight)
}
