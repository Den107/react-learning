class Async {
    static print(data) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (data) resolve(data)
                else reject(new Error('Error'))
            }, 100)
        })
    }
}

module.exports = Async