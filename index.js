// show tabs
for (const _form in forms) {
  const form = forms[_form];
  const active = Object.keys(forms).indexOf(_form) === 0 ? 'active' : '';
  $('#navbar').append(`
    <li class="nav-item ${active}" id='${_form}-tab'>
      <a class="nav-link text-dark" aria-current="page" href="#">${form.title}</a>
    </li>
  `)
}

function showForm() {
  const formsIds = Object.keys(forms);
  const currentForm = forms[formsIds[currentFormIndex]];
  // show title
  $('#form').append(`
    <h1 class="mt-5">${currentForm.title}</h1>
  `)

  // show inputs
  for (const input of currentForm.inputs) {
    if (input.options) { // if is a select
      let html = '';
      for (option of input.options)
        html += `<option value="${option}">${option}</option>`

      $('#form').append(`
        <div>
          <label for="${input.id}" class="form-label">${input.label} *</label>
          <select class="form-select" id="${input.id}" required>
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

    // load input value from memory
    $('#' + input.id).val(currentForm.inputs.find((obj) => obj.id === input.id).value);
    
    $('#' + input.id).change(function (e) {
      const currentInput = currentForm.inputs.find((obj) => obj.id === input.id);
      currentInput.value = e.target.value;
      
      const filledInputsCount = currentForm.inputs
        .map((obj) => obj.value)
        .filter((value) => value !== '')
        .length;
      const filledInputsRatio = (filledInputsCount / currentForm.inputs.length) * 100;
      console.log(filledInputsCount);
      console.log(currentForm.inputs.length);
      $('.progress-bar').css('width', filledInputsRatio + '%');
      if (filledInputsRatio === 100)
        $('.progress-bar').animate({ backgroundColor: '#198754' }, 'slow');
        
    })
    
  }

  $('#form').append(`
    <button type="button" name='prev-next' id="prev" class="my-5 btn btn-dark col me-2">
      <i class="bi bi-caret-left"></i>
      Précedent
    </button>
    <button type="button" name='prev-next' id="next" class="my-5 btn btn-dark col">
      Suivant
      <i class="bi bi-caret-right"></i>
    </button>
  `)

  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 100);

  $("[name='prev-next']").click((e) => {
    const formsIds = Object.keys(forms);
    if (e.target.id === 'prev')
      if (currentFormIndex === 0)
        currentFormIndex = formsIds.length - 1;
      else
        currentFormIndex -= 1;
    else
      if (currentFormIndex === formsIds.length - 1)
        currentFormIndex = 0;
      else
        currentFormIndex += 1;

    $("#navbar li").removeClass("active");
    const nextTabId = Object.keys(forms)[currentFormIndex] + '-tab';
    $('#' + nextTabId).addClass("active");
  
    $('#form').empty();
    showForm();
  })
}

showForm();
