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

function ProductionVideoSystemException() {
	this.name = "ProductionVideoSystemException";
	this.message = "Error: El metodo necesita una Production como paramentro.";
}
ProductionVideoSystemException.prototype = new VideoSystemException(); //Heredamos de VideoSystemException
ProductionVideoSystemException.prototype.constructor = ProductionVideoSystemException;

function ProductionExistsVideoSystemException() {
	this.name = "ProductionExistsVideoSystemException";
	this.message = "Error: La produccion ya existe en el sistema.";
}
ProductionExistsVideoSystemException.prototype = new VideoSystemException(); //Heredamos de VideoSystemException
ProductionExistsVideoSystemException.prototype.constructor = ProductionExistsVideoSystemException;

function ProductionNotExistsVideoSystemException() {
	this.name = "ProductionNotExistsVideoSystemException";
	this.message = "Error: La produccion NO existe en el sistema.";
}
ProductionNotExistsVideoSystemException.prototype = new VideoSystemException(); //Heredamos de VideoSystemException
ProductionNotExistsVideoSystemException.prototype.constructor = ProductionNotExistsVideoSystemException;

function PersonVideoSystemException() {
	this.name = "PersonVideoSystemException";
	this.message = "Error: El metodo necesita una persona como paramentro.";
}

function PersonVideoSystemException() {
	this.name = "PersonVideoSystemException";
	this.message = "Error: El metodo necesita un Person como paramentro.";
}
PersonVideoSystemException.prototype = new VideoSystemException(); //Heredamos de VideoSystemException
PersonVideoSystemException.prototype.constructor = PersonVideoSystemException;

function PersonExistsVideoSystemException() {
	this.name = "PersonExistsVideoSystemException";
	this.message = "Error: La persona ya existe en el sistema.";
}
PersonExistsVideoSystemException.prototype = new VideoSystemException(); //Heredamos de VideoSystemException
PersonExistsVideoSystemException.prototype.constructor = PersonExistsVideoSystemException;

function PersonNotExistsVideoSystemException() {
	this.name = "PersonNotExistsVideoSystemException";
	this.message = "Error: La persona NO existe en el sistema.";
}
PersonNotExistsVideoSystemException.prototype = new VideoSystemException(); //Heredamos de VideoSystemException
PersonNotExistsVideoSystemException.prototype.constructor = PersonNotExistsVideoSystemException;

function NullParamException(param) {
	this.name = "NullParamException";
	this.message = "Error: El parametro "+ param +" no puede ser nulo.";
}
NullParamException.prototype = new VideoSystemException();
NullParamException.prototype.constructor = NullParamException;

function AssignCategoryException() {
	this.name = "AssignCategoryException";
	this.message = "Error: La categoria ya tiene asignada una produccion.";
}
AssignCategoryException.prototype = new VideoSystemException();
AssignCategoryException.prototype.constructor = AssignCategoryException;

function AssignDirectorException() {
	this.name = "AssignDirectorException";
	this.message = "Error: El director ya tiene asignada una produccion.";
}
AssignDirectorException.prototype = new BaseException();
AssignDirectorException.prototype.constructor = AssignDirectorException;

