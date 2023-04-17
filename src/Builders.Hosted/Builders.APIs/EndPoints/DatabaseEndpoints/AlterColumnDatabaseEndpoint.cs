using MediatR;
using MinimalAPIs.NET;

namespace Builders.APIs.EndPoints.DatabaseEndpoints;

public abstract record AlterColumnDatabaseRequest(string Name, string DataType) : IMinimalAPI;

public class AlterColumnDatabaseEndpoint : IRequestHandler<AlterColumnDatabaseRequest, IResult>
{
    public Task<IResult> Handle(AlterColumnDatabaseRequest request, CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }
}