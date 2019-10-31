using System;
using System.ComponentModel.DataAnnotations;
using System.Runtime.CompilerServices;

namespace Backend.Models
{
    public class WebProject
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "The project name field is required.")]
        public string ProjectName { get; set; }

        [Required(ErrorMessage = "A descriptoin is required.")]
        public string Description { get; set; }

        public bool Live { get; set; }
        public string URL { get; set; }
        public string[] ToolsAndTechnology { get; set; }
        public string GitHubRepoURL { get; set; }
        public string[] ImageURL { get; set; }
    }
}
