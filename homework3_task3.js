/*
Homework 3 - JavaScript Fundamentals
COMP420 - Spring 2017
Task 3 - solutions

J. Wangsadinata
*/

var student = {
  name: {
    first_name: "Jason",
    last_name: "Wangsadinata"
  },
  wesID: 278628,
  class_year: 2017,
  email: "jwangsadinat@wesleyan.edu",
  majors: ["Computer Science", "Mathematics"]
};

var jason = student;

// You should get the same values since there is only one object, with two references.

var instructor = [
  { name: {
      first_name: "Jason",
      last_name: "Wangsadinata"
    },
    wesID: 278628,
    class_year: 2017,
    email: "jwangsadinat@wesleyan.edu",
    majors: ["Computer Science", "Mathematics"]
  },
  { name: {
      first_name: "Duong",
      last_name: "Vu"
    },
    wesID: 330909,
    class_year: 2018,
    email: "tvunguyen@wesleyan.edu",
    majors: ["Computer Science", "Art Studio"]

  }];