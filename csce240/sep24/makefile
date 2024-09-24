arrayfunctions.o : arrayfunctions.cc arrayfunctions.h
	g++ -Wall -std=c++17 -c arrayfunctions.cc

driver.o :: driver.cc arrayfunctions.h
	g++ -Wall -std=c++17 -c driver.cc

driver: arrayfunctions.o driver.o
	g++ -Wall -std=c++17 -c arrayfunctions.o driver.o -o driver
	./driver