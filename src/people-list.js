const expectedAreaSelector = 'expected-area'
const nameSelector = 'google-meet-attendace-tracker-name'

const createMenu = (names, waitingCount) => $(`
<div class="${expectedAreaSelector}">
  <p class="expected-area-title">Waiting for ${waitingCount} people:</p>
  ${names.map(name => `<p class="${nameSelector}">${name}</p>`).join('')}
</div>
`)

const refreshPeopleList = () => {
  // Remove old menu
  $(`.${expectedAreaSelector}`).remove()

  // Get people list from screen
  const peopleHere = peopleListNames().toArray().map(e => e.innerText)
  const hereCount = peopleHere.length
  const totalCount = names.length
  const waitingCount = totalCount - hereCount

  // Create new menu
  const menu = createMenu(names, waitingCount)
  peopleArea().append(menu)

  // Hide any people already on the call
  $(`.${nameSelector}`).show()
  peopleHere.forEach(person => {
    $(`.${nameSelector}:contains(${person})`).hide()
  })
}
