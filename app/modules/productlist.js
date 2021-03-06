/*Module : Product List*/

app.define('productlist', {
  
  /**
   * config{} contains configuration properties.
   *
  */
  config : {
    title : 'Product List View'
  },
  
  /**
   * models{} contains module-specific model structures.
   *
  */
  models : [{
      modelExmampleForProductListModule1 : function(args) {
        this.testVar1 = args.testVar1;
        return this;
      }
    },
    {
      modelExmampleForProductListModule2 : function(args) {
        this.testVar1 = args.testVar1;
        return this;
      }
    }
  ],
  
  /**
   * el{} wraps the elements living in the context of current module.
   *
  */
  el : {
    container : document.querySelector('#productlist')
  },
  
  /**
   * fn{} is used to reach module specific methods / functions.
   *
  */
  fn : {
    isUndefined : function (obj) {
      return (typeof obj === 'undefined');
    },
    isNull : function (obj) {
      return (typeof obj === 'null');
    }
  },
  
  /**
   * getInstance() returns the current context.
   *
  */
  getInstance : function () {
    return this;
  },
  
  /**
   * init() stars the current module.
   *
  */
  init : function () {

  	/*getting instance*/
  	var self = this.getInstance();
    
    /*subscribind the message for customTopicForProductListTestData topic*/
    app.subscribe('customTopicForProductListTestData', function(args) {
      app.el.messagePane.innerHTML += args.testMessage;
    });

  }
  
});