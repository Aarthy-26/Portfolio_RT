using Microsoft.AspNetCore.Cors;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        policy.WithOrigins("http://localhost:3000") // Allow frontend only
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

builder.Services.AddControllers();
var app = builder.Build();

// Enable CORS with the specified policy
app.UseCors("AllowFrontend");

// Comment this line for local testing to allow HTTP requests
// app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

// Add a test endpoint to confirm backend is working
app.MapGet("/test", () => "Backend is working!");

try
{
    app.Run();
}
catch (Exception ex)
{
    Console.WriteLine($"Application error: {ex.Message}");
    throw;
}
