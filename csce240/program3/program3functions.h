// Copyright 2024 bcalford

const int nCols = 10;
double CountAboveAv(const double aboveArray[][nCols], int rows);

void SortByCol(double colArray[][nCols], int rows, int sortCol, bool ascending);

void SortByRow(double colArray[][nCols], int rows, int sortRow, bool ascending);

double MedianInCol(double colArray[][nCols], int rows, int examCol);

int ModeInCol(double colArray[][nCols], int rows, int examCol, double returnArray[]);