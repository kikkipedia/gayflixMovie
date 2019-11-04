using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using gayflix3.Models;

namespace gayflix3.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "Home Page";

            return View();
        }

        public ActionResult LoggedOnUser()
        {
            UserModel model = new UserModel
            {
                UserName = "Pelle",
                EmailAddress = "pelle@pelle.com",
                CreatedDate = DateTime.Now
            };

            return View(model);
        }
    }
}
