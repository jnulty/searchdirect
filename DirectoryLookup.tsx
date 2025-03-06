import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

const directory = [
  { name: "Adam Statham", phone: "3253", email: "astatham@boylesports.com", role: "Retail Security Supervisor", department: "Security" },
  { name: "Jamie Floyd", phone: "3103", email: "jfloyd@boylesports.com", role: "Retail Security Supervisor", department: "Security" },
  { name: "Rebecca Bowden", phone: "3046", email: "rbowden@boylesports.com", role: "QA & Training Officer", department: "Security" },
  { name: "Tracy Caul", phone: "3174", email: "tcaul@boylesports.com", role: "Retail Security Supervisor", department: "Security" },
  { name: "Karl Krol", phone: "3089", email: "kkrol@boylesports.com", role: "Digital Security Supervisor", department: "Security" },
  { name: "Andrew Noonan", phone: "3187", email: "anoonan@boylesports.com", role: "Retail Auditor", department: "Security" },
  { name: "Avril Rhatigan", phone: "3365", email: "arhatigan@boylesports.com", role: "Risk Auditor", department: "Security" },
  { name: "Barry Pierce", phone: "1184", email: "bpierce@boylesports.com", role: "Retail Auditor", department: "Security" },
  { name: "Caroline O'Brien", phone: "3094", email: "cobrien@boylesports.com", role: "Retail Auditor", department: "Security" },
  { name: "Claire Taylor", phone: "3098", email: "ctaylor@boylesports.com", role: "Retail Auditor", department: "Security" },
  { name: "Damien O'Shea", phone: "3356", email: "doshea@boylesports.com", role: "Retail Auditor", department: "Security" },
  { name: "Iwona Rogulska", phone: "3019", email: "irogulska@boylesports.com", role: "Retail Auditor", department: "Security" },
  { name: "Josh Nulty", phone: "3371", email: "jnulty@boylesports.com", role: "Retail Auditor", department: "Security" },
  { name: "Liam Salisbury", phone: "3189", email: "lsalisbury@boylesports.com", role: "Retail Auditor", department: "Security" },
  { name: "Lisa Martin", phone: "3372", email: "lmartin@boylesports.com", role: "Retail Auditor", department: "Security" },
  { name: "Mary McDonnell", phone: "3026", email: "mmcdonnell@boylesports.com", role: "Risk Auditor", department: "Security" },
  { name: "Paul Crosby", phone: "3042", email: "pcrosby@boylesports.com", role: "Risk Auditor", department: "Security" },
  { name: "Samantha Collier", phone: "3096", email: "scollier@boylesports.com", role: "Retail Auditor", department: "Security" },
  { name: "Conor Gunning", phone: "3177", email: "cgunning@boylesports.com", role: "Digital Auditor", department: "Security" },
  { name: "Deane Gill", phone: "3186", email: "dgill@boylesports.com", role: "Digital Auditor", department: "Security" },
  { name: "Nick Bradley", phone: "3183", email: "nbradley@boylesports.com", role: "Digital Auditor", department: "Security" },
  { name: "Tommy Galvin", phone: "3088", email: "tgalvin@boylesports.com", role: "Digital Auditor", department: "Security" },
  { name: "Adam Mills", email: "amills@boylesports.com", role: "Digital Auditor", department: "Security" },
  { name: "Paul Conachy", email: "pconachy@boylesports.com", role: "Audit Manager", department: "Security" },
  { name: "Sheelagh Marry", email: "smarry@boylesports.com", role: "Risk Manager", department: "Security" },
  { name: "Mark Hesketh", email: "mhesketh@boylesports.com", role: "Head of Security", department: "Security" },
  { name: "Mandy Jordan", email: "mjordan@boylesports.com", role: "Field Auditor", department: "Security" },
  { name: "Sandra Brown", email: "sbrown@boylesports.com", role: "Field Auditor", department: "Security" },
  { name: "Security", phone: "3277", email: "security@boylesports.com", role: "Shop security queries, SSBT/Machine queries, Safes, Ambiguous customers", department: "Security" },
  { name: "Payroll", phone: "3153", email: "payroll@boylesports.com", role: "Payroll-related queries", department: "Payroll" },
  { name: "Finance", phone: "3154", email: "treasury@boylesports.com", role: "Float/Customer cheque clearance, Bank transfers", department: "Finance" },
  { name: "Treasury", phone: "3154", email: "treasury@boylesports.com", role: "Float/Customer cheque clearance, Bank transfers", department: "Finance" },
  { name: "Marketing", phone: "3158", email: "retailmarketing@boylesports.com", role: "Internal marketing, Poster queries", department: "Marketing" },
  { name: "BoyleXtra", phone: "Unavailable", email: "xtra@boylesports.com", role: "BoyleXtra", department: "BoyleXtra" },
  { name: "HR", phone: "3150", email: "hr@boylesports.com", role: "All HR related queries", department: "People" },
  { name: "People", phone: "3150", email: "hr@boylesports.com", role: "All HR related queries", department: "People" },
  { name: "Night Team", phone: "3002", role: "Boylesports Night Team", department: "Trading" },
  { name: "Withdrawals", phone: "3169", role: "Customer account withdrawals", department: "Customer Service" },
  { name: "BAC", phone: "3160", email: "bac@boylesports.com", role: "Permission to lay, Bet queries", department: "Trading" }
];

export default function DirectoryLookup() {
  const [search, setSearch] = useState("");
  const filteredPeople = search ? directory.filter((p) => p.name.toLowerCase().includes(search.toLowerCase())) : [];

  return (
    <div className="p-4 max-w-md mx-auto">
      <Input 
        placeholder="Enter name..." 
        value={search} 
        onChange={(e) => setSearch(e.target.value)} 
        className="mb-4" 
      />
      {filteredPeople.map((person) => (
        <Card key={person.name} className="mb-2">
          <CardContent className="p-4">
            <p><strong>Name:</strong> {person.name}</p>
            <p><strong>Phone:</strong> {person.phone}</p>
            <p><strong>Email:</strong> {person.email}</p>
            <p><strong>Role:</strong> {person.role}</p>
            <p><strong>Department:</strong> {person.department}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}