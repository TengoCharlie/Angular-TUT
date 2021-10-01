# Angular

## Module

- Component + component + helper + API + etc..
- Module is a large group of multiple items
- According to convention we are not using a module reusable.
- steps to setup a module
  - create module `ng g m MODULE_NAME`
  - Register module in the `imports` array of `app.module.ts`.
  - create components to use inside module `ng g c MODULE_NAME/COMPONENT_NAME`
  - register that components in `exports` array of `MODULE_NAME.module.ts`
  