﻿using System;
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
using gayflix3.Gayflix2DB;
using System.Web.Http.Cors;

namespace gayflix3.Controllers
{
    // [EnableCors(origins: "http://localhost:3000/", headers: "*", methods: "*")]
    public class viewingsController : ApiController
    {
        
        private gayflix2_dbEntities db = new gayflix2_dbEntities();

        // API URL POST http://localhost:52662//api/viewings
        // XXXXX - Port number
        // Desc: Returns a list of Viewing View Models, a.k.a a list of shows that will be displayed as a list of movies to be shown
        public List<ViewingViewModel> GetViewings()
        {
            var listOfViewings = db.viewing.Include(v => v.lounge).OrderBy(v => v.date); // Get viewings plus the laoung and sort them in date order
            var listOfMovies = new List<ViewingViewModel>(); // Define the return structure

            foreach (var viewing in listOfViewings) // For each movie in the viewings table (plus lounge information)
            {
                var movie = MovieFetcher.GetMovie(viewing.moviedbid); // Make a fetch to Movie DB to get information about a movie

                // To the return list, add a View Model and add the information from both the Viewing, Lounge and MovieDB into a single object
                listOfMovies.Add(new ViewingViewModel
                {
                    MovieName = movie.Title, // Title for the Movie from the MovieDB
                    Length = movie.Runtime ?? 0, // The runtime from MovieDB
                    Adult = movie.Adult, // If it's a adult movie, from MovieDB
                    LoungeName = viewing.lounge.name, // The lounge name from Lounge entity in the database (contected using Entity Framework)
                    ViewingDate = viewing.date, // Date of the viewing from the Viewing entity in the database
                    TotalSeats = viewing.lounge.seat.Count(), // And number of seats in the Lounge
                    PosterPath = movie.PosterPath,
                    Overview = movie.Overview,
                    Bookable = viewing.bookable
                });
            }

            return listOfMovies; // Return the list of Movies
        }

       
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

        // PUT: api/viewings/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Putviewing(int id, viewing viewing)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != viewing.id)
            {
                return BadRequest();
            }

            db.Entry(viewing).State = EntityState.Modified;

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

        // POST: api/viewings
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

        // DELETE: api/viewings/5
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