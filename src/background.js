// Variables
var attendeesMenuIsOpen = false

// New elements
const menu = $(`
  <div class="floating-menu">
    <h1>Expected Attendees</h1>
    <div class="attendees-list"></div>
  </div>
`)

const menuButton = $(`
  <div class="menu-button">A</div>
`)

const refreshPeopleList = () => {
  $('.name').removeClass('isHere')
  const peopleHere = $('.H5Sn2e.adnwBd').toArray().map(el => el.innerText)
  peopleHere.forEach(person => {
    $(`.name:contains(${person})`).addClass('isHere')
  })
}

function setupEvents() {
  infoButton().click(() => {
    menu.hide()
  })

  menuButton.click(() => {
    refreshPeopleList()
    if (!(sideMenuIsOpen() && !attendeesMenuIsOpen)) {
      infoButton().trigger('click')
    }
    menu.toggle()
    attendeesMenuIsOpen = true
  })

  $('.TqwH9c').append(menuButton)
  infoArea().append(menu)

  // Listen for changes to the main video screen
  $("body").on('DOMSubtreeModified', ".koV58", function () {
    refreshPeopleList()
  });
}

function onCallStart() {
  setupEvents()

  menu.toggle()

  // Add the names
  names.forEach(name => {
    $('.attendees-list').append(
      $(`<p class="name">${name}</p>`)
    )
  })

  $('.refresh-button').click(() => {
    refreshPeopleList()
  })

  refreshPeopleList()
}

$(document).ready(() => {
  // Wait for info button to display (ie. the call has started))
  const checkCallStart = setInterval(() => {
    if (infoButton().length > 0) {
      onCallStart()
      clearInterval(checkCallStart)
    }
  }, 300)
})