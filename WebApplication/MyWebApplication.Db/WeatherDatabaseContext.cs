using Microsoft.EntityFrameworkCore;

namespace MyWebApplication.Db;

public class WeatherDatabaseContext : DbContext
{
    public WeatherDatabaseContext(DbContextOptions options) : base(options)
    {
    }

    public WeatherDatabaseContext()
    {
    }

    public virtual DbSet<WeatherForecast> WeatherForecasts { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        base.OnConfiguring(optionsBuilder);

        optionsBuilder.UseSqlServer("Server=tcp:hintrm-sqlserver.database.windows.net,1433;Initial Catalog=Hintrm-sql;Persist Security Info=False;User ID=hintrm;Password=Easytorem123!;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");
    }
}
