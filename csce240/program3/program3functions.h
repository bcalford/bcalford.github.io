// Copyright 2024 bcalford

const int nCols = 10;
double countAboveAv(const double aboveArray[][nCols], int rows);

void sortByCol(double colArray[][nCols], int rows, int sortCol, bool ascending);

void sortByRow(double colArray[][nCols], int rows, int sortRow, bool ascending);

double MedianInCol(double colArray[][nCols], int rows, int examCol);