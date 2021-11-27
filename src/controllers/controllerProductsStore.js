module.exports = {
    men: (req, res) => {
        res.render('../views/productsStore/men.ejs')
    },
    woman: (req, res) => {
        res.render('../views/productsStore/woman.ejs')
    },
    unisex: (req, res) => {
        res.render('../views/productsStore/unisex.ejs')
    },
    accessories: (req, res) => {
        res.render('../views/productsStore/accessories.ejs')
    }
}