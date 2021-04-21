import { TECHNOLOGIES_ACTIONS } from './config'
import { TECH_DEFAULT } from '../../appConfiguration'
import { listAllTechs } from '../../providerServices'

export const setTechnologies = (techs) => {
  const technologies = techs.map((t, i) => {
    return {
      ...TECH_DEFAULT,
      id: i,
      attrs: t
    }
  })
  return {
    type: TECHNOLOGIES_ACTIONS.SET_TECHNOLOGIES,
    technologies
  }
}

export const changeTechState = (id) => {
  return {
    type: TECHNOLOGIES_ACTIONS.TECHNOLOGIE_CHANGE_STATE,
    index: id
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