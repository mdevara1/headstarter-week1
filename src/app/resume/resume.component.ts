import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {

  resumeItems = [
    { title: 'State University of New York, Binghamton', duration: 'Jan 2023 - Dec 2024', description: `Master of Science in Computer Science,
Cumulative GPA: 3.73/4.00 ` },
    { title: 'Jawaharlal Nehru Technological University, Hyderabad', duration: 'Aug 2016 - Jun 2020', description: `Bachelor of Technology in Computer Science,
Cumulative GPA: 3.85/4.00 
` },
    { title: 'Senecaglobal It Services Pvt Ltd', duration: 'Nov 2020 - July 2022', description: `● Human Resource Management System:
▪ Designed and developed user interfaces using AngularJS best practices.
▪ Created full-fledged webpages using JavaScript, CSS, Bootstrap, and HTML.
▪ Software coded in Python and used Flask Framework for the backend, Developing REST API for UX integrations.
▪ Coordinated with development teams to determine application requirements. Reprogrammed existing databases to improve
functionality. Collaborated closely with Design and Testing team members and learnt how to develop robust solutions to
meet client requirements for functionality, scalability, and performance.
● JD Edwards CNC Administrator, Client - Treehousefoods
▪ Managed and administered JD Edwards EnterpriseOne (JDE E1) environments, including installation, configuration, and
maintenance of JDE software components and systems.
▪ Provided technical support, training, and documentation to end-users and IT staff on JDE E1 functionality, best practices, and
troubleshooting procedures. ` },
    { title: 'Graduate Grader Assistant', duration: 'Aug 2023 - Dec 2023', description: `Binghamton University, Programming for the Web Grader Assistant | Binghamton,
 Assisted in Building the coursework, curriculum, and subject material for a class of 42 graduate and undergraduate students.
 Facilitated Project demos, Proctored exams, Graded assignments and helped students with their coursework. ` },
  ];

}
