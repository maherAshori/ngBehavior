# ngBehavior
ngBehavior set of AngularJs Directives, which includes items that are used for input validation.

#note
  all directives use for <input />

#ngBlur
  <input type="text" ng-model="fullName" ng-blur="onblur('My Name')" placeholder="Full Name" />

#ngCurrency
  <input type="text" ng-model="currencyInput" ng-currency />

#ngDatePicker
  <input type="text" class="form-control" ng-model="datePicker1" ng-date-picker placeholder="sample 1" />
  <input type="text" class="form-control" ng-model="datePicker2" ng-date-picker format="yy/mm/dd" placeholder="sample 2" />
  <input type="text" class="form-control" ng-model="datePicker3" ng-date-picker format="yy/mm/dd" change-year="true" change-month="true" placeholder="sample 3" />
  <input type="text" class="form-control" ng-model="datePicker5" ng-date-picker format="yy/mm/dd" min-date="2015/03/01" max-date="2015/03/10" placeholder="sample 4" />
  <input type="text" class="form-control" ng-model="datePicker6" ng-date-picker format="yy/mm/dd" min-date="2015/03/01" max-date="today" placeholder="sample 4" />
  <input type="text" class="form-control" ng-model="datePicker6" ng-date-picker format="yy/mm/dd" months-number="2" placeholder="sample 4" />  
  <input type="text" class="form-control" ng-model="datePicker6" ng-date-picker format="yy/mm/dd" show-button-panel="true" placeholder="sample 4" />

#ngEnglish
  <input type="text" ng-model="englishInput1" ng-english number="true" placeholder="just english with Number" />
  <input type="text" ng-model="englishInput2" ng-english number="false" placeholder="just english without Number" />
  
#ngFarsi
    <input type="text" ng-model="farsiInput1" ng-farsi number="true" placeholder="just Farsi with Number" />
    <input type="text" ng-model="farsiInput2" ng-farsi number="false" placeholder="just Farsi & No number" />

#ngFarsi::arabic-to-farsi-word ['ي', 'ی','ك', 'ک']   
    <input type="text" ng-model="farsiInput3" ng-farsi number="false" arabic-to-farsi-word="true" placeholder="just Farsi & No number & arabic to farsi word" />
    <input type="text" ng-model="farsiInput4" ng-farsi number="true" arabic-to-farsi-word="true" placeholder="just Farsi & With number & arabic to farsi word" />

#ngFloat
<input type="text" ng-model="floatInput" ng-float number="true" placeholder="type 1.55 OR etc" />

#ngFocus
    <input type="text" ng-model="firstName" ng-focus="true" placeholder="FirstName" />
    <input type="text" ng-model="lastName" ng-focus="onfocus('Ashori')" placeholder="LastName" />
    
#ngInteger
<input type="text" ng-model="code" ng-integer placeholder="just integer" />

#ngTimePicker
<ng-time-picker format="24" ng-model="time" time="{{time}}" lang="fa"></ng-time-picker>
> format="12 OR 24"
> $scope.time="12:55:13"
