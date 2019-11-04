using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using gayflix3.Models;

namespace gayflix3.Controllers
{
    public class bookingsController : ApiController
    {
        private gayflix2_dbEntities db = new gayflix2_dbEntities();

        // GET: api/bookings
        public IQueryable<booking> Getbooking()
        {
            return db.booking;
        }

        // GET: api/bookings/5
        [ResponseType(typeof(booking))]
        public IHttpActionResult Getbooking(int id)
        {
            booking booking = db.booking.Find(id);
            if (booking == null)
            {
                return NotFound();
            }

            return Ok(booking);
        }

        // PUT: api/bookings/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Putbooking(int id, booking booking)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != booking.id)
            {
                return BadRequest();
            }

            db.Entry(booking).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!bookingExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/bookings
        [ResponseType(typeof(booking))]
        public IHttpActionResult Postbooking(booking booking)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.booking.Add(booking);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = booking.id }, booking);
        }

        // DELETE: api/bookings/5
        [ResponseType(typeof(booking))]
        public IHttpActionResult Deletebooking(int id)
        {
            booking booking = db.booking.Find(id);
            if (booking == null)
            {
                return NotFound();
            }

            db.booking.Remove(booking);
            db.SaveChanges();

            return Ok(booking);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool bookingExists(int id)
        {
            return db.booking.Count(e => e.id == id) > 0;
        }
    }
}