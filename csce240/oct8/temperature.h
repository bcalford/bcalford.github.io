// Copyright 2024 bhipp
// define a Temperature class
#ifndef TEMPERATURE_H_
#define TEMPERATURE_H_

#include<string>
using std::string;
#include<iostream>
using std::cout;
using std::ostream;

class Temperature {
  // operators can only be members if their left or only operand is an object
  // of that class type. <<'s left operand is not a temperature, so we'll make
  // it a friend
  friend ostream& operator << (ostream& whereto, const Temperature&);

 public:
  // constructor - NO return type, same name as class, called to set up an
  //               object
  // default constructor = constructor that can be called with 0 arguments
  // we'll mark any constructor that can be called with exactly one operand
  // as explicit to ensure that the constructor isn't called to implicitly
  // cast a value of that one argument type to an object
  explicit Temperature(double value = 70, string units = "Fahrenheit");

  // destructor - called when memory for an object is released
  //              no return type, name ~Class, no parameters
  // automatically called on objects declared
  // ~Temperature() { cout << "destructor called for "; Print(); }

  // const member functions don't modify the private data members for the
  // object it's called on
  void Print() const;

  // accessor / get functions return a copy of the value of a private
  //                          data member
  double GetValue() const { return value_; }
  string GetUnits() const { return units_; }

  string ToString() const;
  // mutator / set functions allow object to update the value of a private
  //                         data member
  // if the argument is invalid, leave the object unchanged, return
  // whether or not the data member was changed
  bool SetValue(double value);
  // the SetUnits function will return a reference to the object it's called
  // on, allowing for t.SetUnits("Celsius").Print();
  Temperature& SetUnits(string units);

  // function to convert an existing object from its current units to another
  void Convert(string new_units);

  static void SetDisplaySymbol(bool symbol);

  // overload the < operator
  // it can be a member of our class because its left operand will be a
  // Temperature object
  bool operator < (const Temperature& right) const;


  // Google Style Guide: public, protected, private, indent 1 space
 private:
  // static applies to the entire class
  static bool display_symbol_;

  // Google Style Guide: members indented the regular 2 spaces
  double value_;  // Google Style Guide: name private data members with
                  // trailing underscore
  string units_;  // composition = using objects of one class as data
                  //               members in another class
                  // units_ is an object of the string class
};

#endif
