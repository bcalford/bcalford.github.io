// Copyright 2024 bhipp
#include<iostream>
using std::cout;
using std::endl;
#include"temperature.h"

bool IsFreezing(Temperature t) {
  if ( t.GetValue() == 0 && t.GetUnits() == "Celsius" )
    return true;
  if ( t.GetValue() == 32 && t.GetUnits() == "Fahrenheit" )
    return true;
  if ( t.GetValue() == 273.15 && t.GetUnits() == "Kelvin" )
    return true;
  return false;
}

int main() {
  Temperature t;
  t.SetValue(84);
  t.SetUnits("flowers");
  t.Print();
  const Temperature kBoiling(100, "Celsius");
  kBoiling.Print();
  cout << "Boiling = " << kBoiling.ToString() << endl;
  cout << (IsFreezing(Temperature(18.1)) ? "brrrrr" : "not freezing") << endl;
  return 0;
}

