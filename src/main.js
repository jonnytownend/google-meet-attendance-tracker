function onCallStart() {
  // Listen for changes to the people area
  $("body").on('DOMSubtreeModified', peopleListSelector, function () {
    // Wait 50ms for the people list to update
    setTimeout(() => {
      refreshPeopleList()
    }, 50)
    refreshPeopleList()
  });

  peopleAreaButton().click(() => {
    // Wait 50ms for the people list to update
    setTimeout(() => {
      refreshPeopleList()
    }, 50)
  })
}

$(document).ready(() => {
  // Wait for People button to display (ie. the call has started))
  const checkCallStart = setInterval(() => {
    if (peopleAreaButton().length > 0) {
      onCallStart()
      clearInterval(checkCallStart)
    }
  }, 300)
})
