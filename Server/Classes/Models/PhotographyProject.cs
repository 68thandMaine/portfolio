using System;
using System.IO.Compression;
using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
    public class PhotographyProject
    {
        [Key]
        public int Id { get; set; }
        public string PhotoName { get; set; }
        [Required(ErrorMessage = "Image url is required.")]
        public string ImgURL { get; set; }
        public string Description { get; set; }
        public string CreatedAt { get; set; }
        public string Category { get; set; }
    }
}
