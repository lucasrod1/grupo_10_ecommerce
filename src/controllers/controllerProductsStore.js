module.exports = {
    men: (req, res) => {
        res.send("Hombre")
    },
    woman: (req, res) => {
        res.send("Woman")
    },
    unisex: (req, res) => {
        res.send("Unisex")
    },
    kids: (req, res) => {
        res.send("Niños")
    }
}