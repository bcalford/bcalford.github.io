// Copyright 2024 bcalford
#ifndef HEIGHT_H_
#define HEIGHT_H_
#include<iostream>
using std::cout;
using std::cin;
using std::endl;
#include<string>
using std::string;
using std::ostream;

class Height {
  friend ostream& operator << (ostream& whereto, const Height&);
 public:
  explicit Height(double value_ = 0, string units_ = "feet");
  string ToString() const;
  void Print() const;

  bool SetValue(double value);
  double GetValue() const { return value_; }

  bool SetUnits(string units);
  string GetUnits() const { return units_; }
  
  bool ConvertUnits(string units);

 private:
  double value_;
  string units_;
};

#endif