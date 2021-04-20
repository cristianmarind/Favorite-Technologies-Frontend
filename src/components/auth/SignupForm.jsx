import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signupAction } from '../../state/actions/authActions'
import {
  SIGNUP_FORM_CONF
} from './config'
import {
  validateInput
} from '../../utilities'

const inputKeys = Object.keys(SIGNUP_FORM_CONF.inputs)
const removeForService = ['repassword', 'termns']

const initialState = inputKeys.reduce((res, curr) => {
  const inputConf = SIGNUP_FORM_CONF.inputs[curr]
  const value = Array.isArray(inputConf.options) ? 0 : ''
  const msg = validateInput(inputConf.validate, value)
  return {
    ...res,
    [curr]: {
      value,
      msg
    }
  }
}, {});

const SignupForm = () => {
  const dispatch = useDispatch()
  const [inputs, setInputs] = useState(initialState)
  const [isValid, setIsValid] = useState(false)

  const handleInputChange = (inputKey, val) => {
    const inputConf = SIGNUP_FORM_CONF.inputs[inputKey]
    const msg = validateInput(inputConf.validate, val)
    const newInputs = {
      ...inputs,
      [inputKey]: {
        value: val,
        msg
      }
    }
    const findMessage = Object.keys(newInputs).findIndex((inputKey) => {
      return !!newInputs[inputKey].msg
    })
    setInputs(newInputs)
    setIsValid(findMessage < 0)
  }

  const handleSignup = () => {
    const user = Object.keys(inputs).reduce((res, curr) => {
      if (removeForService.findIndex(key => curr === key) >= 0) {
        return res
      }
      const inputConf = SIGNUP_FORM_CONF.inputs[curr]
      const value = Array.isArray(inputConf.options) ?
        curr === 'province' ? inputConf.options[inputs.country.value][inputs[curr].value] :
          inputConf.options[inputs[curr].value] :
        inputs[curr].value
      return {
        ...res,
        [curr]: value
      }
    }, {})
    dispatch(signupAction(user))
  }

  return (
    <div className="containerY px-3">
      <div className="pb-3">
        <div
          className="font-size-large text-center"
          dangerouslySetInnerHTML={{
            __html: SIGNUP_FORM_CONF.title
          }}
        />
      </div>
      <div className="containerY pb-2">
        <label htmlFor="name" className="font-size-x-normal">
          {SIGNUP_FORM_CONF.inputs.name.label}
        </label>
        <input
          id="name"
          value={inputs.name.value}
          onChange={(ev) => handleInputChange('name', ev.target.value)}
          type="text"
          className="font-size-normal"
          max={SIGNUP_FORM_CONF.inputs.name.validate.maxLength}
        />
        <span>{inputs.name.msg}</span>
      </div>
      <div className="containerY pb-2">
        <label htmlFor="last_name" className="font-size-x-normal">
          {SIGNUP_FORM_CONF.inputs.last_name.label}
        </label>
        <input
          id="last_name"
          value={inputs.last_name.value}
          onChange={(ev) => handleInputChange('last_name', ev.target.value)}
          type="text"
          className="font-size-normal"
          max={SIGNUP_FORM_CONF.inputs.last_name.validate.maxLength}
        />
      </div>
      <div className="containerY pb-2">
        <label htmlFor="country" className="font-size-x-normal">
          {SIGNUP_FORM_CONF.inputs.country.label}
        </label>
        <select
          id="country"
          value={inputs.country.value}
          onChange={(ev) => handleInputChange('country', ev.target.value)}
          className="font-size-normal"
        >
          {
            SIGNUP_FORM_CONF.inputs.country.options.map((opt, i) => {
              return (
                <option key={i} value={i}>
                  { opt}
                </option>
              )
            })
          }

        </select>
        <span>{inputs.country.msg}</span>
      </div>
      <div className="containerY pb-2">
        <label htmlFor="province" className="font-size-x-normal">
          {SIGNUP_FORM_CONF.inputs.province.label}
        </label>
        <select
          id="province"
          value={inputs.province.value}
          onChange={(ev) => handleInputChange('province', ev.target.value)}
          className="font-size-normal"
        >
          {
            SIGNUP_FORM_CONF.inputs.province.options[inputs.country.value].map((opt, i) => {
              return (
                <option key={i} value={i}>
                  { opt}
                </option>
              )
            })
          }

        </select>
        <span>{inputs.province.msg}</span>
      </div>
      <div className="containerY pb-2">
        <label htmlFor="mail" className="font-size-x-normal">
          {SIGNUP_FORM_CONF.inputs.mail.label}
        </label>
        <input
          id="mail"
          type="mail"
          value={inputs.mail.value}
          onChange={(ev) => handleInputChange('mail', ev.target.value)}
          className="font-size-normal"
        />
        <span>{inputs.mail.msg}</span>
      </div>
      <div className="containerY pb-2">
        <label htmlFor="phone" className="font-size-x-normal">
          {SIGNUP_FORM_CONF.inputs.phone.label}
        </label>
        <input
          id="phone"
          type="number"
          value={inputs.phone.value}
          onChange={(ev) => handleInputChange('phone', ev.target.value)}
          className="font-size-normal"
          max={SIGNUP_FORM_CONF.inputs.phone.validate.maxLength}
        />
        <span>{inputs.phone.msg}</span>
      </div>
      <div className="containerY pb-2">
        <label htmlFor="password" className="font-size-x-normal">
          {SIGNUP_FORM_CONF.inputs.password.label}
        </label>
        <input
          id="password"
          type="password"
          value={inputs.password.value}
          onChange={(ev) => handleInputChange('password', ev.target.value)}
          className="font-size-normal"
        />
        <span>{inputs.password.msg}</span>
      </div>
      <div className="containerY pb-2">
        <label htmlFor="repassword" className="font-size-x-normal">
          {SIGNUP_FORM_CONF.inputs.repassword.label}
        </label>
        <input
          id="repassword"
          type="password"
          value={inputs.repassword.value}
          onChange={(ev) => handleInputChange('repassword', ev.target.value)}
          className="font-size-normal"
        />
        <span>{inputs.repassword.value !== inputs.password.value ? 'Las contraseñas deben coincidir.' : ''}</span>
      </div>

      <div className="containerY pb-2">
        <div className="containerX y-center pb-1">
          <input
            id="termns"
            type="checkbox"
            value={inputs.termns.value}
            onChange={(ev) => handleInputChange('termns', ev.target.checked)}
            className="font-size-normal"
          />
          <label htmlFor="termns" className="font-size-x-normal">
            {SIGNUP_FORM_CONF.inputs.termns.label}
          </label>
        </div>
        <span>{inputs.termns.msg}</span>
      </div>
      <div className="containerY x-center">
        <button
          className={`btn btn-${isValid ? 'primary' : 'disabled'}-a font-size-large`}
          onClick={handleSignup}
          disabled={!isValid}
        >
          {SIGNUP_FORM_CONF.buttons.singup.label}
        </button>
      </div>
    </div>
  )
}

export default SignupForm