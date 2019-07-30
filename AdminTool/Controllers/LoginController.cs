using AdminTool.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web;
using System.Web.Mvc;

namespace AdminTool.Controllers
{
    public class LoginController : Controller
    {
        // GET: Login
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult doLogin(LoginViewModel _user)
        {
            LoginViewModel test = new LoginViewModel
            {
                Username = "kuxidaica",
                Password = "chiphoi0901"
            };
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri("http://localhost:3433//KdcTest/api/account");
                var postTask = client.PostAsJsonAsync<LoginViewModel>("http://localhost:3433/api/account/loginbyusername", test);
                postTask.Wait();

                var result = postTask.Result;
                return RedirectToAction("Index", "Admin");
            }
        }
    }
}