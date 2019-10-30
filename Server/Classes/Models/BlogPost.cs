using System;
namespace Backend.Models
{
    public class BlogPost
    {
        public int Id { get; set; }
        public string BlogTitle { get; set; }
        public string WrittenOn { get; set; }
        public string BlogContent { get; set; }
        public string[] Categories { get; set; }
    }
}
