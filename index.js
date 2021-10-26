// show tabs
for (const _form in forms) {
  const form = forms[_form];
  const active = Object.keys(forms).indexOf(_form) === 0 ? 'active' : '';
  $('#navbar').append(`
    <li class="nav-item">
      <a id='${_form}-tab' class="nav-link text-dark ${active}" aria-current="page" href="#">${form.title}</a>
    </li>
  `)
}

function showForm() {
  const formsIds = Object.keys(forms);
  console.log(formsIds[currentFormIndex])
  // show title
  $('#form').append(`
    <h1 class="mt-5">${forms[formsIds[currentFormIndex]].title}</h1>
  `)

  // show inputs
  for (const input of forms[formsIds[currentFormIndex]].inputs) {
  if (input.options) { // if is a select
    let html = '';
    for (option of input.options)
      html += `<option value="${option}">${option}</option>`

    $('#form').append(`
      <div class='col'>
        <label for="type" class="form-label">${input.label} *</label>
        <select class="form-select" id="type" required>
          <option value="" selected></option>
          ${html}
        </select>
      </div>
    `)
  } else if (input.textarea) { // if is a textarea
    $('#form').append(`
      <div>
        <label for="${input.id}" class="form-label">${input.label} *</label>
        <textarea class="form-control" id="${input.id}" rows="4" required></textarea>
      </div>
    `)
  } else { // if is an input
    const type = input.date ? 'type=date' : '';
    $('#form').append(`
      <div>
        <label for="${input.id}" class="form-label">${input.label} *</label>
        <input id="${input.id}" ${type} class="form-control" required/>
      </div>
    `)
  }
  }

  $('#form').append(`
    <button type="button" id="submit" class="my-5 btn btn-dark">
      Continuer
      <i class="bi bi-caret-right"></i>
    </button>
  `)

  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 100);

  $("#submit").click(() => {
    const formsIds = Object.keys(forms);
    if (currentFormIndex === formsIds.length - 1)
      currentFormIndex = 0;
    else
      currentFormIndex += 1;
    $("#navbar li a").removeClass("active");
    const nextTabId = Object.keys(forms)[currentFormIndex] + '-tab';
    $('#' + nextTabId).addClass("active");
  
    $('#form').empty();
    showForm();
  })
}

showForm();
