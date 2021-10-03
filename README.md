# Angular

## Send data child to component

- Pass a variable in double qutes from parent(From which we are calling child) to child(The component who called from another component) by there html tags using binding a variable `<child-component [VARIBALE_IN_CHILD]="VARIABLE_FROM_PARENT"></child-component>`
- In `child-componentcomponent.ts` file of child component add `Inpu`t in Imports like this `import { Component, Input, OnInit } from '@angular/core';`
- Than declare an input function like this `@Input() VARIBALE_IN_CHILD = value;` in class `ChildComponent`.
- Then use `VARIBALE_IN_CHILD` noramlly as a varibale in html file.
- Then if we want to update or change value dynamically in child component. Then we have to use normal procedure to change thevalue of `VARIABLE_FROM_PARENT` in parent component.
- We can also send multiple values from parent to child
