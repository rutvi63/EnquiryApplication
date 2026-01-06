using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Enquiry.API.Model
{
    [Table("Enquiry")]
    public class EnquiryModel
    {
     
        public int enquiryId { get; set; }
        public int enquiryTypeId { get; set; }

        public int enquiryStatusId { get; set; }

        public string customerName { get; set; }

        public string mobileNo { get; set; }

        public string email { get; set; }

        public string message { get; set; }

        public DateTime createdDate { get; set; }

        public string resolution { get; set; }
    }
}
