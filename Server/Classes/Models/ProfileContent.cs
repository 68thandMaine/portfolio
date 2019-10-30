using System;

namespace Backend.Models
{
    public class ProfileContent
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public long Resume { get; set; }
        public string Bio { get; set; }
        public string[] PageContent { get; set; }
    }
}