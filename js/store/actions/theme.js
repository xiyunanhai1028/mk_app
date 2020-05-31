import * as Type from '../types';

export function changeTheme(theme) {
    return { type: Type.THEME_CHANGE, theme }
}