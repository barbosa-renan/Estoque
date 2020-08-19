using Dapper;
using Estoque.Web.Api.Core.Domain.Entities;
using Estoque.Web.Api.Infra.Interfaces;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using System.Data;
using System.Threading.Tasks;

namespace Estoque.Web.Api.Infra
{
    public class ProductRepository : BaseRepository, IProductRepository
    {
        private readonly ICommandText _command;

        public ProductRepository(IConfiguration configuration, ICommandText command) : base(configuration)
        {
            _command = command;
        }
        
        public async Task<Product> Get(int id)
        {
            return await WithConnection(async conn =>
            {
                var parameters = new DynamicParameters();
                parameters.Add("@Id", id);

                var query = await conn.QueryFirstOrDefaultAsync<Product>(_command.Get, parameters, commandType: CommandType.StoredProcedure);
                return query;
            });
        }

        public async Task Insert(Product entity)
        {
            await WithConnection(async conn =>
            {
                var parameters = new DynamicParameters();
                parameters.Add("@Name", entity.Name);
                parameters.Add("@UnitPrice", entity.UnitPrice);
                parameters.Add("@Amount", entity.Amount);

                await conn.ExecuteAsync(_command.Insert, parameters, commandType: CommandType.StoredProcedure);
            });
        }

        public async Task Update(Product entity)
        {
            await WithConnection(async conn =>
            {
                var parameters = new DynamicParameters();
                parameters.Add("@Id", entity.Id);
                parameters.Add("@Name", entity.Name);
                parameters.Add("@UnitPrice", entity.UnitPrice);
                parameters.Add("@Amount", entity.Amount);

                await conn.ExecuteAsync(_command.Update, parameters, commandType: CommandType.StoredProcedure);
            });
        }

        public async Task Delete(int id)
        {
            await WithConnection(async conn =>
            {
                var parameters = new DynamicParameters();
                parameters.Add("@Id", id);

                await conn.ExecuteAsync(_command.Delete, parameters, commandType: CommandType.StoredProcedure);
            });
        }

        public async Task<IEnumerable<Product>> GetAll()
        {
            return await WithConnection(async conn =>
            {
                var query = await conn.QueryAsync<Product>(_command.GetAll, commandType: CommandType.StoredProcedure);
                return query;
            });
        }
    }
}