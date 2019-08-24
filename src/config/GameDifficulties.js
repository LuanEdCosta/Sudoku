export const difficulties = {
    EASY: 0,
    MEDIUM: 1,
    HARD: 2,
    VERY_HARD: 3,
}

export const getDifficultyArray = () => {
    const difficultyArray = []

    Object.keys(difficulties).map((key) => {
        difficultyArray.push({
            name: key.split('_').join(' ').toLowerCase(),
            value: difficulties[key]
        })
    })

    return difficultyArray
}

export const getDifficultyByValue = value => {
    const filteredArray = getDifficultyArray().filter(d => d.value === value)
    return filteredArray[0]
}

export default difficulties