using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BTL_Nhom11.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult ProductList()
        {
            return View();
        }
        public ActionResult ProductDetail()
        {
            return View();
        }
        public ActionResult Card()
        {
            return View();
        }
        public ActionResult Order()
        {
            return View();
        }
        public ActionResult DetailOrder()
        {
            return View();
        }
        public ActionResult Account()
        {
            return View();
        }
        public ActionResult ChangePass()
        {
            return View();
        }
        public ActionResult EditAccount()
        {
            return View();
        }
    }
}