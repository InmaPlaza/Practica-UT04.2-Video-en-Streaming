"use strict"

function VideoSystemException() {
	this.name = "VideoSystemException";
	this.message = "Error: Video System Generic Exception.";
}
VideoSystemException.prototype = new BaseException(); //Heredamos de BaseException
VideoSystemException.prototype.constructor = VideoSystemException;

function CategoryVideoSystemException() {
	this.name = "CategoryVideoSystemException";
	this.message = "Error: El metodo necesita una Category como paramentro.";
}
CategoryVideoSystemException.prototype = new VideoSystemException(); //Heredamos de VideoSystemException
CategoryVideoSystemException.prototype.constructor = CategoryVideoSystemException;

function CategoryExistsVideoSystemException() {
	this.name = "CategoryExistsVideoSystemException";
	this.message = "Error: La categoria ya existe en el sistema.";
}
CategoryExistsVideoSystemException.prototype = new VideoSystemException(); //Heredamos de VideoSystemException
CategoryExistsVideoSystemException.prototype.constructor = CategoryExistsVideoSystemException;

function CategoryNotExistsVideoSystemException() {
	this.name = "CategoryNotExistsVideoSystemException";
	this.message = "Error: La categoria NO existe en el sistema.";
}
CategoryNotExistsVideoSystemException.prototype = new VideoSystemException(); //Heredamos de VideoSystemException
CategoryNotExistsVideoSystemException.prototype.constructor = CategoryNotExistsVideoSystemException;

function UserVideoSystemException() {
	this.name = "UserVideoSystemException";
	this.message = "Error: El metodo necesita un User como paramentro.";
}
UserVideoSystemException.prototype = new VideoSystemException(); //Heredamos de VideoSystemException
UserVideoSystemException.prototype.constructor = UserVideoSystemException;

function UserExistsVideoSystemException() {
	this.name = "UserExistsVideoSystemException";
	this.message = "Error: El usuario ya existe en el sistema.";
}
UserExistsVideoSystemException.prototype = new VideoSystemException(); //Heredamos de VideoSystemException
UserExistsVideoSystemException.prototype.constructor = UserExistsVideoSystemException;

function UserNotExistsVideoSystemException() {
	this.name = "UserNotExistsVideoSystemException";
	this.message = "Error: El usuario NO existe en el sistema.";
}
UserNotExistsVideoSystemException.prototype = new VideoSystemException(); //Heredamos de VideoSystemException
UserNotExistsVideoSystemException.prototype.constructor = UserNotExistsVideoSystemException;

function EmailExistsVideoSystemException() {
	this.name = "EmailExistsVideoSystemException";
	this.message = "Error: El email ya existe en el sistema.";
}
EmailExistsVideoSystemException.prototype = new VideoSystemException(); //Heredamos de VideoSystemException
EmailExistsVideoSystemException.prototype.constructor = EmailExistsVideoSystemException;

function PersonVideoSystemException() {
	this.name = "PersonVideoSystemException";
	this.message = "Error: El metodo necesita un Person como paramentro.";
}
PersonVideoSystemException.prototype = new VideoSystemException(); //Heredamos de VideoSystemException
PersonVideoSystemException.prototype.constructor = PersonVideoSystemException;

function PersonExistsVideoSystemException() {
	this.name = "PersonExistsVideoSystemException";
	this.message = "Error: El director ya existe en el sistema.";
}
PersonExistsVideoSystemException.prototype = new VideoSystemException(); //Heredamos de VideoSystemException
PersonExistsVideoSystemException.prototype.constructor = PersonExistsVideoSystemException;

function PersonNotExistsVideoSystemException() {
	this.name = "PersonNotExistsVideoSystemException";
	this.message = "Error: El director NO existe en el sistema.";
}
PersonNotExistsVideoSystemException.prototype = new VideoSystemException(); //Heredamos de VideoSystemException
PersonNotExistsVideoSystemException.prototype.constructor = PersonNotExistsVideoSystemException;

