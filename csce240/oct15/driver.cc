// Copyright 2024 bhipp
#include<iostream>
using std::cout;
using std::endl;
#include"temperature.h"
#include"forecast.h"

int main() {
  Forecast today;
  cout << today << endl;
  today.SetLow(Temperature(60));
  cout << today << endl;
  today.SetLow(Temperature(70)).SetHigh(Temperature(87)).SetRainChance(30);
  cout << today << endl;
  return 0;
}



/*
int main() {
  Temperature t;
  cout << "t = " << t << endl;
  cout << "++t = " << ++t << endl;
  cout << "t = " << t << endl;
  cout << "t++ = " << t++ << endl;
  cout << "t = " << t << endl;
  return 0;
}
*/



/*
int main() {
  Temperature t, t2(100, "Celsius");
  t.Print();
  t2.Print();
  Temperature::SetDisplaySymbol(true);
  t.Print();
  t2.Print();
  t2.SetUnits("Fahrenheit").Print();

  if ( t < t2 )
    cout << t << " is less than " << t2 << endl;
  return 0;
}
*/


/*
double Average(double x) {
  static double sum = 0;
  static int count = 0;
  sum += x;
  ++count;
  return sum / count;
}

int main() {
  cout << Average(10) << endl;
  cout << Average(13) << endl;
  return 0;
}
*/


/*
int main() {
  Temperature t(212);
  t.Print();
  t.Convert("Celsius");
  t.Print();
  t.Convert("Kelvin");
  t.Print();
  t.Convert("Fahrenheit");
  t.Print();
  t.Convert("Kelvin");
  t.Print();
  t.Convert("Celsius");
  t.Print();
  t.Convert("Fahrenheit");
  t.Print();
  return 0;
}
*/



/*
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
*/
