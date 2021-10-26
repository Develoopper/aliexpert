const form1 = {
  title: "Informations de la société",
  inputs: [
    { id: 'date', label: "Date de création", date: true },
    { id: 'nom', label: "Raison sociale" },
    { 
      id: 'form-juridique', label: "Forme juridique", 
      options: [
        "SA",
        "SARL",
        "SNC",
        "SNA",
        "SCP",
        "Auto entrepreneur"
      ] 
    },
    { id: 'description', label: "Description", textarea: true },
    { id: 'nom1', label: "Raison sociale" },
    { id: 'nom2', label: "Raison sociale" },
  ]
}

const form2 = {
  title: "Plan de la société",
  inputs: [
    { id: 'question1', label: "Question 1" },
    { id: 'question1', label: "Question 2" },
    { id: 'question1', label: "Question 3" },
    { id: 'question1', label: "Question 4" },
  ]
}

const form3 = {
  title: "Titre 3",
  inputs: [
    { id: 'question1', label: "Question 1" },
    { id: 'question1', label: "Question 2" },
    { id: 'question1', label: "Question 3" },
    { id: 'question1', label: "Question 4" },
  ]
}

const form4 = {
  title: "Titre 4",
  inputs: [
    { id: 'question1', label: "Question 1" },
    { id: 'question1', label: "Question 2" },
    { id: 'question1', label: "Question 3" },
    { id: 'question1', label: "Question 4" },
  ]
}

const form5 = {
  title: "Titre 5",
  inputs: [
    { id: 'question1', label: "Question 1" },
    { id: 'question1', label: "Question 2" },
    { id: 'question1', label: "Question 3" },
    { id: 'question1', label: "Question 4" },
  ]
}

const forms = { form1, form2, form3, form4, form5 };
// add attribute (value: '') to all inputs
Object.values(forms)
  .map((form) => form.inputs)
  .map((inputs) => {
    inputs.map((obj) => { obj.value = '' }); 
  })

let currentFormIndex = 0;