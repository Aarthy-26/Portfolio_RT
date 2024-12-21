using Microsoft.AspNetCore.Mvc;
using Portfolio.API.Models;

[ApiController]
[Route("api/[controller]")]
public class ProjectsController : ControllerBase
{
    [HttpGet]
    public IActionResult GetProjects()
    {
        var projects = new List<Project>
        {
            new Project { Id = 1, Title = "Portfolio Website", Description = "A React portfolio project" },
            new Project { Id = 2, Title = "E-commerce App", Description = "A full-stack e-commerce platform" }
        };

        return Ok(projects);
    }
}
