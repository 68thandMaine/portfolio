using System;
using System.IO.Compression;

namespace Backend.Models
{
    public class PhotographyProject
    {
        public int Id { get; set; }
        public string PhotoName { get; set; }
        public string ImgURL { get; set; }
        public string Description { get; set; }
        public string CreatedAt { get; set; }
        public string Category { get; set; }
    }
}
