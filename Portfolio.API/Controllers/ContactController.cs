using Microsoft.AspNetCore.Mvc;
using Portfolio.API.Models;

[ApiController]
[Route("api/[controller]")]
public class ContactController : ControllerBase
{
    [HttpPost]
    public IActionResult SendMessage([FromBody] Contact contact)
    {
        if (contact == null)
            return BadRequest(new { message = "Invalid data" });

        return Ok(new { message = "Message sent successfully" });
    }
}
