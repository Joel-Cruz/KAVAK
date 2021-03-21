using back_end.Common;
using back_end.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace back_end
{
   public class Startup
   {
      public Startup(IConfiguration configuration)
      {
         Configuration = configuration;
      }

      public IConfiguration Configuration { get; }

      // This method gets called by the runtime. Use this method to add services to the container.
      public void ConfigureServices(IServiceCollection services)
      {
         services.AddCors(options =>
         {
            options.AddDefaultPolicy(builder =>
            {
               builder.WithOrigins("http://localhost:4200").AllowAnyMethod().AllowAnyHeader();
            });
         });
         services.AddDbContext<ApplicationDbContext>(options =>
                              options.UseSqlServer(Configuration.GetConnectionString("ConnectionString")));

         services.AddControllers();

         var appSettingsSection = Configuration.GetSection("AppSettings");
         services.Configure<AppSettings>(appSettingsSection);

         var appSettings = appSettingsSection.Get<AppSettings>();
         var key = Encoding.ASCII.GetBytes(appSettings.Secret);

         services.AddAuthentication(d =>
         {
            d.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
            d.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
         })
            .AddJwtBearer(d =>
            {
               d.RequireHttpsMetadata = false;
               d.SaveToken = true;
               d.TokenValidationParameters = new Microsoft.IdentityModel.Tokens.TokenValidationParameters
               {
                  ValidateIssuerSigningKey = true,
                  IssuerSigningKey = new SymmetricSecurityKey(key),
                  ValidateIssuer = false,
                  ValidateAudience = false
               };
            });



         services.AddSwaggerGen(c =>
         {
            c.SwaggerDoc("v1", new OpenApiInfo { Title = "back_end", Version = "v1" });
         });

         services.AddScoped<IUserService, UserService>();

     
      }

      // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
      public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
      {
         if (env.IsDevelopment())
         {
            app.UseDeveloperExceptionPage();
            app.UseSwagger();
            app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "back_end v1"));
         }

         app.UseHttpsRedirection();

         app.UseRouting();

         app.UseCors();

         app.UseAuthentication();

         app.UseAuthorization();

         app.UseEndpoints(endpoints =>
         {
            endpoints.MapControllers();
         });
      }
   }
}
