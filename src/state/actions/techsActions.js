import { TECHNOLOGIES_ACTIONS } from './config'
import { TECH_DEFAULT } from '../../appConfiguration'
import { listAllTechs } from '../../providerServices'

const PREFIX_FAVORITE_TECHS_FOR_LS = 'tech--'

export const setTechnologies = (techs) => {
  const technologies = techs.map((t, i) => {
    const lsIsFav = localStorage.getItem(`${PREFIX_FAVORITE_TECHS_FOR_LS}${t.tech}`)
    const isFavorite = lsIsFav === 'true'
    return {
      ...TECH_DEFAULT,
      id: i,
      isFavorite,
      attrs: t
    }
  })
  return {
    type: TECHNOLOGIES_ACTIONS.SET_TECHNOLOGIES,
    technologies
  }
}

export const changeTechState = (id, tech, isFavorite) => {
  localStorage.setItem(`${PREFIX_FAVORITE_TECHS_FOR_LS}${tech}`, isFavorite)
  return {
    type: TECHNOLOGIES_ACTIONS.TECHNOLOGIE_CHANGE_STATE,
    index: id,
    isFavorite
  }
}

export const startTechsApp = () => {
  return (dispatch) => {
    listAllTechs().then(res => {
      dispatch(setTechnologies(res))
    }).catch(err => {
      console.log(err);
    })
  }
}