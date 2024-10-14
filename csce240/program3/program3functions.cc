// Copyright 2024 bcalford
#include"program3functions.h"
#include<iostream>
using std::cin;
using std::cout;
using std::endl;

double CountAboveAv(const double aboveArray[][nCols], int rows) {
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

void SortByCol(double colArray[][nCols], int rows, int sortCol, bool ascending) {
  bool running = false;
  do {
    running = false;
    for( int i = 0; i < rows-1; i++ ) {
      if( colArray[i][sortCol] > colArray[i + 1][sortCol] && ascending ) {
        running = true;
        for( int j = 0; j < nCols; j++ ) {
          double temp = colArray[i][j];
          colArray[i][j] = colArray[i + 1][j];
          colArray[i + 1][j] = temp;
        }
      }
      if( colArray[i][sortCol] < colArray[i + 1][sortCol] && !ascending ) {
        running = true;
        for( int j = 0; j < nCols; j++ ) {
          double temp = colArray[i][j];
          colArray[i][j] = colArray[i + 1][j];
          colArray[i + 1][j] = temp;
        }
      }
    }
  } while(running);
}

void SortByRow(double colArray[][nCols], int rows, int sortRow, bool ascending) {
  bool running = false;
  do {
    running = false;
    for( int i = 0; i < nCols-1; i++ ) {
      if( colArray[sortRow][i] > colArray[sortRow][i + 1] && ascending ) {
        running = true;
        for( int j = 0; j < rows; j++ ) {
          double temp = colArray[j][i];
          colArray[j][i] = colArray[j][i + 1];
          colArray[j][i + 1] = temp;
        }
      }
      if( colArray[sortRow][i] < colArray[sortRow][i + 1] && !ascending ) {
        running = true;
        for( int j = 0; j < rows; j++ ) {
          double temp = colArray[j][i];
          colArray[j][i] = colArray[j][i + 1];
          colArray[j][i + 1] = temp;
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
    running = false;
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
    return examArray[(rows/2)+1];
  }
}

int ModeInCol(double colArray[][nCols], int rows, int examCol, double returnArray[]) {
  double sortedCol[rows+1];
  double originalY[2];
  originalY[0] = returnArray[0];
  originalY[1] = returnArray[1];
  int numOfModes = 0;
  bool moreThan2 = false;
  for( int i = 0; i < rows; i++ ) {
    sortedCol[i] = colArray[i][examCol];
  }
  sortedCol[rows] = -1;
  bool running = false;
  do {
    running = false;
    for(int i = 0; i < rows-1; i++) {
      if(sortedCol[i] > sortedCol[i+1]) {
        running = true;
        double temp = sortedCol[i];
        sortedCol[i] = sortedCol[i+1];
        sortedCol[i+1] = temp;
      }
    }
  } while(running);
  double current = sortedCol[0];
  int count = 1;
  int max = 1;
  for( int i = 1; i < rows+1; i++ ) {
    if(sortedCol[i] == current) {
      count++;
    } else {
      if(count > max) {
        max = count;
        returnArray[0] = current;
        returnArray[1] = originalY[1];
        numOfModes = 1;
        moreThan2 = false;
      } else if(count == max) {
        if(returnArray[0] == originalY[0]) {
          returnArray[0] = current;
          moreThan2 = false;
          numOfModes = 1;
        } else if(returnArray[1] == originalY[1]) {
          returnArray[1] = current;
          moreThan2= false;
          numOfModes = 2;
        } else {
          moreThan2 = true;
          numOfModes = 0;
        }
      }
      count = 1;
    }
    current = sortedCol[i];
  }
  if(moreThan2) {
    returnArray[0] = originalY[0];
    returnArray[1] = originalY[1];
  }
  return numOfModes;
}