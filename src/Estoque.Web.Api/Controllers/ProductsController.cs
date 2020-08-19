using System.Threading.Tasks;
using Estoque.Web.Api.Core.Domain.Entities;
using Estoque.Web.Api.Infra;
using Microsoft.AspNetCore.Mvc;

namespace Estoque.Web.Api
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly IProductRepository _productRepository;

        public ProductsController(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<ActionResult<Product>> Get(int id)
        {
            var product = await _productRepository.Get(id);
            return Ok(product);
        }

        [HttpPost]
        public async Task<ActionResult> Insert(Product entity)
        {
            await _productRepository.Insert(entity);
            return Ok(entity);
        }
        
        [HttpPut("{id}")]
        public async Task<ActionResult<Product>> Update(int id, Product data)
        {
            await _productRepository.Update(data);            
            return Ok(data);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            await _productRepository.Delete(id);
            return Ok();
        }

        [HttpGet]
        public async Task<ActionResult<Product>> GetAll()
        {
            var products = await _productRepository.GetAll();
            return Ok(products);
        }
    }
}