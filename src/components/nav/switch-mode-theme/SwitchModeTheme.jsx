import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { changeMode } from '../../../app/features/theme-mode/modeSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import "./switch-mode-theme.scss";


const SwitchModeTheme = () => {
  const modeTheme = useSelector((state) => state.modeslice.mode);
  const dispatch = useDispatch();
  return (
    <button className='btn-mode-theme' onClick={() => dispatch(changeMode())}>{modeTheme ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faLightbulb} />}</button>
  )
}

export default SwitchModeTheme