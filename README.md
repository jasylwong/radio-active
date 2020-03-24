# Code review 2

Band pass filter method

-----------


## Input | Output
unfiltered_soundwave -> filtered_soundwave
Array -> Array

Completed
---------
band_pass_filter([45], 30, 50) -> [45]
band_pass_filter([25], 30, 50) -> [30]
band_pass_filter([55], 30, 50) -> [50]

band_pass_filter([60], 55, 80) -> [60]
band_pass_filter([45], 55, 80) -> [55]
band_pass_filter([85], 55, 80) -> [80]

band_pass_filter([20,36], 25, 55) -> [25, 36]

To be completed
---------



band_pass_filter([35,36], 25, 55) -> [35, 36]
band_pass_filter([35,65], 25, 55) -> [35, 55]


band_pass_filter([35,36, ], 30, 50) -> [35, 36, 50]
band_pass_filter([35,36, 55], 30, 50) -> [35, 36, 50]
band_pass_filter([35,36, 55], 30, 50) -> [35, 36, 50]

