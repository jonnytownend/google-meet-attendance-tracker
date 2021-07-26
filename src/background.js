const names = [
  "Alistair Sykes",
  "Andy Ferrett",
  "Chris Leversuch",
  "Dave Thompson",
  "Elle Daintree",
  "Ellie Jones",
  "Georgia Edmonds",
  "James Allwright",
  "Jonny Townend",
  "Josh O'Riordan",
  "Jotham Oakley",
  "Nick Holcombe",
  "Robert Redwood",
  "Steve Johnson",
  "Caz Houghton",
  "Rhys Kentish",
  "Other Person",
].sort()

// Useful Meet elements
const infoButton = () => $('.VfPpkd-Bz112c-LgbsSe.yHy1rc.eT1oJ.JsuyRc.boDUxc[aria-label="Meeting details"]')
const infoArea = () => $('.R3Gmyc.qwU8Me')
const meetCode = () => $('.Jyj1Td.CkXZgc')
const peopleList = () => $('.ggUFBf')

// Variables
var attendeesMenuIsOpen = false
const sideMenuIsOpen = () => {
  const videoArea = $('.pHsCke')
  const marginRight = videoArea.css('margin-right')
  return marginRight !== '0px'
}

// Create elements
const menu = $(`
  <div class="floating-menu">
    <h1>Expected Attendees</h1>
    <div class="attendees-list"></div>
  </div>
`)

// Setup meet element hooks
infoButton().click(() => {
  menu.hide()
})

const refresh = () => {
  console.log('jonny', 'refresh called')
  $('.name').removeClass('isHere')
  const peopleHere = $('.H5Sn2e.adnwBd').toArray().map(el => el.innerText)
  console.log(peopleHere)
  peopleHere.forEach(person => {
    $(`.name:contains(${person})`).addClass('isHere')
  })
}

function onCallStart() {
  // Add menu button to
  const menuButton = $(`
    <div class="menu-button">A</div>
  `)
  menuButton.click(() => {
    refresh()
    if (!(sideMenuIsOpen() && !attendeesMenuIsOpen)) {
      infoButton().trigger('click')
    }
    menu.toggle()
    attendeesMenuIsOpen = true
  })
  $('.TqwH9c').append(menuButton)

  // Add menu to info menu area
  menu.toggle() // Hide the menu first
  // $(document.body).append(menu)
  infoArea().append(menu)

  // Add the names
  names.forEach(name => {
    $('.attendees-list').append(
      $(`<p class="name">${name}</p>`)
    )
  })

  $('.refresh-button').click(() => {
    refresh()
  })

  refresh()
}

$(document).ready(() => {
  // Wait for meet code to display (ie. the call has started))
  const checkCallStart = setInterval(() => {
    if (infoButton().length > 0) {
      onCallStart()
      clearInterval(checkCallStart)
    }
  }, 300)

  // Set up a demo listener
  $("body").on('DOMSubtreeModified', ".koV58", function () {
    refresh()
  });
})