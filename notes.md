"v-on:" can be replaced with "@"
"v-bind:" can be replaced with just ":"

#### Methods
- use with event binding or data binding
- method is executed for every re-render
- use when data or events need to be evaluated all the time

#### Computed
Computed properties are useful for outputting dynamic values as *they run once at page load and then only when called* which help with performance unlike methods.
- use with data binding
- only re-evaluated if one of their used values change
- use for data that depends on other data

#### Watch
Watchers are functions that are called when dependencies are changed, watchers are good for performing code when a condition on a dependency is met.
- not used directly in template
- run code in reaction to changed data
- use for non-data updates

