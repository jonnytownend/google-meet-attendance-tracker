// Useful Meet elements
const infoButton = () => $('.VfPpkd-Bz112c-LgbsSe.yHy1rc.eT1oJ.JsuyRc.boDUxc[aria-label="Meeting details"]')
const infoArea = () => $('.R3Gmyc.qwU8Me')
const meetCode = () => $('.Jyj1Td.CkXZgc')
const peopleList = () => $('.ggUFBf')

// Useful page info
const sideMenuIsOpen = () => {
  const videoArea = $('.pHsCke')
  const marginRight = videoArea.css('margin-right')
  return marginRight !== '0px'
}