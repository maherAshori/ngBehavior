<h1>ngBehavior</h1>
ngBehavior set of AngularJs Directives, which includes items that are used for input validation.
Nuget Link: - ([ngBehavior]( https://www.nuget.org/packages/ngBehavior/))

<h1>note</h1>
```bash
all directives use for &#60;input />
```
<h1>ngBlur</h1>
```html
<input type="text" ng-model="fullName" ng-blur="onblur('Maher Ashori')" placeholder="Full Name" />
```
<h1>ngCurrency</h1>
```html
<input type="text" ng-model="currencyInput" ng-currency />
```
<h1>ngDatePicker</h1>
```html
<input type="text" class="form-control" ng-model="datePicker1" ng-date-picker placeholder="sample 1" />

<input type="text" class="form-control" ng-model="datePicker2" ng-date-picker format="yy/mm/dd" placeholder="sample 2" />

<input type="text" class="form-control" ng-model="datePicker3" ng-date-picker format="yy/mm/dd" change-year="true" change-month="true" placeholder="sample 3" />

<input type="text" class="form-control" ng-model="datePicker5" ng-date-picker format="yy/mm/dd" min-date="2015/03/01" max-date="2015/03/10" placeholder="sample 4" />

<input type="text" class="form-control" ng-model="datePicker6" ng-date-picker format="yy/mm/dd" min-date="2015/03/01" max-date="today" placeholder="sample 4" />

<input type="text" class="form-control" ng-model="datePicker6" ng-date-picker format="yy/mm/dd" months-number="2" placeholder="sample 4" />

<input type="text" class="form-control" ng-model="datePicker6" ng-date-picker format="yy/mm/dd" show-button-panel="true" placeholder="sample 4" />
```

<h1>ngEnglish</h1>
```html
<input type="text" ng-model="englishInput1" ng-english number="true" placeholder="just english with Number" />

<input type="text" ng-model="englishInput2" ng-english number="false" placeholder="just english without Number" />
  ```
<h1>ngFarsi</h1>
```html
<input type="text" ng-model="farsiInput1" ng-farsi number="true" placeholder="just Farsi with Number" />
<input type="text" ng-model="farsiInput2" ng-farsi number="false" placeholder="just Farsi & No number" />
```
<h1>ngFarsi::arabic-to-farsi-word ['ي', 'ی','ك', 'ک']</h1>
```html
<input type="text" ng-model="farsiInput3" ng-farsi number="false" arabic-to-farsi-word="true" placeholder="just Farsi & No number & arabic to farsi word" />

<input type="text" ng-model="farsiInput4" ng-farsi number="true" arabic-to-farsi-word="true" placeholder="just Farsi & With number & arabic to farsi word" />
```
<h1>ngFloat</h1>
```html
<input type="text" ng-model="floatInput" ng-float number="true" placeholder="type 1.55 OR etc" />
```

<h1>ngFocus</h1>
```html
<input type="text" ng-model="firstName" ng-focus="true" placeholder="FirstName" />

<input type="text" ng-model="lastName" ng-focus="onfocus('Ashori')" placeholder="LastName" />
```

<h1>ngInteger</h1>
```html
<input type="text" ng-model="code" ng-integer placeholder="just integer" />
```

<h1>ngTimePicker</h1>
```html
<ng-time-picker format="24" ng-model="time" time="{{time}}" lang="fa"></ng-time-picker>
```
- lang="fa OR en" : result > change the input placeholder text
- format="12 OR 24" : result > change format of the time
- $scope.time="12:55:13"
- 
<h1>ngLogin</h1>
```html
<ng-login username-label="username" password-label="password" input-label="false">
  <button ng-click="login()" class="btn btn-info btn-block login">login</button>
</ng-login>
```
- input-label: boolen
- username-label: Text
- password-label: Text
- 
<h1>ngRating</h1>
```html
<ng-rating number="8" current-rate="1" icon="fa fa-star-o fa-2x" active-icon="fa fa-star fa-2x" rate-action="controllerFunction"></ng-rating>
```

- number: int <i style="color:red">[number of rating]</i>
- icon: "css class or html unicode"
- active-icon: "css class or html unicode"
- rate-action: call action from your controller (see the example)
