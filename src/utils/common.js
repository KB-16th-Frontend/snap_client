// 일반 함수는 모듈화를 통해 직관성을 높여주세요!

export const sum = (a, b) => {
    return a + b
}

export const getRandomColor = () => {
    const randomNumber = Math.floor(Math.random() * 8)

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

export const convertCategoryToEmoji = (category) => {
    switch (category) {
        case 'q':
            return '🍕'
        default:
            return '🍔'
    }
}

export const numberToKorean = (num) => {
    if (typeof num !== 'number' || isNaN(num)) return ''

    const units = ['', '만', '억'] // 억까지
    const numberUnits = ['', '일', '이', '삼', '사', '오', '육', '칠', '팔', '구']
    const positionUnits = ['', '십', '백', '천']

    if (num === 0) return '영 원'

    let result = ''
    const parts = []

    // 4자리씩 나눔 (만 단위로)
    let i = 0
    while (num > 0 && i < units.length) {
        const partNum = num % 10000
        parts.unshift({ num: partNum, unit: units[i] })
        num = Math.floor(num / 10000)
        i++
    }

    parts.forEach(({ num, unit }) => {
        if (num === 0) return

        let partStr = ''
        const digits = String(num).padStart(4, '0').split('').map(Number) // 항상 4자리

        digits.forEach((digit, idx) => {
            const pos = 3 - idx
            if (digit !== 0) {
                const digitStr = numberUnits[digit]
                const posStr = positionUnits[pos]
                partStr += `${digitStr}${posStr}`
            }
        })

        result += `${partStr}${unit} `
    })

    return result.trim() + ' 원'
}

export const getRandomComment = (valueChangeRate) => {
    const randomNumber = Math.floor(Math.random() * 4)
    const posComment = [
        '역시 쓸 땐 제대로 쓰시는군요 🙌',
        '오늘 소비, 100점! 👏',
        '이건 소비가 아니라 당신 위한 투자 🔥',
        '이 정도면 소비 천재신데요? 절약왕 인정~',
    ]
    const negComment = [
        '오늘은 좀 과했네요... 내일은 아껴봅시다!',
        '한 번쯤은 그럴 수도 있지만 자주 그러면 파산이예요..',
        '이런 소비가 자주 쌓이면... 김스냅님 통장이 텅장? 🙈',
        '지금 당신에게 필요한 건 ‘결제’가 아니라 ‘결단’!',
    ]
    if (valueChangeRate > 0) {
        return posComment[randomNumber]
    } else if (valueChangeRate < 0) {
        return negComment[randomNumber]
    } else {
        return '등락율의 변화가 없어요.'
    }
}