function AssignActorException() {
	this.name = "AssignActorException";
	this.message = "Error: El actor ya tiene asignada una produccion.";
}
AssignActorException.prototype = new BaseException();
AssignActorException.prototype.constructor = AssignActorException;

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

			//Devuelve un iterator de las categorias del gestor
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
				var position = this.getCategoryPosition(category); 	
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
				var position = this.getCategoryPosition(category); 	
				if (position !== -1){
					_categories.splice(position, 1);					
				} else{
					throw new CategoryNotExistsVideoSystemException();
				}	
				return _categories.length;
			}

			//Dado una categoría, devuelve la posición de esa categoría en el array de categorías o -1 si no lo encontramos.
			this.getCategoryPosition = function(category){
				if (!(category instanceof Category)) { 
					throw new CategoryVideoSystemException();
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

				var positionUsername = this.getUsernamePosition(user);
				var positionEmail = this.getEmailPosition(user); 
				
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
				var position = this.getUsernamePosition(user); 	
				if (position !== -1){
					_users.splice(position, 1);															
				} else{
					throw new UserNotExistsVideoSystemException();
				}	
				return _users.length;
			}

			//Dado un usuario, devuelve la posición de ese usuario en el array de usuarios o -1 si no lo encontramos.
			this.getUsernamePosition= function(user){
				if (!(user instanceof User)) { 
					throw new UserVideoSystemException ();
				}		

				function compareElements(element) {
				  return (element.username === user.username)
				}
				
				return _users.findIndex(compareElements);		
			}

			//Dado un email, devuelve la posición de ese email en el array de usuarios o -1 si no lo encontramos.
			this.getEmailPosition= function(user){
				if (!(user instanceof User)) { 
					throw new UserVideoSystemException ();
				}		

				function compareElements(element) {
				  return (element.email === user.email)
				}
				
				return _users.findIndex(compareElements);		
			}

			/* Definición del atributo productions como array para contener todos las producciones del gestor. */
			var _productions = []; //array con las producciones del sistema.
			//Devuelve un iterator de los producciones del gestor
			Object.defineProperty(this, 'productions', {
				get:function(){
					var nextIndex = 0;		    
					return {
						next: function(){
							return nextIndex < _productions.length ?
								{value: _productions[nextIndex++], done: false} : {done: true};
						}
					}
				}	
			});

			//Añade una nueva produccion al sistema
			this.addProduction = function(production){
				if(!(production instanceof Production)){
					throw new ProductionVideoSystemException;
				}
				
				var position = this.getProductionPosition(production); 
				//Si la produccion no existe en el sistema..	
				if (position === -1){
					_productions.push(production); //La añadimos
				} else{
					throw new ProductionExistsVideoSystemException(); //Lanzamos una excepcion
				}
				return _productions.length;
			};

			//Elimina una produccion del gestor
			this.removeProduction = function(production){
				if(!(production instanceof Production)){
					throw new ProductionVideoSystemException;
				}
				
				var position = this.getProductionPosition(production);
				//Si la produccion existe en el sistema...
				if (position !== -1){
					_productions.splice(position, 1); //La borramos		
				} else{
					throw new ProductionNotExistsVideoSystemException();
				}	
				return _productions.length;
			};

			//Dado una produccion, devuelve la posición de esa produccion en el array de production o -1 si no lo encontramos.
			this.getProductionPosition = function(production){
				if(!(production instanceof Production)){
					throw new ProductionVideoSystemException;
				}

				function compareElements(element) {
				  return (element.title === production.title)
				}
				return _productions.findIndex(compareElements);		
			}
			
			/* Definición del atributo actor como array para contener todos los actores del gestor. */
			var _actors = []; //array con los actores del sistema.
			//Devuelve un iterador que permite recorrer los actores registrados en el sistema
			Object.defineProperty(this, 'actors', {
				get:function(){
					var nextIndex = 0;		    
					return {
						next: function(){
							return nextIndex < _actors.length ?
								{value: _actors[nextIndex++].actor, done: false} : {done: true};
						}
					}
				}	
			});

			//Añade una nuevo actor
			this.addActor = function(actor){
				if(!(actor instanceof Person)){
					throw new PersonVideoSystemException ();
				}
				
				var position = this.getActorPosition(actor); 
				//Si la posicion de position es igual a -1, no
				//existe ningun actor con el mismo nombre
				if (position === -1){
					_actors.push(
						{
							actor: actor,
							productions: []
						}
					);
				} else{
					throw new PersonExistsVideoSystemException;
				}
				return _actors.length;
			};

			//Elimina un actor del sistema
			this.removeActor = function(actor){
				if(!(actor instanceof Person)){
					throw new PersonVideoSystemException();
				}

				var position = this.getActorPosition(actor);
				if (position !== -1){
					_actors.splice(position, 1);			
				} else{
					throw new PersonNotExistsVideoSystemException();
				}
				return _actors.length;
			};

			//Dado un objeto Actor, devuelve la posición de ese objeto.
			this.getActorPosition = function(actor){
				if(!(actor instanceof Person)){
					throw new PersonVideoSystemException();
				}

				function compareElements(element) {
				  return (element.actor.name === actor.name || element.actor.lastName1 === actor.lastName1)
				}
				return _actors.findIndex(compareElements);		
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
			this.addDirector = function(director){
				//Comprobamos que el director se crea con el operador new
				if (!(director instanceof Person)) { 
					throw new PersonVideoSystemException();
				}	

				var position = this.getDirectorPosition(director);
				
				if (position === -1){
					_directors.push(
						{
							director : director,
							productions:[]
						}
					);
				} else{
					throw new PersonExistsVideoSystemException();
				}

				return _directors.length; //Devuelvo el numero de elementos
			}

			//Elimina un nuevo director del gestor
			this.removeDirector = function(person){
				if (!(person instanceof Person)) { 
					throw new PersonVideoSystemException();
				}		
				var position = this.getDirectorPosition(person); 	
				if (position !== -1){
					_directors.splice(position, 1);															
				} else{
					throw new PersonNotExistsVideoSystemException();
				}	
				return _directors.length;
			}

			//Dado un director, devuelve la posición de ese director en el array de directores o -1 si no lo encontramos.
			this.getDirectorPosition = function(person){
				if (!(person instanceof Person)) { 
					throw new PersonVideoSystemException ();
				}		

				function compareElements(element) {
				  return (element.director.name === person.name)
				}
				
				return _directors.findIndex(compareElements);		
			}

			//Asignar categoria
			//Asigna una o mas producciones a una categoria. Si el objeto Category o Production no existen se añaden al sistema.
			this.assignCategory = function(category, production){
				//Si el parametro category es nulo...
				if (category == null) {
					throw new NullParamException("category"); //Lanzamos una excepcion
				}

				//Si el parametro production es nulo...
				if (production == null) {
					throw new NullParamException("production"); //Lanzamos una excepcion
				}

				var positionCategory = this.getCategoryPosition(category); 
				var positionProduction = this.getProductionPosition(production);

				//Si la categoria existe...buscamos la produccion
				if(positionCategory !== -1){
					//Si la produccion coincide con la introducida por parametro...
					if(positionProduction !== -1){
						var i = 0;
						var boolean = false; //Inicializamos una variable booleana a false

						//Buscamos en el array de productions si coincide alguna produccion con la introducida
						while(i < _categories[positionCategory].productions.length && !boolean){
							//Si los titulos de las producciones coinciden...
							if (_categories[positionCategory].productions[i].title === production.title){
								boolean = true; //Cambiamos el valor de boolean a true
							}
							i++; //Incrementamos el valor de i
						}

						//Si el valor de boolean es falso...
						if(!boolean){
						//Cogemos la categoria que coincida con la posicion de la categoria encontrada.
						//La propiedad production de ese elemento. Hace el push al array.
							_categories[positionCategory].productions.push(production);
						}else{
							throw new AssignCategoryException(); //Lanzamos una excepcion
						}
					}else{
						this.addProduction(production); //Añadimos la produccion
						this.assignCategory(category, production); //Llamamos otra vez a la funcion
					}
				}else{
					this.addCategory(category); //Añadimos la categoria
					this.assignCategory(category, production);
				}

				return _categories[positionCategory].productions.length;
			};

			//Deasignar categoria
			//Desasigna una o más producciones de una categoría.
			this.deassignCategory = function(category, production){
				//Si el parametro category es nulo...
				if (category == null) {
					throw new NullParamException("category"); //Lanzamos una excepcion
				}

				//Si el parametro production es nulo...
				if (production == null) {
					throw new NullParamException("production"); //Lanzamos una excepcion
				}

				//Busca la posicion de esa categoria en el array _categories para ver si existe.
				var positionCategory = this.getCategoryPosition(category); 
				var positionProduction = this.getProductionCategoryPosition(production, _categories[positionCategory].productions);

				//Si la categoria existe...buscamos la produccion
				if(positionCategory !== -1){
					//Si la produccion coincide con la introducida por parametro...
					if(positionProduction !== -1){	
						//Deasignamos esa produccion de esa categoria	
						_categories[positionCategory].productions.splice(positionProduction,1);
					}else{//Si no existe la produccion
						throw new ProductionNotExistsVideoSystemException();
					}	
				}else{//Si no existe la categoria
					throw new CategoryNotExistsVideoSystemException();
				}

				return _categories[positionCategory].productions.length;
			};

			//Dado una produccion y el array productions de las categorias, devuelve la posición de esa produccion.
			this.getProductionCategoryPosition = function(production, categoryProduction){
				function compareElements(element) {
					return (element.title === production.title)
				}
				return categoryProduction.findIndex(compareElements);		
			}

			//Asignar director
			//Asigna uno o más producciones a un director. Si el director y el objeto Production no existen se añaden al sistema
			this.assignDirector = function(director, production){
				//Si el parametro director es nulo...
				if (director == null) {
					throw new NullParamException("director");
				}

				//Si el parametro production es nulo...
				if (production == null) {
					throw new NullParamException("production");
				}
				var positionDirector = this.getDirectorPosition(director); 
				var positionProduction = this.getProductionPosition(production);

				//Si el director existe...buscamos la produccion
				if(positionDirector !== -1){ 
					//Si la produccion existe...la asigna al director
					if(positionProduction !== -1){ 
						var i = 0;
						var boolean = false;

						//Buscamos en el array de productions si coincide alguna produccion con la introducida
						while(i < _directors[positionDirector].productions.length && !boolean){
							//Si los titulos de las producciones coinciden...
							if (_directors[positionDirector].productions[i].title === production.title){
								boolean = true; //Modificamos el valor de boolean a true
							}
							i++; //Incrementamos el valor de i
						}

						//Si el valor de boolean es falso...
						if(!boolean){
							//Cogemos el director que coincida con la position del director encontrado.
							//La propiedad production de ese elemento.Hace el push al array con el objeto literal
							_directors[positionDirector].productions.push(production);
						}else{
							throw new AssignDirectorException();
						}
					}else{//Si no existe...
						this.addProduction(production); //Añadimos la produccion
						this.assignDirector(director, production);
					}
				}else{//Si no existe...
					this.addDirector(director); //Añadimos el director
					this.assignDirector(director, production);
				}
				return _directors[positionDirector].productions.length;
			};

			//Designar director
			//Desasigna una o más producciones de un director.
			this.deassignDirector = function(director, production){
				//Si el parametro director es nulo...
				if (director == null) {
					throw new NullParamException("director");
				}

				//Si el parametro production es nulo...
				if (production == null) {
					throw new NullParamException("production");
				}

				//Busca la posicion de ese director en el array _directors para ver si existe.
				var positionDirector = this.getDirectorPosition(director); 
				var positionProduction = this.getProductionDirectorPosition(production, _directors[positionDirector].productions);
				
				//Si el director existe...buscamos la produccion
				if(positionDirector !== -1){
					//Si la produccion existe...la asigna al director
					if(positionProduction !== -1){
						//Deasignamos esa produccion a ese director
						_directors[positionDirector].productions.splice(positionProduction,1);
					}else{//Si no existe la produccion
						throw new ProductionNotExistsVideoSystemException();
					}
				}else{//Si no existe el director
					throw new PersonNotExistsVideoSystemException();
				}
				return _directors[positionDirector].productions.length;
			};

			//Dado una produccion y el array productions de los directores, devuelve la posición de esa produccion.
			this.getProductionDirectorPosition = function(production, directorProduction){
				function compareElements(element) {
					return (element.title === production.title)
				}
				return directorProduction.findIndex(compareElements);		
			}

			//Asignar actor
			//Asigna uno o más producciones a un actor. Si el actor o el objeto Production no existen se añaden al sistema
			this.assignActor = function(actor, production, character, main){
				//Si el parametro actor es nulo...
				if (actor == null) {
					throw new NullParamException("actor");
				}

				//Si el parametro production es nulo...
				if (production == null) {
					throw new NullParamException("production");
				}

				var positionActor = this.getActorPosition(actor); 
				var positionProduction = this.getProductionPosition(production);

				//Si el actor existe...buscamos la produccion
				if(positionActor !== -1){
					//Si la produccion existe...la asigna al actor
					if(positionProduction !== -1){
						var i = 0;
						var boolean = false;

						//Buscamos en el array de productions si coincide alguna produccion con la introducida
						while(i < _actors[positionActor].productions.length && !boolean){
							//Si los titulos de las producciones coinciden...
							if (_actors[positionActor].productions[i].production.title === production.title){
								boolean = true; //Modificamos el valor de boolean a true
							}
							i++; //Incrementamos el valor de i
						}

						//Si el valor de boolean es falso...
						if(!boolean){
							//Cogemos el actor que coincida con la position del actor encontrado.
							_actors[positionActor].productions.push(
								{
									production: production,
									character: character,
									main: main
								}
							);
						}else{
							throw new AssignActorException();
						}
					}else{//Si no existe...
						this.addProduction(production); //Añadimos la produccion
						this.assignActor(actor, production, character, main);
					}	
				}else{//Si no existe...
					this.addActor(actor); //Añadimos el actor
					this.assignActor(actor, production, character, main);
				}
				
				return _actors[positionActor].productions.length;
			};			

			//Deasignar actor
			//Desasigna una o más producciones de un actor.
			this.deassignActor = function(actor, production){
				//Si el parametro actor es nulo...
				if (actor == null) {
					throw new NullParamException("actor");
				}

				//Si el parametro production es nulo...
				if (production == null) {
					throw new NullParamException("production");
				}
				var positionActor = this.getActorPosition(actor); 
				var positionProduction = this.getProductionActorPosition(production, _actors[positionActor].productions);
				
				//Si el actor existe...buscamos la produccion
				if(positionActor !== -1){ 
					//Si la produccion existe...la asigna al actor
					if(positionProduction !== -1){
						//Deasignamos esa produccion a ese actor
						_actors[positionActor].productions.splice(positionProduction,1);
					}else{ //Si no existe la produccion
						throw new ProductionNotExistsVideoSystemException();
					}	
				}else{ //Si no existe el actor
					throw new PersonNotExistsVideoSystemException();
				}

				return _actors[positionActor].productions.length;
			};

			//Dado una produccion y el array productions de los actores, devuelve la posición de esa produccion.
			this.getProductionActorPosition = function(production, actorProduction){
				function compareElements(element) {
					return (element.production.title === production.title)
				}
				return actorProduction.findIndex(compareElements);		
			}

			//Obtiene un iterador con la relación de los actores del reparto de una produccion y sus personajes
			this.getCast = function(production){
				//Si el parametro production es nulo...
				if (production == null) {
					throw new NullParamException("production");
				}	

				var positionProduction = this.getProductionPosition(production); 	

				//Si la produccion no existe...
				if (positionProduction === -1) {
					throw new ProductionNotExistsVideoSystemException();
				}
				var nextActor = 0;
				var nextProduction = 0;
			    return {
					next: function(){
						var actor = null;
						var papel = null;
						var principal = null;
						while (nextActor < _actors.length && actor === null){
							if (nextProduction < _actors[nextActor].productions.length && _actors[nextActor].productions[nextProduction].production.title === production.title){
								actor = _actors[nextActor].actor;
								papel = _actors[nextActor].productions[nextProduction].character;
								principal = _actors[nextActor].productions[nextProduction].main;
							}
							nextProduction++;
							if (nextProduction >= _actors[nextActor].productions.length){
								nextProduction = 0;
								nextActor++;
							}
						}

						//Si el actor, papel y principal son distintos de nulos...
						if (actor !== null && papel !== null && principal !== null){
							//Devolvemos su valor
							return {value: actor, papel: papel, principal: principal, done: false}
						}
						if (nextActor >= _actors.length) return {done: true};
					}
				}
			};

			//Obtiene un iterador con las producciones de un director.
			this.getProductionsDirector = function(director){
				//Si el parametro director es nulo...
				if (director == null) {
					throw new NullParamException("director");
				}		

				var positionDirector = this.getDirectorPosition(director); 	

				//Si el director no existe...
				if (positionDirector === -1) {
					throw new PersonNotExistsVideoSystemException();
				}
				var nextIndex = 0;
			    return {
			       next: function(){
			       		var directors = null;
			       		while (nextIndex < _directors[positionDirector].productions.length && directors === null){
			       			if (_directors[positionDirector].director.name === director.name){
								directors = _directors[positionDirector].productions[nextIndex];
			       			}
			       			nextIndex++;
						}
						   
						//Si directors es distinto de null
			       		if (directors !== null){
							   //Devolvemos su valor
			       			return {value: directors, done: false}
			       		}
			       		if (nextIndex >= _directors[positionDirector].productions.length) return {done: true};
			       }
			    }
			};

			//Obtiene un iterador con las producciones de un actor y su papel en la producción.
			this.getProductionsActor = function(actor){
				//Si el parametro director es nulo...
				if (actor == null) {
					throw new NullParamException("actor");
				}			
				var positionActor = this.getActorPosition(actor);

				//Si el actor no existe...
				if (positionActor === -1) {
					throw new PersonNotExistsVideoSystemException();
				}
				var nextIndex = 0;
			    return {
			       next: function(){
						   var production = null;
						   var papel = null;
			       		while (nextIndex < _actors[positionActor].productions.length && production === null){
			       			if (_actors[positionActor].actor.name === actor.name){
								production = _actors[positionActor].productions[nextIndex].production;
								papel = _actors[positionActor].productions[nextIndex].character;
			       			}
			       			nextIndex++;
						}
						   
						//Si la produccion es distinto de null
			       		if (production !== null){
							//Devolvemos su valor
			       			return {value: production, papel: papel, done: false}
			       		}
			       		if (nextIndex >= _actors[positionActor].productions.length) return {done: true};
			       }
			    }
			};

			//Obtiene un iterador con las producciones de una categoría determinada.
			this.getProductionsCategory = function(category){
				//Si el parametro category es nulo...
				if (category == null) {
					throw new NullParamException("category");
				}			
				var positionCategory = this.getCategoryPosition(category); 	

				//Si la categoria no existe...
				if (positionCategory === -1) {
					throw new CategoryNotExistsVideoSystemException();
				}
				var nextIndex = 0;
			    return {
			       next: function(){
			       		var production = null;
			       		while (nextIndex < _categories[positionCategory].productions.length && production === null){
			       			if (_categories[positionCategory].category.name === category.name){
								production = _categories[positionCategory].productions[nextIndex];
			       			}
			       			nextIndex++;
						}
						//Si la produccion es distinto de null 
			       		if (production !== null){
							   //Devolvemos su valor
			       			return {value: production, done: false}
			       		}
			       		if (nextIndex >= _categories[positionCategory].productions.length) return {done: true};
			       }
			    }
			};

		} //Fin constructor VideoSystem
		VideoSystem.prototype = {}; 
		VideoSystem.prototype.constructor = VideoSystem;

		var instance = new VideoSystem();//Devolvemos el objeto VideoSytem para que sea una instancia única.
		Object.freeze(instance);
		return instance;
	} //Fin inicialización del Singleton
	return {
		// Devuelve un objeto con el método getInstance
		getInstance: function () { 
			if (!instantiated) { //Si la variable instantiated es undefined, primera ejecución, ejecuta init.
				instantiated = init(); //instantiated contiene el objeto único
			}
			return instantiated; //Si ya está asignado devuelve la asignación.
		}
	};
}) ();