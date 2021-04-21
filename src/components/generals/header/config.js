import { ROUTES } from '../../../utilities/router/config'
import logo_full_color from "../../../assets/logo_full_color.svg"

export const MENU_ACTION_TYPES = {
  ROUTE_TO: 'routeTo',
  MOVE_TO_ELEMENT: 'moveToElement',
  LOGOUT: 'logout'
}

export const DISPLAY_CONDITION_TYPES ={
  NO_CONDITION: 'noCondition',
  USER_LOGGED: 'userLogged',
  USER_UNLOGGED: 'userUnlogged',
  APP_IN_ROUTE: 'appInRoute'
}

export const STYLE_TYPES = {
  BASIC: 'basic',
  BUTTON_PRIMARY_OUTLINE: 'btn-primary-a-outline',
  BUTTON_PRIMARY_B_OUTLINE: 'btn-primary-b-outline',
  TECHS_SELECTED: 'techsSelected'
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
        path: ROUTES.LANDING_PAGE.PATH,
        alternativeElementId: 'greeting'
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
    },
    {
      label: 'Mis tecnologias',
      style: {
        type: STYLE_TYPES.TECHS_SELECTED
      },
      displayCondition: {
        type: DISPLAY_CONDITION_TYPES.USER_LOGGED
      },
      action: {
        type: MENU_ACTION_TYPES.ROUTE_TO,
        path: '/techList'
      }
    },
    {
      label: 'Logout',
      style: {
        type: STYLE_TYPES.BUTTON_PRIMARY_B_OUTLINE
      },
      displayCondition: {
        type: DISPLAY_CONDITION_TYPES.USER_LOGGED
      },
      action: {
        type: MENU_ACTION_TYPES.LOGOUT
      }
    },
  ]
}