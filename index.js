for (const form of forms) {
  $('#navbar').append(`
    <li class="nav-item">
      <a class="nav-link text-dark" aria-current="page" href="#">${form.title}</a>
    </li>
  `)
}

$('#navbar li a').click(function (e) {
  $("#navbar li a").removeClass("active");
  $(this).addClass("active");


})

$('#form1').append(`
  <h1 class="mt-5">${form1.title}</h1>
`)

for (const input of form1.inputs) {
  if (input.options) { // if is a select
    let html = '';
    for (option of input.options)
      html += `<option value="${option}">${option}</option>`

    $('#form1').append(`
      <div class='col'>
        <label for="type" class="form-label">${input.label} *</label>
        <select class="form-select" id="type" required>
          <option value="" selected></option>
          ${html}
        </select>
      </div>
    `)
  } else if (input.textarea) { // if is a textarea
    $('#form1').append(`
      <div>
        <label for="${input.id}" class="form-label">${input.label} *</label>
        <textarea class="form-control" id="${input.id}" rows="4" required></textarea>
      </div>
    `)
  } else { // if is an input
    const type = input.date ? 'type=date' : '';
    $('#form1').append(`
      <div>
        <label for="${input.id}" class="form-label">${input.label} *</label>
        <input id="${input.id}" ${type} class="form-control" required/>
      </div>
    `)
  }
}

$('#form1').append(`
  <button type="submit" id="submit" class="my-5 btn btn-dark">
    Envoyer
  </button>
`);

$("#submit").click(() => {
  $("#form1").animate({ width:'toggle' },350);
})
