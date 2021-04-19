import background_image_sm from "../../../assets/Backgrounds/Bg_Footer.png"
import background_image_md from "../../../assets/Backgrounds/Bg_Footer@2x.png"
import background_image_lg from "../../../assets/Backgrounds/Bg_Footer@3x.png"


export const ACTIONS_TYPES = {
  LINK: 'link'
}

export const PARTING_CONF = {
  titleHTML: '<span>Gracias por <span class="text-primary-a">completar el ejercicio</span></span>',
  text: 'Te invitamos a ver mas información',
  action: {
    type: ACTIONS_TYPES.LINK,
    link: 'https://www.wolox.com.ar/',
    style: 'button-primary-a',
    label: 'Conocer más'
  },
  backgroundImage: {
    sm: background_image_sm,
    md: background_image_md,
    lg: background_image_lg
  },
}