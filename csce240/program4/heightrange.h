// Copyright 2024 bcalford
#ifndef HEIGHT_RANGE_H_
#define HEIGHT_RANGE_H_
#include"height.h"
#include<iostream>
using std::cout;
using std::cin;
using std::endl;
#include<string>
using std::string;

class HeightRange {
 public:
  HeightRange();
  HeightRange(const Height& shortest_, const Height& tallest_);
  HeightRange& SetShortest(const Height& shortest);
  Height GetShortest() const { return shortest_; }
  HeightRange& SetTallest(const Height& tallest);
  Height GetTallest() const {return tallest_; }
  bool InRange(const Height& checkHeight, bool endpoints = true);
  Height Width();
 private:
  Height shortest_;
  Height tallest_;
};

#endif