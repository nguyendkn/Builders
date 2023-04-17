using SQLServer.NET;

namespace Builders.Shared;

public class AppSettings
{
    public SQLServerConfig ConnectionStrings { get; set; } = default!;
}