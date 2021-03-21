using back_end.Common;
using back_end.Models;
using back_end.Response;
using back_end.Tools;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace back_end.Services
{
   public class UserService : IUserService
   {
      private readonly AppSettings _appSettings;

      public UserService(IOptions<AppSettings> appSettings)
      {
         _appSettings = appSettings.Value;
      }
      public UserResponse Auth(Users model)
      {
         var contextOpttions = new ApplicationDbContext(new DbContextOptionsBuilder<ApplicationDbContext>().UseSqlServer(@"Data Source = DESKTOP - V7D0MEI; Database = KavakDB; Integrated Security = true").Options);
         UserResponse userresponse = new UserResponse();

         using (var db = contextOpttions)
         {
            string spassword = Encrypt.GetSHA256(model.Password);

            var usuario = db.Users.Where(d => d.Email == model.Email &&
                                         d.Password == spassword).FirstOrDefault();

            if (usuario == null) return null;

            userresponse.Email = usuario.Email;
            userresponse.Token = GetToken(model);
            userresponse.Role = usuario.Role;

         }
         return userresponse;
      }


      private string GetToken(Users model)
      {
         var tokenHandler = new JwtSecurityTokenHandler();

         var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
         var tokenDescriptor = new SecurityTokenDescriptor
         {
            Subject = new System.Security.Claims.ClaimsIdentity(
               new Claim[]
               {
                  new Claim(ClaimTypes.NameIdentifier , model.Id.ToString()),
                  new Claim(ClaimTypes.Email , model.Email),
               }
               ),
            Expires = DateTime.UtcNow.AddDays(60),
            SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)

         };
         var token = tokenHandler.CreateToken(tokenDescriptor);
         return tokenHandler.WriteToken(token);
      }
   }
}
