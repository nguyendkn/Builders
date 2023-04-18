using Builders.Domain.AggregateModels.WorkflowAggregate;
using Microsoft.EntityFrameworkCore;

namespace Builders.Domain;

public class BuildersContext : DbContext
{
    public BuildersContext(DbContextOptions<BuildersContext> options) : base(options)
    {
    }

    public DbSet<Workflow> Workflows { get; set; } = default!;

    public DbSet<WorkflowStep> WorkflowSteps { get; set; } = default!;
}