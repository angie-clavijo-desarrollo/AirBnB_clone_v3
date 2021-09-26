const dictionarySaveId = {};
$(document).ready(() => {
  $('input[type=checkbox]').click(function (event) {
    const target = event.target;
    const name = target.getAttribute('data-name');
    const id = target.getAttribute('data-id');
    if (target.checked) {
      dictionarySaveId[id] = name;
      $('.amenities h4').text(dictionarySaveId[id]);
    } else {
      delete dictionarySaveId[id];
    }
    console.log(dictionarySaveId);
  });
});
