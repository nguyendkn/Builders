using Builders.APIs.EndPoints.DatabaseEndpoints;
using Builders.Domain;
using Builders.Shared;
using DotnetExtensions.NET;
using MinimalAPIs.NET;

var builder = WebApplication.CreateBuilder(args);
var services = builder.Services;
var environment = builder.Environment;
services.SetupEnvs<AppSettings>(environment, out var appSettings);
var defaultConnection = appSettings.ConnectionStrings.DefaultConnection;
services.AddSqlServer<BuildersContext>(defaultConnection);

var app = builder.Build();

app.APIPost<CreateDatabaseRequest>("/database/create");
app.APIPost<AlterColumnDatabaseRequest>("/database/alter");

app.Run();