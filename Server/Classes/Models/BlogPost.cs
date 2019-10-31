using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models
{
    public class BlogPost
    {
        [Key]
        public int Id { get; set; }
        [Required(ErrorMessage="Blog title is required.")]
        public string BlogTitle { get; set; }
        public string WrittenOn { get; set;}
        [Required(ErrorMessage="Blog content is required.")]
        public string BlogContent { get; set; }
        public string[] Categories { get; set; }
    }
}
