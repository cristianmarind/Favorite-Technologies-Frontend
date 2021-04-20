import { ROUTES } from '../../utilities/router/config'
import logo_full_color from "../../assets/logo_full_color.svg"

export const MENU_ACTION_TYPES = {
  ROUTE_TO: 'routeTo',
  MOVE_TO_ELEMENT: 'moveToElement'
}

export const DISPLAY_CONDITION_TYPES ={
  NO_CONDITION: 'noCondition',
  USER_LOGGED: 'userLogged',
  USER_UNLOGGED: 'userUnlogged',
  APP_IN_ROUTE: 'appInRoute'
}

export const STYLE_TYPES = {
  BASIC: 'basic',
  BUTTON_PRIMARY_OUTLINE: 'btn-primary-a-outline'
}

export const HEADER_CONF = {
  imageSrc: logo_full_color,
  options: [
    {
      label: 'Inicio',
      style: {
        type: STYLE_TYPES.BASIC
      },
      displayCondition: {
        type: DISPLAY_CONDITION_TYPES.NO_CONDITION
      },
      action: {
        type: MENU_ACTION_TYPES.ROUTE_TO,
        path: ROUTES.LANDING_PAGE.PATH
      }
    },
    {
      label: 'Beneficios',
      style: {
        type: STYLE_TYPES.BASIC
      },
      displayCondition: {
        type: DISPLAY_CONDITION_TYPES.APP_IN_ROUTE,
        path: ROUTES.LANDING_PAGE.PATH
      },
      action: {
        type: MENU_ACTION_TYPES.MOVE_TO_ELEMENT,
        elementId: 'benefits'
      }
    },
    {
      label: 'Login',
      style: {
        type: STYLE_TYPES.BUTTON_PRIMARY_OUTLINE
      },
      displayCondition: {
        type: DISPLAY_CONDITION_TYPES.USER_UNLOGGED
      },
      action: {
        type: MENU_ACTION_TYPES.ROUTE_TO,
        path: ROUTES.LOGIN.PATH
      }
    }
  ]
}