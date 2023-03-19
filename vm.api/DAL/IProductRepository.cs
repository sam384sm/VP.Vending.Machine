public interface IProductRepository 
{
    IEnumerable<ProductDto> GetProducts();

    void DispenseProduct(int Id);
}