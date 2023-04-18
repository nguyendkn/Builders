namespace Builders.Domain.AggregateModels.WorkflowAggregate;

public class Workflow
{
    public string Name { get; set; } = default!;

    public List<WorkflowStep> Steps { get; set; } = default!;
}