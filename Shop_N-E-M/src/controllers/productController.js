import Products from '../models/productModel.js'

export const getProductPage = async (req, res) => {
    try {
        const products = await Products.find(); // Lấy tất cả sản phẩm từ cơ sở dữ liệu
        res.render('pages/product', {
            title: "Product",
            products // Truyền dữ liệu sản phẩm đến view
        });
    } catch (err) {
        res.status(500).send(err.message); // Xử lý lỗi
    }
};

export const getProductDetail = async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await Products.findById(productId);
        if (!product) {
            return res.status(404).render('404', { title: 'Product Not Found' });
        }
        res.render('pages/Productdetail', { title: product.name, product });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};