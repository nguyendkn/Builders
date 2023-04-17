using MediatR;
using MinimalAPIs.NET;

namespace Builders.APIs.EndPoints.DatabaseEndpoints;

public abstract record CreateDatabaseRequest(string Name) : IMinimalAPI;

public abstract class CreateDatabaseEndpoint : IRequestHandler<CreateDatabaseRequest, IResult>
{
    public Task<IResult> Handle(CreateDatabaseRequest request, CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }
}