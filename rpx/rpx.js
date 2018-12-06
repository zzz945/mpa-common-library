export default function rpx (px, designWidth = 375) {
  return px*document.body.clientWidth/375
}