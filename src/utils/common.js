// 일반 함수는 모듈화를 통해 직관성을 높여주세요!

export const sum = (a, b) => {
    return a + b
}

export const getRandomColor = () => {
    const randomNumber = Math.floor(Math.random() * 7 + 1)
    console.log(randomNumber)

    const colors = [
        '#FBC121',
        '#173355',
        '#000047',
        '#010101',
        '#868E96',
        '#E42727',
        '#1C60FF',
        '#E1ECFF',
    ]
    return colors[randomNumber]
}
