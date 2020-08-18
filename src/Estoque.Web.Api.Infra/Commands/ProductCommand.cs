using Estoque.Web.Api.Infra.Interfaces;

namespace Estoque.Web.Api.Infra.Commands
{
    public class ProductCommand : ICommandText
    {
        public string Get => "P_Product_Get";
        public string Insert => "P_Product_Insert";
        public string Update => "P_Product_Update";
        public string Delete => "P_Product_Delete";
        public string GetAll => "P_Product_GetAll";
    }
}
