# Angular

## sending data from parent to child

- Make a child component
- Use child component in parent component.html
  - make and pass a variable like `(VARIABLE_OF_OUTPUT_IN_CHILD)="FUNCTION_NAME($event)"` in child component attribute in `parent.component.html`
  - Then make a function in `parent.component.ts` named/like `FUNCTION_NAME(VALUE: TYPE){}`
- Send function from parent component
  - IN CHILD COMPONENT iMPORT `Output and EventEmitter` like `import { Component, OnInit, Output, EventEmitter } from '@angular/core';`
  - then Make an output decorator function like `@Output() VARIABLE_OF_OUTPUT_IN_CHILD = new EventEmitter<type>();`
  - Then call the `VARIABLE_OF_OUTPUT_IN_CHILD` function like `(EVENT) = "VARIABLE_OF_OUTPUT_IN_CHILD.emit(VALUE)"`
  - now whenever the event occur in child component the value in parent component get chage by calling `FUNCTION_NAME` in parent from child.
- get data in parent component
