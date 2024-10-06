// Copyright 2024 bcalford
#include"program3functions.h"
#include<iostream>
using std::cin;
using std::cout;
using std::endl;

double countAboveAv(const double aboveArray[][nCols], int rows) {
  double total = 0;
  int cells = 0;
  for( int i = 0; i < rows; ++i ) {
    for( int j = 0; j < nCols; ++j ) {
      total += aboveArray[i][j];
      ++cells;
    }
  }
  double average = total / cells;
  int numAbove = 0;
  for( int i = 0; i < rows; ++i ) {
    for( int j = 0; j < nCols; ++j ) {
      if( aboveArray[i][j] > average ) {
        ++numAbove;
      }
    }
  }
  return numAbove;
}

void sortByCol(double colArray[][nCols], int rows, int sortCol, bool ascending) {
  bool running = false;
  do {
    for( int i = 0; i < rows; ++i ) {
      if( colArray[i][sortCol] > colArray[i + 1][sortCol] && ascending ) {
        for( int j = 0; j < nCols; ++j ) {
          running = true;
          double temp = colArray[i][j];
          colArray[i][j] = colArray[i + 1][j];
          colArray[i + 1][j] = temp;
        }
      }
      if( colArray[i][sortCol] < colArray[i + 1][sortCol] && !ascending ) {
        for( int j = 0; j < nCols; ++j ) {
          running = true;
          double temp = colArray[i][j];
          colArray[i][j] = colArray[i + 1][j];
          colArray[i + 1][j] = temp;
        }
      }
    }
  } while(running);
}

void sortByRow(double colArray[][nCols], int rows, int sortRow, bool ascending) {
  bool running = false;
  do {
    for( int i = 0; i < nCols; ++i ) {
      if( colArray[sortRow][i] > colArray[sortRow][i + 1] && ascending ) {
        for( int j = 0; j < rows; ++j ) {
          running = true;
          double temp = colArray[i][j];
          colArray[i][j] = colArray[i][j + 1];
          colArray[i][j + 1] = temp;
        }
      }
      if( colArray[sortRow][i] < colArray[sortRow][i + 1] && !ascending ) {
        for( int j = 0; j < rows; ++j ) {
          running = true;
          double temp = colArray[i][j];
          colArray[i][j] = colArray[i][j + 1];
          colArray[i][j + 1] = temp;
        }
      }
    }
  } while(running);
}

double MedianInCol(double colArray[][nCols], int rows, int examCol) {
  double examArray[rows];
  for( int i = 0; i < rows; ++i ) {
    examArray[i] = colArray[i][examCol];
  }
  bool running = false;
  do {
    for( int i = 0; i < rows; ++i ) {
      if( examArray[i] > examArray[i + 1] ) {
        running = true;
        double temp = examArray[i];
        examArray[i] = examArray[i + 1];
        examArray[i + 1] = temp;
      }
    }
  } while(running);
  if( rows % 2 == 0 ) {
    return (examArray[rows/2] + examArray[(rows/2)+1])/2;
  } else {
    return examArray[rows/2];
  }
}