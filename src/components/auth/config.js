export const COUNTRIES = [
  'Argentina', 
  'Chile', 
  'Colombia', 
  'México',
  'Perú'
]

export const STATES = [
  ['Buenos Aires', 'Córdoba', 'Santa Fe', 'Mendoza', 'Chaco'],
  ['Coquimbo', 'Aconcagua', 'Santiago', 'Colchagua', 'Maule'],
  ['Bolívar', 'Boyacá', 'Caldas', 'Caquetá', 'Antioquia'],
  ['Jalisco', 'Nuevo León', 'Yucatán', 'Chiapas', 'Baja Califormia'],
  ['Lima', 'Callao', 'Cusco', 'Moquegua', 'Ica'],
]

export const SIGNUP_FORM_CONF = {
  title: '<span>Registrate en <span class="text-primary-b"><b>Wolox</b></span></span>',
  inputs: {
    name: {
      label: 'Ingrese su nombre',
      validate: {
        maxLength: 30
      }
    },
    last_name: {
      label: 'Ingrese su apellido',
      validate: {
        maxLength: 30
      }
    },
    country: {
      label: 'Ingrese su país',
      options: COUNTRIES,
      refresh: 'state'
    },
    province: {
      label: 'Ingrese su estado',
      options: STATES
    },
    mail: {
      label: 'Ingrese su email',
      validate: {
        pattern: /^[a-z0-9]+@[a-z0-9.-]+\.[a-z]+$/,
        patternMessage: 'Debe ingresar un email valido.'
      }
    },
    phone: {
      label: 'Ingrese su teléfono',
      validate: {
        maxLength: 10,
      }
    },
    password: {
      label: 'Ingrese su contraseña',
      validate: {
        pattern: /^(?=.*[0-9])(?=.*[a-z]).{6,32}$/,
        patternMessage: 'La contraseña debe ser alfanumérica con un mínimo de 6 caracteres.'
      }
    },
    repassword: {
      label: 'Ingrese nuevamente su contraseña'
    },
    termns: {
      label: 'Acepto Términos y Condiciones',
      validate: {
        equal: {
          value: true,
          message: 'Debes aceptar los “Términos y Condiciones”.'
        },
      }
    }
  },
  buttons: {
    singup: {
      label: 'Registrar'
    }
  }
}