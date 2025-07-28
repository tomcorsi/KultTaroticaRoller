const suits = ['Skulls', 'Roses', 'Hourglasses', 'Crescents', 'Eyes']

const majorArcana = [
    'Anthropos',
    'Demiurge',
    'Astaroth',
    'Kether',
    'Chokmah',
    'Binah',
    'Chesed',
    'Geburah',
    'Tiphareth',
    'Netzach',
    'Hod',
    'Yesod',
    'Malkuth',
    'Thaumiel',
    'Chagidiel',
    'Sathariel',
    'Gamichicoth',
    'Golab',
    'Togarini',
    'Hareb-Serap',
    'Samael',
    'Gamaliel',
    'Nahemoth'
]

const drawMinor = () => {
    const randomNumber = Math.floor(Math.random() * 9) + 1
    const suit = Math.floor(Math.random() * 5)
    return `${randomNumber} of ${suits[suit]}`
} 

const drawMajor = () => {
    const randomNumber = Math.floor(Math.random() * 23)
    return majorArcana[randomNumber]
}

const drawCard = () => {
    const randomNumber = Math.floor(Math.random() * 45)

    if (randomNumber > 22) {
        return drawMajor()
    } else {
        return drawMinor()
    }
}

console.log(drawCard())