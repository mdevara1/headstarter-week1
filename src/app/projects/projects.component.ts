import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects = [
    { title: 'Project 1', description: `In this project, I developed a comprehensive web application 
      for managing project details, phases, and tasks using React and Bootstrap. 
      The application includes functionalities to add, edit, and remove phases, 
      tasks, and resources. Key features include dynamic forms for inputting project information, 
      a modal for managing resources with validation, and the ability to save and display projects. 
      The application uses state management to track changes and ensure data integrity, 
      with all project details stored locally and validated before submission. 
      The UI is designed to be user-friendly, providing a clear and interactive interface 
      for project management. This project highlights my skills in React, state management, and responsive design, 
      as well as my ability to implement complex user interfaces and validation logic.`, image: 'assets/pms.png' },
      
    { title: 'Project 2', description: 'Preprocessed and augmented image data using Tensorflow Keras to improve model performance. Implemented transfer learning with DenseNet201 model architecture for feature extraction. Attained a training accuracy of 90% on a dataset comprising over 20,000 images covering 4 types of tumors', image: 'assets/prediction.jpg' },

    { title: 'Project 3', description: `In this project, I developed a secure client-server communication system using Python's socket and ssl libraries, 
      incorporating AES and RSA encryption for enhanced security. The system features a user registration process where IDs are validated and passwords are hashed 
      using MD5 before storage. For secure data transmission, SSL/TLS is utilized with mutual authentication through certificates. AES is employed for symmetric encryption of data, 
      while RSA is used for asymmetric key exchange and encryption. This setup ensures encrypted communication between the 
      server and clients, demonstrating robust implementation of encryption 
      standards and secure handling of sensitive information.`, image: 'assets/security.webp' },



    { title: 'Project 4', description: `Performed exploratory data analysis and compared various machine learning regression algorithms to predict flight fares based
on the historical data, departure city, arrival city, departure time, arrival time, airline, duration, number of stops, etc. achieving
accuracy around 75%. 
`, image: 'assets/flight.png' },



    { title: 'Project 5', description: `Implemented a complete spreadsheet functionality using Typescript/Javascript, MongoDB, web services and React JS as part of my cirriculum
`, image: 'assets/spreadsheet.png' }
  ];

  ngOnInit() {
    const projectContainers = document.querySelectorAll('.project-container');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    });

    projectContainers.forEach(container => {
      observer.observe(container);
    });
  }
}
