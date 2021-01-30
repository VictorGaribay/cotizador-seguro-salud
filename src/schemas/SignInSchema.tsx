import * as Yup from 'yup'

const SignInSchema = Yup.object().shape({
  document: Yup.string()
    .required('Ingrese un Nro de documento.')
    .min(8, 'Ingrese 8 caracteres como minimo.')
    .max(11, 'Ingrese 11 caracteres como maximo.'),
  birthday: Yup.date().required('Ingrese una fecha de cumpleaños.'),
  phone: Yup.string()
    .required('Ingrese una número de telefono.')
    .min(9, 'Ingrese 9 caracteres como minimo.')
    .max(9, 'Ingrese 9 caracteres como maximo.')
})

export default SignInSchema
