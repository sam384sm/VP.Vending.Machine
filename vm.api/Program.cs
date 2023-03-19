var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors();
builder.Services.AddSingleton<IProductRepository, InMemoryProductRepository>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors(p => p.WithOrigins("http://localhost:3000").AllowAnyHeader().AllowAnyMethod());
app.MapGet("/GetProducts", (IProductRepository repoo) =>
{
    return repoo.GetProducts();
})
.WithName("GetProducts");

app.MapPost("/DispenseProduct", (int productId, IProductRepository repo) => {
    repo.DispenseProduct(productId);
});

app.UseHttpsRedirection();

app.Run();
