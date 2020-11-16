using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace TextPatternSearch.Tools
{
    public static class SearchPattern
    {
        public static int CalculateSumSimilarities(string text) {
            if (!IsValidString(text))            
                return -1;
            
            
            int length = text.Count();
            char[] letters = text.ToArray();
            int sum = 0;
            for (int i = 0; i < length; i++)
            {
                for (int j = i; j < length; j++)
                {                    
                    if (letters[j - i] == letters[j])                    
                        sum++;                    
                    else                      
                        break;
                }
            }
            return sum;
        }

        private static bool IsValidString(string text)
        {
            //validate that string is composed only of letters
            System.Text.RegularExpressions.Regex rx = new Regex(@"^[a-z]+$");
            if (String.IsNullOrWhiteSpace(text))
                return false;
            if (text.Count() > 100000)
                return false;
            if (!rx.IsMatch(text))
                return false;
            return true;
        }
    }
}
