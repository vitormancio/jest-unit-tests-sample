exports.sum = (a, b) => {
    return a + b
}

exports.deleteUserId = (array, id) => {
    return array.filter(user => user.id !== id)
}

exports.findUserById = (array,id) => {
    return array.find((obj) => obj.id === id)
}