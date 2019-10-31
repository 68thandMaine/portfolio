using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models
{
    public class ProfileContent
    {
        [Key]
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public long Resume { get; set; }
        public string Bio { get; set; }
        [Required(ErrorMessage = "Page content is required.")]
        public string[] PageContent { get; set; }
    }
}