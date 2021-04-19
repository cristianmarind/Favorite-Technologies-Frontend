export const TECHNOLOGIES_ACTIONS = {
    SET_TECHNOLOGIES: 'setTechnologies',
    TECHNOLOGIE_CHANGE_STATE: 'technologieChangeState',//favorite or no favorite
}
export const USER_ACTIONS = {
    SET_IS_LOGGED: 'setIsLogged',
    SET_USER_ATTRS: 'setUserAttrs',
}

export const BACKEND_API = {
    LOGIN: {
        END_POINT: 'http://private-8e8921-woloxfrontendinverview.apiary-mock.com/login',
        METHOD: 'POST'
    },
    SIGNUP: {
        END_POINT: 'http://private-8e8921-woloxfrontendinverview.apiary-mock.com/signup',
        METHOD: 'POST'
    },
    LIST_TECHS: {
        END_POINT: 'http://private-8e8921-woloxfrontendinverview.apiary-mock.com/techs',
        METHOD: 'GET'
    }
}