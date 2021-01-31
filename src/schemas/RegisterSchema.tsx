import * as Yup from 'yup'

const RegisterSchema = Yup.object().shape({
  document: Yup.string()
    .required('Ingrese un Nro de documento.')
    .min(8, 'Ingrese 8 caracteres como minimo.')
    .max(11, 'Ingrese 11 caracteres como maximo.'),
  birthday: Yup.date().required('Ingrese una fecha de cumpleaños.'),
  name: Yup.string().required('Ingrese sus nombres.'),
  lastName: Yup.string().required('Ingrese el segundo apellido.'),
  firstName: Yup.string().required('Ingrese el primer apellido.'),
  gender: Yup.string().required('Elija una opción.'),
  person: Yup.string().required('Elija una opción.')
})

export default RegisterSchema
