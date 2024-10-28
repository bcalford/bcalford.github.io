// Copyright 2024 bcalford
#include"height.h"
#include<iostream>
using std::cout;
using std::cin;
using std::endl;
#include<string>
using std::string;


Height::Height(double value, string units) {
  SetValue(value);
  SetUnits(units);
}

ostream& operator << (ostream& whereto, const Height& right) {
  whereto << right.value_ << " " << right.units_;
  return whereto;
}

string Height::ToString() const {
  return std::to_string(value_) + units_;
}

void Height::Print() const {
  cout << value_ << units_ << endl;
}

bool Height::SetValue(double value) {
  if (value >= 0) {
    value_ = value;
  }
  return value_ == value;
}

bool Height::SetUnits(string units) {
  if (units == "inches" || units == "feet" || units == "centimeters" || units == "meters")
    units_ = units;
  return units_ == units;
}

bool Height::ConvertUnits(string units) {
  // Convert the current units to inches as a base.
  if (units_ == "feet") {
    value_ = value_ * 12;
    units_ = "inches";
  } else if (units_ == "centimeters") {
    value_ = value_ * 0.3937007874;
    units_ = "inches";
  } else if (units_ == "meters") {
    value_ = value_ * 39.3700787402;
    units_ = "inches";
  }

  // Converts the now inches unit to whatever unit of measurement was provided.
  if (units == "feet") {
    value_ = value_ / 12;
    units_ = "feet";
  } else if (units == "centimeters") {
    value_ = value_ / 0.3937007874;
    units_ = "centimeters";
  } else if (units == "meters") {
    value_ = value_ / 39.3700787402;
    units_ = "meters";
  }
  return units_ == units;
}