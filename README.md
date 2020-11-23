# Super Galatic Age Calculator

#### **01/13/20**

## By _Callie Stump_
---
## **Description**
This webpage allows the user to enter their birthday. After submission the program calculates different ages for the user if they were to be living on other planets. Additionally, it displays life expetency.

## **Setup**
1. Copy this download link: https://github.com/calliestump/Friday5
2. Create a project directory where you would like to store your cloned project.
3. Using bash/termianl, navigate to the cloned project folder.
```
$ cd Desktop
$ cd [known directory]
```
4. Clone the repo.
```
git clone "https://github.com/calliestump/Friday5"
```
5. Open your cloned project with VS code:
```
. code
```
#### Dont forget that in order to push any changes you need to add your own GitHub repo. to your project.
```
git remote add origin [repo. link]
```
Now that the cloned project is ready for your own personal use, we can install Node.
```
npm install
```
## **Technologies Used**
* HTML
* CSS
* javaScript
* Node
* Webpack
* GIT
* GitHub
* .JSON

## **Specs**
```
let testDay = new Calculator(2001,10,1);

let testAgeSurpassed = new Calculator(1940,3,3);
```
**Age Conversion Tests**
```
Describe: Calculator(year, month, day)
Test: creates an object that holds information for dates.
Expect Calculator().toEqual(true);
```
```
Describe: earthAge()
Test: calculates user age in earth years.
Expect earthAge(testDay).toEqual(19);
```
```
Describe: mercuryAge()
Test: calculates user age in mercury years.
Expect mercuryAge(testDay).toEqual(79);
```
```
Describe: venusAge()
Test: calculates user age in venus years.
Expect venusAge(testDay).toEqual(31);
```
```
Describe: marsAge()
Test: calculates user age in mars years.
Expect marsAge(testDay).toEqual(10);
```
```
Describe: jupiterAge()
Test: calculates user age in jupiter years.
Expect jupiterAge(testDay).toEqual(2);
```
**Years Left Tests**
```
Describe: earthYearsLeft()
Test: calculates user age in jupiter years.
Expect earthYearsLeft(testDay).toEqual(61);
```
```
Describe: mercuryYearsLeft()
Test: calculates user age in mercury years.
Expect mercuryYearsLeft(testDay).toEqual(1);
```
```
Describe: venusYearsLeft()
Test: calculates user age in venus years.
Expect venusYearsLeft(testDay).toEqual(49);
```
```
Describe: marsYearsLeft()
Test: calculates user age in mars years.
Expect marsYearsLeft(testDay).toEqual(70);
```
```
Describe: jupiterYearsLeft()
Test: calculates user age in jupiter years.
Expect jupiterYearsLeft(testDay).toEqual(78);
```
**Years Surpassed Tests**
```
Describe: earthAgeSurpassed()
Test: calculates surpassed age for earth.
Expect jupiter(testDay).toEqual(81);
```
```
Describe: mercuryAgeSurpassed()
Test: calculates surpassed age for mercury.
Expect mercury(testDay).toEqual(366);
```
## Legal
Copyright (c) 2020 Callie Stump