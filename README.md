Clearcode numeral filter
=========

Filter that returns number parsed in set format.

Installation
--------------
``` bower install clearcodeangularjs/cc-numeral-filter --save ```


Usage
------

Add ``` cc.numeral.filter ``` module to your app module list :


```
angular
    .module('yourAwesomeApp', [
        'cc.numeral.filter'
    ]);
```
and you are ready to go!

Filters :

*numeral*

```
numeral(input, format);

\\ OR in html

numeral:format

```

list of formats - http://numeraljs.com/


Author
------

Witold Galecki

License
----

LGPL

