<h1>ngBehavior</h1>
<p>
ngBehavior set of AngularJs Directives, which includes items that are used for input validation.
Nuget Link: https://www.nuget.org/packages/ngBehavior/
</p>

<h1>note</h1>
<p>all directives use for <pre>&#60;input /></pre></p>

#ngBlur
&#60;input type="text" ng-model="fullName" ng-blur="onblur('Maher Ashori')" placeholder="Full Name" />
#ngCurrency
&#60;input type="text" ng-model="currencyInput" ng-currency />

#ngDatePicker 
&#60;input type="text" class="form-control" ng-model="datePicker1" ng-date-picker placeholder="sample 1" />

&#60;input type="text" class="form-control" ng-model="datePicker2" ng-date-picker format="yy/mm/dd" placeholder="sample 2" />

&#60;input type="text" class="form-control" ng-model="datePicker3" ng-date-picker format="yy/mm/dd" change-year="true" change-month="true" placeholder="sample 3" />

&#60;input type="text" class="form-control" ng-model="datePicker5" ng-date-picker format="yy/mm/dd" min-date="2015/03/01" max-date="2015/03/10" placeholder="sample 4" />

&#60;input type="text" class="form-control" ng-model="datePicker6" ng-date-picker format="yy/mm/dd" min-date="2015/03/01" max-date="today" placeholder="sample 4" />

&#60;input type="text" class="form-control" ng-model="datePicker6" ng-date-picker format="yy/mm/dd" months-number="2" placeholder="sample 4" />  

&#60;input type="text" class="form-control" ng-model="datePicker6" ng-date-picker format="yy/mm/dd" show-button-panel="true" placeholder="sample 4" />

#ngEnglish
&#60;input type="text" ng-model="englishInput1" ng-english number="true" placeholder="just english with Number" />

&#60;input type="text" ng-model="englishInput2" ng-english number="false" placeholder="just english without Number" />
  
#ngFarsi
&#60;input type="text" ng-model="farsiInput1" ng-farsi number="true" placeholder="just Farsi with Number" />
&#60;input type="text" ng-model="farsiInput2" ng-farsi number="false" placeholder="just Farsi & No number" />

#ngFarsi::arabic-to-farsi-word ['ي', 'ی','ك', 'ک']   
&#60;input type="text" ng-model="farsiInput3" ng-farsi number="false" arabic-to-farsi-word="true" placeholder="just Farsi & No number & arabic to farsi word" />

&#60;input type="text" ng-model="farsiInput4" ng-farsi number="true" arabic-to-farsi-word="true" placeholder="just Farsi & With number & arabic to farsi word" />

#ngFloat
&#60;input type="text" ng-model="floatInput" ng-float number="true" placeholder="type 1.55 OR etc" />

#ngFocus
&#60;input type="text" ng-model="firstName" ng-focus="true" placeholder="FirstName" />

&#60;input type="text" ng-model="lastName" ng-focus="onfocus('Ashori')" placeholder="LastName" />
    
#ngInteger
&#60;input type="text" ng-model="code" ng-integer placeholder="just integer" />

#ngTimePicker
&#60;ng-time-picker format="24" ng-model="time" time="{{time}}" lang="fa">&#60;/ng-time-picker>
> format="12 OR 24"
> $scope.time="12:55:13"
