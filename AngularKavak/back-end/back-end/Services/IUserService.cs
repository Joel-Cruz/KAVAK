using back_end.Models;
using back_end.Response;
using back_end.Tools;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.Services
{
   public interface IUserService
   {
      UserResponse Auth(Users model);
   }
}
