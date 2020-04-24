# Code review 2
What does great process look like? https://github.com/makersacademy/skills-workshops/blob/master/process_review/observation_guidance.md

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

https://blog.cleancoder.com/uncle-bob/2014/12/17/TheCyclesOfTDD.html 
https://www.youtube.com/watch?v=B93QezwTQpI 
https://kata-log.rocks/tdd 

Feedback: https://docs.google.com/feeds/download/documents/export/Export?id=1pVgW-wO5ZvtQ_Nax39SPcK3zWBSvcuksofWMLWrFfgU&exportFormat=pdf

Screen recording: https://www.youtube.com/watch?v=MWi1OaEnx8A
