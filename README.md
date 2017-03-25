#Styled Components the expo

CSS doesnt lend itself well to Component centric frontends.

current painpoints:
 1. Mapping of JSX/HTML to CSS with className={this.classes.whatevs} is a bit awkward
 2. CSS Modules adds a build step to unglobalise css (excess complexity)
 3. themeing every component must with import and HOC (bloat)
 4. forces camelCase for classes
 5. vars and mixins and css all over the place.



 #Why I like StyledComponents: 

 1. Elegance = its css in js  ~  JSX is to html in js
   - its got the possitives of inline (a trend in most modern FrontEnd JS libraries Vue, Polymer, Ng2, )
   - while still being css
   - But while still having the power of JS
   - Built in auto-prefixing

  2. Extendability and Composibility
   - Easy as pie to extend on old or 3rd party components || reuse

  3. Practises smaller components
   - less logic, less coupling, less less.
   - declaritive, all <p> can use the same styles without body inheirtance etc.

  4. Built in theming (via props not context)
   - could be simple for user based theming as well


#What I dont like

  1. Documentation is not amazing
  2. Crazy errors and stack traces (bit of a react composability problem)
  3. Not sure about server rendering
  4. Still Cascades for better or for worse
  5. there is some magic

##Dont know about performance, stateless components or css file generation for caching


@TODO: Themeing
@TODO: Bring in Oxygen
@TODO: make a style completely JS required