import sort_asc from '../../../assets/fillter_icons/sort_asc.png'
import sort_desc from '../../../assets/fillter_icons/sort_desc.png'
import { CONFIG } from '../../../utilities'

export const FILTER_CONFIG = {
  SEARCH: {
    ICON: 'https://i.pinimg.com/originals/32/a4/d4/32a4d4169ebc73509036d99308fd38c7.png',
    PLACEHOLDER: 'Buscar'
  },
  ORDER: {
    ASC: {
      IMAGE: sort_asc,
      ID: CONFIG.FILTER.ORDER.ASC.ID
    },
    DESC: {
      IMAGE: sort_desc,
      ID: CONFIG.FILTER.ORDER.DESC.ID
    }
  }
}