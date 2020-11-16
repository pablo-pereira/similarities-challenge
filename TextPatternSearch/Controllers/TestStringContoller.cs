using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TextPatternSearch.Tools;

namespace TextPatternSearch.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TestStringController : ControllerBase
    {
        [HttpPost]
        public IEnumerable<int> Post([FromBody] string[] stringsToTest)
        {
            int[] results = new int [stringsToTest.Length];
            int i = 0;
            foreach (string text in stringsToTest)
            {
                results.SetValue(SearchPattern.CalculateSumSimilarities(text), i);
                i++;
            }
            return results;
        }
    }
}
