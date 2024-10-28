// Copyright 2024 bhipp
// define a Forecast class that has Temperature objects as data members
#ifndef FORECAST_H_
#define FORECAST_H_

#include<iostream>
using std::ostream;
#include"temperature.h"

class Forecast {
  friend ostream& operator << (ostream&, const Forecast&);

 public:
  Forecast();

  Temperature GetLow() const { return low_; }
  Temperature GetHigh() const { return high_; }
  double GetRainChance() const { return rain_chance_; }

  // if the argument <= high, we set low_ to the argument,
  // if not, we set low_ to high_ and set high_ to the argument
  Forecast& SetLow(const Temperature& low);
  Forecast& SetHigh(const Temperature& high);
  Forecast& SetRainChance(double r);

 private:
  Temperature low_;
  Temperature high_;
  double rain_chance_;
};

#endif
