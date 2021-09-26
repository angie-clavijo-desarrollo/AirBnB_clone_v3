const dictionary_save_id = {};
$(document).ready(() => {
$("input[type=checkbox]").click(function (event) {
    const target = event.target
     const name = target.getAttribute("data-name")
    const id = target.getAttribute("data-id")
    if (target.checked){
        dictionary_save_id[id] = name;
    } else {
        delete dictionary_save_id[id];
    };
    console.log(dictionary_save_id)
    });
});