//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace gayflix3.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class booking
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public booking()
        {
            this.ticket = new HashSet<ticket>();
        }
    
        public int id { get; set; }
        public int userid { get; set; }
        public int viewingid { get; set; }
        public bool payed { get; set; }
        public System.DateTime created { get; set; }
    
        public virtual users users { get; set; }
        public virtual viewing viewing { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<ticket> ticket { get; set; }
    }
}
