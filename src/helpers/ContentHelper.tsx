import mobile1 from '../../public/gl_mobile-20x20-1.png'
import mobile from '../../public/gl_mobile-20x20.png'
import shield1 from '../../public/gl_shield-20x20-1.png'
import shield from '../../public/gl_shield-20x20.png'
export const listItem = [
  { url: shield, text: 'Cómpralo de manera fácil y rápida' },
  { url: mobile, text: 'Cotiza y compra tu seguro 100% digital' },
  { url: mobile1, text: 'Hasta S/. 12 millones de cobertura anual' },
  { url: shield1, text: 'Más de 300 clinicas en todo el Perú' }
]

export const titleContent = { title: 'Seguro de', label: 'Salud' }

export const titleForm = { title: 'Obtén tu', title1: 'Seguro ahora', title2: 'Ingresa los datos para comenzar' }

export const titleRegister = { title: 'Valida que los datos sean correctos' }

export const termForm = {
  term: 'Política de Protección de Datos Personales y los Términos y Condiciones.',
  term1: 'Política de Envio de Comunicaciones Comerciales.'
}

export const dataSelect = [
  { value: 'DNI', text: 'DNI' },
  { value: 'RUC', text: 'RUC' }
]

export const serviceSelect = [
  { value: '', text: 'Servcios brindados' },
  { value: 'Servcios al hoga', text: 'Servcios al hogar' },
  { value: 'Servcios semanales', text: 'Servcios semanales' },
  { value: 'Servcios mensuales', text: 'Servcios mensuales' }
]

export const exclusionSelect = [
  { value: '', text: 'Exclusiones' },
  { value: 'Secuelas de enfermedades infecciosas', text: 'Secuelas de enfermedades infecciosas' },
  { value: 'Lesiones autoinflingidas', text: 'Lesiones autoinflingidas' },
  { value: 'Agresiones', text: 'Agresiones' }
]

export const plans = [
  { title: 'BÁSICO', money: '160' },
  { title: 'AVANZADO', money: '200' },
  { title: 'PREMIUM', money: '250' },
  { title: 'FULL', money: '500' }
]

export const dataServices = [
  { icon: '❤', title: 'Lima (zona de cobertura)', status: true, id: 0 },
  { icon: '❤', title: '+30 clínicas (en red afiliada)', status: true, id: 0 },
  { icon: '❤', title: 'Médico a domicilio', status: false, id: 1 },
  { icon: '❤', title: 'Chequeos preventivos', status: false, id: 1 },
  { icon: '❤', title: 'Reembolso nacional', status: false, id: 2 },
  { icon: '❤', title: 'Reembolso internacionl', status: false, id: 3 }
]
