public class InMemoryProductRepository : IProductRepository
{
    private List<Product> _products;
    
    public InMemoryProductRepository()
    {
        _products = new List<Product>{
            new Product {
                ID = 1,
                ProductName = "cola",
                Price = 1.00m,
                ProductCount = 2,
                ExactChangeRequired = true,
            },
            new Product {
                ID = 2,
                ProductName = "crisps",
                Price = 0.50m,
                ProductCount = 2,
                ExactChangeRequired = false,
            },
            new Product {
                ID = 3,
                ProductName = "chocolate",
                Price = 0.65m,
                ProductCount = 1,
                ExactChangeRequired = false,
            },

        };
    }

    public void DispenseProduct(int Id)
    {
        var product = _products.Where(x => x.ID == Id).FirstOrDefault();
        if (product != null)
        {
            product.ProductCount--;
        }
    }

    public IEnumerable<ProductDto> GetProducts()
    {
        return _products
               .Select(x => new ProductDto(x.ID, x.ProductName, x.Price, x.ProductCount <= 0, x.ExactChangeRequired ))
               .ToArray();
    }
}