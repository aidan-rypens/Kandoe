﻿using System;
using System.Collections.Generic;

namespace Models.Models.Cards
{
    public interface ICard
    {
        string CardId { get; set; }
        string ImageUrl { get; set; }
        string Text { get; set; }
        string ThemeId { get; set; }
        DateTime UpdatedOn { get; set; }
        DateTime CreatedOn { get; set; }
        bool IsEnabled { get; set; }
        ICollection<Reaction> Reactions { get; set;}
    }
}