// Copyright 2024 bcalford
#include"heightrange.h"
#include<iostream>
using std::cout;
using std::cin;
using std::endl;
#include<string>
using std::string;

HeightRange::HeightRange() : shortest_(0, "feet"), tallest_(0, "feet") {}

HeightRange::HeightRange(const Height& height1, const Height& height2) {
  Height height1copy = height1;
  Height height2copy = height2;
  height1copy.ConvertUnits("inches");
  height2copy.ConvertUnits("inches");
  if(height1copy.GetValue() > height2copy.GetValue()) {
    shortest_ = height2;
    tallest_ = height1;
  } else {
    shortest_ = height1; 
    tallest_ = height2;  
  }
}

HeightRange& HeightRange::SetShortest(const Height& shortest) {
  if(shortest.GetValue() < shortest_.GetValue()) {
    shortest_ = shortest;
  }
  return *this;
}

HeightRange& HeightRange::SetTallest(const Height& tallest) {
  if(tallest.GetValue() > tallest_.GetValue()) {
    tallest_ = tallest;
  }
  return *this;
}

bool HeightRange::InRange(const Height& checkHeight, bool endpoints) {
  Height checkHeightCopy = checkHeight;
  Height shortestCopy = shortest_;
  Height tallestCopy = tallest_;
  checkHeightCopy.ConvertUnits("inches");
  shortestCopy.ConvertUnits("inches");
  tallestCopy.ConvertUnits("inches");
  double checkValue = checkHeightCopy.GetValue();
  double shortestValue = shortestCopy.GetValue();
  double tallestValue = tallestCopy.GetValue();
  if(endpoints) {
    if(checkValue <= tallestValue && checkValue >= shortestValue) {
      return true;
    }
  } else {
    if(checkValue < tallestValue && checkValue > shortestValue) {
      return true;
    }
  }
  return false;
}

Height HeightRange::Width() {
  Height shortestCopy = shortest_;
  shortestCopy.ConvertUnits(tallest_.GetUnits());
  double difference = tallest_.GetValue() - shortestCopy.GetValue();
  return Height(difference, tallest_.GetUnits());
}
