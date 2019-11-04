using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace gayflix3.Gayflix2DB
{
    public class Gayflix2DBFetchError : Exception
    {
        public Gayflix2DBFetchError(string message, Exception innerExeption)
        {
            //skriv felmeddelande
        }
    }
}