using back_end.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace back_end
{
   public partial class ApplicationDbContext : DbContext
   {
      protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
      {
         optionsBuilder.UseSqlServer("Data Source=DESKTOP-V7D0MEI;Database=KavakDB;Integrated Security=true");
      }


      public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options): base(options)
      {

      }

      public DbSet<Cars> Cars { get; set; }

      public DbSet<Users> Users { get; set; }

   }
}