//La función anónima devuelve un método getInstance que permite obtener el objeto único
var VideoSystem = (function (){
    var instantiated; //Objeto con la instancia única VideoSystem

    function init() { //Inicialización del Singleton

        //Declaración de la función constructora de la instancia VideoSystem
        function  VideoSystem(){
            //La función se invoca con el operador new
			if (!(this instanceof VideoSystem)) 
            throw new InvalidAccessConstructorException();

            //Definicion del atributo name
            var _name = "";
            Object.defineProperty(this, 'name', {
				get:function(){
					return _name;
				},
				set:function(name = ""){
					name = name.trim();
					if (name === 'undefined' || name === "") throw new EmptyValueException("name");					
					_name = name;
				}		
			});

			/* Definición del atributo categories como array para contener todas las categorías del gestor. */
			var _categories = []; //array de categorías.

			//Devuelve un iterator de los autores del gestor
			Object.defineProperty(this, 'categories', {
				get:function(){
				    var nextIndex = 0;		    
				    return {
				       next: function(){
				           return nextIndex < _categories.length ?
				               {value: _categories[nextIndex++].category, done: false} :
				               {done: true};
				       }
				    }
				}	
			});	

			//Añade una nueva categoria al gestor
			this.addCategory = function(category){
				if (!(category instanceof Category)) { 
					throw new CategoryVideoSystemException();
				}		
				var position = getCategoryPosition(category); 	
				if (position === -1){
					_categories.push(
						{
							category: category,
							productions:[]
						}
					);
				} else{
					throw new CategoryExistsVideoSystemException();
				}	

				return _categories.length;
			}

			//Elimina una categoría del gestor
			this.removeCategory = function(category){
				if (!(category instanceof Category)) { 
					throw new CategoryVideoSystemException();
				}		
				var position = getCategoryPosition(category); 	
				if (position !== -1){
					_categories.splice(position, 1);					
				} else{
					throw new CategoryNotExistsVideoSystemException();
				}	
				return _categories.length;
			}

			//Dado una categoría, devuelve la posición de esa categoría en el array de categorías o -1 si no lo encontramos.
			function getCategoryPosition(category){
				if (!(category instanceof Category)) { 
					throw new CategoryImageManagerException();
				}		

				function compareElements(element) {
				  return (element.category.name === category.name)
				}
				
				return _categories.findIndex(compareElements);		
			}

			/* Definición del atributo users como array para contener todos los usuarios del gestor. */
			var _users = []; //array con los usuarios del sistema.
			//Devuelve un iterator de los usuarios del gestor
			Object.defineProperty(this, 'users', {
				get:function(){
				    var nextIndex = 0;		    
				    return {
				       next: function(){
				           return nextIndex < _users.length ?
				               {value: _users[nextIndex++], done: false} :
				               {done: true};
				       }
				    }
				}	
			});	

			//Añade un nuevo usuario al gestor
			this.addUser = function(user){
				//Comprobamos que el usuario se crea con el operador new
				if (!(user instanceof User)) { 
					throw new UserVideoSystemException ();
				}	

				var positionUsername = getUsernamePosition(user);
				var positionEmail = getEmailPosition(email); 
				
				//Si el nombre de usuario ya está en el sistema...
				if (!(positionUsername === -1)){
					throw new UserExistsVideoSystemException(); //lanzamos una excepcion
				}
				//Si el email ya existe en el sistema...
				if(!(positionEmail === -1)){
					throw new EmailExistsVideoSystemException(); //Lanzamos un excepcion
				}
				//Si el username y el email no existen en el sistema...se añaden
				_users.push(user);
				return _users.length; //Devuelvo el numero de elementos
			}

			//Elimina un nuevo autor del gestor
			this.removeUser = function(user){
				if (!(user instanceof User)) { 
					throw new UserVideoSystemException ();
				}		
				var position = getUserPosition(user); 	
				if (position !== -1){
					_users.splice(position, 1);															
				} else{
					throw new UserNotExistsVideoSystemException();
				}	
				return _users.length;
			}

			//Dado un usuario, devuelve la posición de ese usuario en el array de usuarios o -1 si no lo encontramos.
			function getUserPosition(user){
				if (!(user instanceof User)) { 
					throw new UserVideoSystemException ();
				}		

				function compareElements(element) {
				  return (element.username === user.username)
				}
				
				return _users.findIndex(compareElements);		
			}

			//Dado un email, devuelve la posición de ese email en el array de usuarios o -1 si no lo encontramos.
			function getEmailPosition(user){
				if (!(user instanceof User)) { 
					throw new UserVideoSystemException ();
				}		

				function compareElements(element) {
				  return (element.email === user.email)
				}
				
				return _users.findIndex(compareElements);		
			}

			/* Definición del atributo directors como array para contener todos los directores del gestor. */
			var _directors = []; //array con los directores del sistema.
			//Devuelve un iterator de los directores del gestor
			Object.defineProperty(this, 'directors', {
				get:function(){
				    var nextIndex = 0;		    
				    return {
				       next: function(){
				           return nextIndex < _directors.length ?
				               {value: _directors[nextIndex++], done: false} :
				               {done: true};
				       }
				    }
				}	
			});	

			//Añade un nuevo usuario al gestor
			this.addDirector = function(person){
				//Comprobamos que el director se crea con el operador new
				if (!(person instanceof Person)) { 
					throw new PersonVideoSystemException ();
				}	

				var position = getPosition(person);
				
				//Si el nombre del director no está en el sistema...
				if ((position === -1)){
					_directors.push(person); //Lo añadimos
				}else{
					throw new PersonExistsVideoSystemException(); //Lanzamos una excepcion
				}

				return _directors.length; //Devuelvo el numero de elementos
			}

			//Elimina un nuevo autor del gestor
			this.removeDirector = function(person){
				if (!(person instanceof Person)) { 
					throw new PersonVideoSystemException ();
				}		
				var position = getPosition(person); 	
				if (position !== -1){
					_directors.splice(position, 1);															
				} else{
					throw new PersonNotExistsVideoSystemException();
				}	
				return _directors.length;
			}

			//Dado un director, devuelve la posición de ese director en el array de directores o -1 si no lo encontramos.
			function getPosition(person){
				if (!(person instanceof Person)) { 
					throw new PersonVideoSystemException ();
				}		

				function compareElements(element) {
				  return (element.name === person.name)
				}
				
				return _directors.findIndex(compareElements);		
			}

		} //Fin constructor VideoSystem
		VideoSystem.prototype = {}; 
		VideoSystem.prototype.constructor = VideoSystem;

		var instance = new VideoStreaming();//Devolvemos el objeto VideoSytem para que sea una instancia única.
		Object.freeze(instance);
		return instance;
	} //Fin inicialización del Singleton
	return {
		// Devuelve un objeto con el método getInstance
		getInstance: function () { 
			if (!instantiated) { //Si la variable instantiated es undefined, priemera ejecución, ejecuta init.
				instantiated = init(); //instantiated contiene el objeto único
			}
			return instantiated; //Si ya está asignado devuelve la asignación.
		}
	};
}) ();