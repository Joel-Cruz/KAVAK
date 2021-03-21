using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.Models
{
   public class Cars
   {
      [Key]
      public int Id { get; set; }

      [Required]
      public string Name { get; set; }

      [Required]
      public string Model { get; set; }

      [Required]
      public string Brand { get; set; }

      [Required]
      public int Year { get; set; }

      [Required]
      public string Type { get; set; }

      [Required]
      public int Mileage { get; set; }

      [Required]
      [Column(TypeName = "decimal(18,4)")]
      public decimal Price { get; set; }

      [Required]
      public string City { get; set; }
   }
}
