export const dataJson = [
  {
    type: "text",
    label: "Nombre completo",
    name: "fullname",
    required: true,
  },
  {
    type: "email",
    label: "Correo electrónico",
    name: "email",
    required: true,
  },
  {
    type: "date",
    label: "Fecha de nacimiento",
    name: "birthday",
    required: true,
  },
  {
    type: "select",
    label: "¿Cuál es tu país de origen?",
    name: "country",
    options: [
      {
        label: "Argentina",
        value: "argentina",
      },
      {
        label: "Brasil",
        value: "brasil",
      },
      {
        label: "Chile",
        value: "chile",
      },
      {
        label: "Colombia",
        value: "colombia",
      },
      {
        label: "México",
        value: "mexico",
      },
      {
        label: "Perú",
        value: "peru",
      },
      {
        label: "Uruguay",
        value: "uruguay",
      },
      {
        label: "Venezuela",
        value: "venezuela",
      },
    ],
    required: true,
  },
  {
    type: "checkbox",
    label: "¿Acepta los términos y condiciones?",
    name: "terms_and_conditions",
    required: true,
  },
  {
    type: "submit",
    label: "Enviar",
  },
];
