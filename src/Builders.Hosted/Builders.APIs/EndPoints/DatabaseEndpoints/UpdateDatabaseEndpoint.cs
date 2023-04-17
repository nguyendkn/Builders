using MediatR;
using MinimalAPIs.NET;

namespace Builders.APIs.EndPoints.DatabaseEndpoints;

public abstract record UpdateDatabaseRequest(Guid Id, string Name) : IMinimalAPI;

public class UpdateDatabaseEndpoint : IRequestHandler<UpdateDatabaseRequest, IResult>
{
    public Task<IResult> Handle(UpdateDatabaseRequest request, CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }
}