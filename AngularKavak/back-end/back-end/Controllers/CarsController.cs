using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using back_end;
using back_end.Models;
using Microsoft.AspNetCore.Authorization;

namespace back_end.Controllers
{
   [Route("api/[controller]")]
   [ApiController]
   [Authorize]
   public class CarsController : Controller
   {
      private readonly ApplicationDbContext _context;

      public CarsController(ApplicationDbContext context)
      {
         _context = context;
      }

      //GET: api/cars
      [HttpGet]
      public async Task<IActionResult> Get()
      {
         try
         {
            var listCars = await _context.Cars.ToListAsync();
            return Ok(listCars);
         }
         catch (Exception ex)
         {
            return BadRequest(ex.Message);
               
         }

      }

      //GET: api/cars/5
      [HttpGet("{id}")]
      public async Task<IActionResult> Get(int id)
      {
         try
         {
            var Car = await _context.Cars.FindAsync(id);
            if(Car != null)
            {
               return Ok(Car);
            }          
            return NotFound();
         }
         catch (Exception ex)
         {
            return BadRequest(ex.Message);

         }

      }


      //POST: api/cars
      [HttpPost]
      public async Task<IActionResult> Post([FromBody] Cars car)
      {
         try
         {
            _context.Add(car);
            await _context.SaveChangesAsync();
            return Ok(car);

         }
         catch (Exception ex)
         {
            return BadRequest(ex.Message);
               
         }

      }

      //PUT: api/cars/5
      [HttpPut("{id}")]
      public async Task<IActionResult> Put(int id, [FromBody] Cars car)
      {
         try
         {
            if(id != car.Id)
            {
               return NotFound();
            }

            _context.Update(car);
            await _context.SaveChangesAsync();
            return Ok(new { message = "Car updated" });

         }
         catch (Exception ex)
         {
            return BadRequest(ex.Message);

         }

      }


      //DELETE: api/cars/5
      [HttpDelete("{id}")]
      public async Task<IActionResult> Delete(int id)
      {
         try
         {
            var car = await _context.Cars.FindAsync(id);

            if(car == null)
            {
               return NotFound();
            }
            _context.Cars.Remove(car);
            await _context.SaveChangesAsync();
            return Ok(new { message = "Car deleted" });

         }
         catch (Exception ex)
         {
            return BadRequest(ex.Message);

         }

      }


   }
}
