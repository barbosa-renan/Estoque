using Estoque.Web.Api.Core.Domain.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Estoque.Web.Api.Infra
{
    public interface IProductRepository
    {
        Task<Product> Get(int id);
        Task Insert(Product entity);
        Task Update(Product entity);
        Task Delete(int id);
        Task<IEnumerable<Product>> GetAll();
    }
}