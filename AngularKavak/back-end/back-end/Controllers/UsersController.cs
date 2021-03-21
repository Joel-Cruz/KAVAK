using back_end.Models;
using back_end.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.Controllers
{
   [Route("api/[controller]")]
   [ApiController]
   public class UsersController : Controller
   {
      private IUserService _userService ;
      private readonly ApplicationDbContext _context;


      [HttpPost("login")]
      public IActionResult Authentication([FromBody] Users model)
      {
         var userresponse = _userService.Auth(model);
         if(userresponse == null)
         {
            return BadRequest("User or password incorrect");
         }
            
         return Ok(userresponse);
      }

      [HttpPost]
      public async Task<IActionResult> CreateUser([FromBody] Users model)
      {
         try
         {
            _context.Add(model);
            await _context.SaveChangesAsync();
            return Ok(model);

         }
         catch (Exception ex)
         {
            return BadRequest(ex.Message);

         }
      }

      public UsersController(IUserService userService, ApplicationDbContext context)
      {
         _userService = userService;
         _context = context;
      }
   }
}
