using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using mvc.Models;
using System.Net.Http;
using System.Web.Http;

namespace mvc.Controllers {
    public class EmployeesController : ApiController {

        [HttpGet]
        public HttpResponseMessage Get(DataSourceLoadOptions loadOptions) {
            return Request.CreateResponse(DataSourceLoader.Load(SampleData.Employees, loadOptions));
        }

    }
}