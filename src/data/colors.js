export const colors = {
    silver: '#d9d9d9',
    yellow: '#ffff00',
    gold: '#D4AF37',
    orange: '#ff965a',
    brown: '#ba5c49',
    red: '#ff0000',
    scharlach: '#ff0014',
    purpur: '#BC0061',
    violet: '#cb20ff',
    blue: '#0000ff',
    turquoise: '#00ffd5',
    green: '#00ff00',
    black: '#000000',
    white: '#ffffff',
    grey: '#8f8f8f'
};

export const rgbaColorStrings = {
    silver: '#d9d9d9',
    yellow: 'rgba(255, 235, 59, ',
    gold: 'rgba(212,175,55, ',
    orange: 'rgba(255,150,90, ',
    // brown: '#ba5c49',
    red: 'rgba(255,0,0, ',
    // scharlach: '#ff0014',
    // purpur: '#BC0061',
    violet: 'rgba(251, 0, 255, ',
    blue: 'rgba(0,0,255, ',
    turquoise: 'rgba(0,255,255, ',
    green: 'rgba(0,255,0, ',
    black: 'rgba(0, 0, 0, ',
    white: 'rgba(255, 255, 255, ',
    grey: 'rgba(200,200,200, '
};

export function getRgbaColorStringWithAlpha(colorName, alpha) {
    return rgbaColorStrings[colorName] + alpha + ')';
}