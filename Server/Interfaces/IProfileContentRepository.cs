using System;
using System.Collections.Generic;
using Backend.Models;

namespace Interfaces
{
  public interface IProfileContentRepository
  {
    List<ProfileContent> GetProfileContent();
    ProfileContent GetContentById(int id);

    void CreateProfile(ProfileContent profileContent);
    void UpdateProfile(ProfileContent profileContent);

  }
}