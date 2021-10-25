const form1 = {
  title: "Informations de la société",
  inputs: [
    { id: 'date', label: "Date de création", date: true },
    { id: 'nom', label: "Nom de la société" },
    { 
      id: 'type', label: "Type", 
      options: [
        "Type1",
        "Type2",
        "Type3",
        "Type4",
        "Type5",
        "Type6"
      ] 
    },
    { id: 'description', label: "Description", textarea: true },
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

const forms = [form1, form2, form3, form4, form5];