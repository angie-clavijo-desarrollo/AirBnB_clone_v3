$(document).ready(() {
  $('input[type=checkbox]').click(function (event) {
    const target = event.target;
    const name = target.getAttribute('data-name');
    const id = target.getAttribute('data-id');
    if (target.checked) {
      dictionarySaveId[id] = name;
      let h4Add = $('.amenities h4')
      h4Add.text(Object.values(dictionarySaveId) .join(', '));
    } else {
      delete dictionarySaveId[id];
    }
    console.log(dictionarySaveId);
  });
});
