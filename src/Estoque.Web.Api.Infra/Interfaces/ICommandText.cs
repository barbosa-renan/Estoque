namespace Estoque.Web.Api.Infra.Interfaces
{
    public interface ICommandText
    {
        string Get { get; }
        string Insert { get; }
        string Update { get; }
        string Delete { get; }
        string GetAll { get; }
    }
}
