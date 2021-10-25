const form1 = [
  { title: "Informations de la société" },
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

const form2 = [
  { title: "Titre 2" },
  { id: 'question1', label: "Question 1" },
  { id: 'question1', label: "Question 2" },
  { id: 'question1', label: "Question 3" },
  { id: 'question1', label: "Question 4" },
]

const forms = [form1, form2];