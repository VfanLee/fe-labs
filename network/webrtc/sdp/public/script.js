let localStream
let remoteStream
let pc

const config = {
  iceServers: [
    {
      urls: [
        'stun:stun.l.google.com:19302',
        'stun:stun1.l.google.com:19302',
        'stun:stun1.1.google.com:19302',
        'stun:stun2.1.google.com:19302'
      ],
    },
  ],
}

init()

async function createPeerConnection(sdpType) {
  pc = new RTCPeerConnection(config)

  remoteStream = new MediaStream()
  document.querySelector('#user-2').srcObject = remoteStream

  localStream.getTracks().forEach(track => {
    pc.addTrack(track, localStream)
  })

  pc.ontrack = async e => {
    console.log('ontrack')

    e.streams[0].getTracks().forEach(track => {
      remoteStream.addTrack(track)
    })
  }

  pc.onicecandidate = async e => {
    if (e.candidate) {
      console.log(pc.localDescription)
      document.querySelector('#' + sdpType).value = JSON.stringify(pc.localDescription)
    }
  }
}

async function init() {
  localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false })
  document.querySelector('#user-1').srcObject = localStream
}

async function createOffer() {
  createPeerConnection('offer-sdp')

  const offer = await pc.createOffer()
  await pc.setLocalDescription(offer)
  document.querySelector('#offer-sdp').value = JSON.stringify(offer)
}

async function createAnswer() {
  createPeerConnection('answer-sdp')

  let offer = document.querySelector('#offer-sdp').value
  if (!offer) {
    alert('请先获取 offer')
  }
  offer = JSON.parse(offer)
  await pc.setRemoteDescription(offer)

  const answer = await pc.createAnswer()
  await pc.setLocalDescription(answer)
  document.querySelector('#answer-sdp').value = JSON.stringify(answer)
}

async function addAnswer(e) {
  let answer = document.querySelector('#answer-sdp').value
  if (!answer) {
    alert('请先获取 answer')
  }
  answer = JSON.parse(answer)

  if (!pc.currentRemoteDescription) {
    pc.setRemoteDescription(answer)
  }
}

document.querySelector('#create-offer').addEventListener('click', createOffer)
document.querySelector('#create-answer').addEventListener('click', createAnswer)
document.querySelector('#add-answer').addEventListener('click', addAnswer)
