// Copyright 2024 bhipp
// Implement the Temperature class' member functions
#include"temperature.h"
#include<iostream>
using std::cout;
using std::endl;
#include<string>
using std::string;

// static data members are initialized on the class
bool Temperature::display_symbol_ = false;

// don't put static on the function implementation outside of the class def
void Temperature::SetDisplaySymbol(bool symb) {
  display_symbol_ = symb;
  // static functions can only access static members (can't access non-static
  // members)
}

ostream& operator << (ostream& whereto, const Temperature& right) {
  whereto << right.value_;
  if ( Temperature::display_symbol_ )
    whereto << "\u00B0 " << right.units_[0];
  else
    whereto << " degrees " << right.units_;
  return whereto;
}



void Temperature::Convert(string new_units) {
  if ( units_ == new_units || (new_units != "Celsius" &&
                               new_units != "Fahrenheit" &&
                               new_units != "Kelvin") )
    return;
  if ( units_ == "Celsius" ) {
    if ( new_units == "Fahrenheit" ) {
      value_ = 9 / 5.0 * (value_) + 32;
    } else {
      value_ += 273.15;
    }
  } else if ( units_ == "Kelvin" ) {
    if ( new_units == "Fahrenheit" ) {
      value_ = 9 / 5.0 * (value_ - 273.15) + 32;
    } else {
      value_ -= 273.15;
    }
  } else {
    if ( new_units == "Celsius" ) {
      value_ = 5 / 9.0 * (value_ - 32);
    } else {
      value_ = 5 / 9.0 * (value_ - 32) + 273.15;
    }
  }
  units_ = new_units;
}

bool Temperature::operator <(const Temperature& right) const {
  Temperature left_copy = *this;
  left_copy.Convert(right.units_);
  return left_copy.value_ < right.value_;
}

string Temperature::ToString() const {
  return std::to_string(value_) + " degrees "  + units_;
}

Temperature& Temperature::SetUnits(string units) {
  if ( units == "Fahrenheit" || units == "Celsius" || units == "Kelvin" )
    units_ = units;
//  return units_ == units;
  return *this;
}

// at the moment we're not restricting value_, but if we decide to in the
// future, having this function created for the modification will allow
// code using our class not to break (not to have to use a different method
// of updating the value)
bool Temperature::SetValue(double value) {
  value_ = value;
  return value_ == value;
}

// when implementing a member function outside of the class definition,
// must tie the function to the class with the scope resolution operator
Temperature::Temperature(double value, string units) {
  value_ = 70;
  units_ = "Fahrenheit";
  SetValue(value);
  SetUnits(units);
}

void Temperature::Print() const {
  cout << value_;
  if ( display_symbol_ )
    cout << "\u00B0 " << units_[0] << endl;
  else
    cout << " degrees " << units_ << endl;
}




