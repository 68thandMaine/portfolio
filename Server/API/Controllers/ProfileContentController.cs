using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Repository;
using Backend.Models;
using Backend;

namespace API.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class ProfileContentController : ControllerBase
    {
        private readonly RepositoryContext db;
        public ProfileContentController(RepositoryContext db)
        {
            this.db = db;
        }
        // GET api/values
        [HttpGet]
        public static List<ProfileContent> Index()
        {
            ProfileContentRepository repo = new ProfileContentRepository(db);
            return repo.GetProfileContent();
        }

        // // GET api/values/5
        // [HttpGet("{id}")]
        // public ActionResult<string> Get(int id)
        // {
        //     return "value";
        // }

        // // POST api/values
        // [HttpPost]
        // public void Post([FromBody] string value)
        // {
        // }

        // // PUT api/values/5
        // [HttpPut("{id}")]
        // public void Put(int id, [FromBody] string value)
        // {
        // }

        // // DELETE api/values/5
        // [HttpDelete("{id}")]
        // public void Delete(int id)
        // {
        // }
    }
}
