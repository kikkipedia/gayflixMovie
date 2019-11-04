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
    public class viewings1Controller : ApiController
    {
        private gayflix2_dbEntities db = new gayflix2_dbEntities();

        // GET: api/viewings1
        public IQueryable<viewing> Getviewing()
        {
            return db.viewing;
        }

        // GET: api/viewings1/5
        [ResponseType(typeof(viewing))]
        public IHttpActionResult Getviewing(int id)
        {
            viewing viewing = db.viewing.Find(id);
            if (viewing == null)
            {
                return NotFound();
            }

            return Ok(viewing);
        }

        // PUT: api/viewings1/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Putviewing(int id, viewing viewing)
        {
            viewing visning = db.viewing.Find(id);

            visning.bookable = !visning.bookable;


            db.Entry(visning).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!viewingExists(id))
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

        // POST: api/viewings1
        [ResponseType(typeof(viewing))]
        public IHttpActionResult Postviewing(viewing viewing)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.viewing.Add(viewing);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = viewing.id }, viewing);
        }

        // DELETE: api/viewings1/5
        [ResponseType(typeof(viewing))]
        public IHttpActionResult Deleteviewing(int id)
        {
            viewing viewing = db.viewing.Find(id);
            if (viewing == null)
            {
                return NotFound();
            }

            db.viewing.Remove(viewing);
            db.SaveChanges();

            return Ok(viewing);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool viewingExists(int id)
        {
            return db.viewing.Count(e => e.id == id) > 0;
        }
    }
}