# makefile
temperature.o : temperature.cc temperature.h
	g++ -std=c++17 -Wall -c temperature.cc

driver.o : driver.cc temperature.h
	g++ -std=c++17 -Wall -c driver.cc

forecast.o : forecast.cc forecast.h temperature.h
	g++ -std=c++17 -Wall -c forecast.cc

driver : driver.o temperature.o forecast.o
	g++ -std=c++17 -Wall driver.o temperature.o forecast.o
	./a.out

clean : 
	rm a.out *.o

