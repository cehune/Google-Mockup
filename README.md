# Google Mockup



This is a Google Clone React project, fit with a search function and the ability to see the main results, related news, videos, and images. It is semi-responsive, and has both dark and light mode settings. There is no manual search. Rather, the application automatically switches search topics after a period of time using debounce. 

This is also a guided project by JavaScript Mastery. I modified it based on the React Router update to V6, and the updates to the Google API. 

Home Page, Default search set as "fishing"
![image](https://user-images.githubusercontent.com/71574223/174509880-0d1ec96c-6bf5-47d2-ac9b-b9ba033b2c81.png)

Images Section on Dark Mode
![image](https://user-images.githubusercontent.com/71574223/174509940-4670027a-08da-4b22-a911-b4640faec39c.png)

News Section
![image](https://user-images.githubusercontent.com/71574223/174510142-093c0583-fc89-4928-9fdb-205574d36033.png)

Video Section
![image](https://user-images.githubusercontent.com/71574223/174510290-de5434e8-f2ea-4fee-b817-7b317a76a2db.png)

I specifically used React, State Management, React Router, React Context, the Google API, and various smaller packages. 

It is limited in the inability to press a button to finish and input the search. With it automatically refreshing, it means the page will sometimes load before you finish typing your search. There is also a loading phase as the application requests information, though the application seems to have difficulty changing the request midway if you switch the input during this loading phase. 


