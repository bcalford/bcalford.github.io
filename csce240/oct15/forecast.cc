// Copyright 2024 bhipp
// implementations of the functions promised in forecast.h
#include"forecast.h"
#include<iostream>
using std::ostream;

ostream& operator << (ostream& whereto, const Forecast& f) {
  whereto << "low = " << f.low_ << "\nhigh = " << f.high_
          << "\nchance of precipitation = " << f.rain_chance_ << "%";
  return whereto;
}

Forecast& Forecast::SetLow(const Temperature& arg_low) {
  if ( high_ < arg_low ) {
    low_ = high_;
    high_ = arg_low;
  } else {
    low_ = arg_low;
  }
  return *this;
}

Forecast& Forecast::SetHigh(const Temperature& arg_high) {
  if ( arg_high < low_ ) {
    high_ = low_;
    low_ = arg_high;
  } else {
    high_ = arg_high;
  }
  return *this;
}

Forecast& Forecast::SetRainChance(double r) {
  if ( r >= 0 && r <= 100 )
    rain_chance_ = r;
  return *this;
}



// member initializer list = comma-separated list between constructor's
//                           parameter list and body with data members and
//                           initial values - chance to call constructors
//                           on data members
Forecast::Forecast() : low_(50, "Fahrenheit"), high_(75, "Fahrenheit"),
                       rain_chance_(0) {
//  rain_chance_ = 0;
}






