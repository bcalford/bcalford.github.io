compiler = g++
options = -Wall -std=c++17
compile = $(compiler) $(options) -c
link = $(compiler) $(options)

assign2.o : assign2.cc assign2.h
	$(compile) $<

driver.o : driver.cc assign2.h
	$(compile) $<

driver : driver.o assign2.o
	$(link) $^ -o $@
	./$@

clean :
	rm *.o driver

