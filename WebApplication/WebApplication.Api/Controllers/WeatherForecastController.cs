using Microsoft.AspNetCore.Mvc;
using MyWebApplication.Db;

namespace WebApplication.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController(WeatherDatabaseContext db) : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };


        [HttpGet(Name = "GetWeatherForecast")]
        public IEnumerable<WeatherForecast> Get()
        {
            return db.WeatherForecasts
                .Select(x => new WeatherForecast() { Date = x.Date, Summary = x.Summary, TemperatureC = x.TemperatureC})
                .ToList();
        }
    }
}
